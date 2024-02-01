import mongoose from "mongoose";
import { z } from "zod";
export namespace ClubValidation {

  export const CreateClub = {
    body: z
      .object({
        name: z.string(),
        image: z.custom<File>(),
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
