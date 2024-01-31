import mongoose from "mongoose";
import { z } from "zod";
export namespace ClubValidation {
  const isValidPhoneNumber = (phonenumber: string) => phonenumber.length > 3

  export const CreateClub = {
    body: z
      .object({
        name: z.string(),
        image: z.string(),
      })
      .strict()
  };
  export const DeleteClub = {
    params: z
      .object({
        id: z.string(),
      })
      .strict()
  };
}
