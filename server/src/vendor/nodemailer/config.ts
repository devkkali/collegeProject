import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//   host: "mail.roshandevkota.com.np",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "notification@roshandevkota.com.np",
//     pass: "Nepal@123",
//   },
// });
export const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: "roshandevkota1997@gmail.com",
    pass: "nrza iptq crss fztq",
  },
});