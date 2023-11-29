import nodemailer from 'nodemailer';

const smtpOptions = {
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: true,
    auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASSWORD || "password",
    }
}


//@ts-ignore
export const transporter = nodemailer.createTransport({
    ...smtpOptions
});

export const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL || "email",
    to: process.env.SMTP_TO_EMAIL || "email"
}