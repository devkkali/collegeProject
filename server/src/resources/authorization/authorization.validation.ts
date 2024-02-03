import { z } from "zod";

export namespace AuthorizationValidation {
  export const ForgotPasswordVerify = {
    body: z
      .object({
        token: z.string(),
      })
      .strict(),
  };
}
