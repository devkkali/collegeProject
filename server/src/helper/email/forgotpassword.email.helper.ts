import { transporter } from "../../vendor";

export const ForgotPasswordEmailHelper = async (payload: {
  user_email: string;
  verification_token: string;
}) => {
  try {
    return await transporter.sendMail({
      from: '"Fantasy League" <notification@roshandevkota.com.np>',
      to: payload.user_email,
      subject: "Forgot Password Verification",
      html: `<a href="${
        process.env.GATEWAYURL+":"+process.env.GATEWAYPORT || process.env.PRODUI
      }/?verify_token=${payload.verification_token}">Verify</a>
`,
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
