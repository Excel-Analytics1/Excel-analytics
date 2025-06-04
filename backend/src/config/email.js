import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create reusable transporter object using environment variables
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Send an email
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text email body
 * @param {string} options.html - HTML email body (optional)
 * @returns {Promise} - Nodemailer send result
 */
export const sendEmail = async (options) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  return transporter.sendMail(mailOptions);
};

export default {
  sendEmail,
};