const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, phone, location } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        msg: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profile: {
        phone,
        location, // optional, can be null
      },
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.secretKey,
      {
        expiresIn: "2d",
      }
    );

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server error",
      err: error.message,
    });
  }
};

const otpStore = {};
const generateOTP = () => Math.floor(1000 + Math.random() * 9000);

// Send OTP via email using nodemailer
const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: ` ${otp} is Your OTP (One Time Password) to Login at MM Ecommerce.Never Share OTP with anyone.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent successfully");
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};

exports.loginWithOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await email.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User Doesnot exists",
      });
    }
    // Generate OTP
    const otp = generateOTP();
    console.log(otp);

    // Store the OTP in otpStore object with email as the key
    otpStore[email] = otp;

    // Send the OTP to user's email
    await sendOTPEmail(email, otp);

    // Respond with success message
    return res.status(200).json({
      success: true,
      msg: "OTP sent to your email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Ensure the OTP is treated as a number
    const parsedOtp = parseInt(otp, 10);

    // Check if OTP is valid
    if (otpStore[email] && otpStore[email] === parsedOtp) {
      const token = jwt.sign({ email }, process.env.secretKey, {
        expiresIn: "2d",
      });

      // Delete OTP from otpStore after successful verification
      delete otpStore[email];

      return res.status(200).json({
        success: true,
        msg: "OTP verified successfully",
        token,
      });
    } else {
      return res.status(400).json({
        success: false,
        msg: "Invalid OTP",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};
exports.LoadUser = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        msg: "Token is required",
      });
    }

    // Verify the provided token
    const verifiedToken = jwt.verify(token, process.env.secretKey);

    // Extract the email from the verified token
    const email = verifiedToken.email;

    // Find the user based on the email from the token
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "Email does not exist",
      });
    }

    // User found, return success
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      // Token error handling
      return res.status(401).json({
        success: false,
        msg: "Invalid token",
      });
    } else if (error.name === "TokenExpiredError") {
      // Token expired handling
      return res.status(401).json({
        success: false,
        msg: "Token has expired",
      });
    }

    // Generic error handler
    return res.status(500).json({
      success: false,
      msg: "Server error",
      err: error.message,
    });
  }
};
