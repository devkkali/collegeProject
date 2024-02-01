import mongoose from "mongoose";
import { z } from "zod";
export namespace PlayerValidation {

  export const CreatePlayer = {
    body: z
      .object({
        name: z.string(),
        age: z.string(),
        player_type: z.enum(["goalkipper", "defender", "midfielder", "forward"]),
        club_id: z.string(),
        status:z.enum(["-1","0","1"])

      })
      .strict()
  };




  export const DeletePlayer = {
    params: z
      .object({
        id: z.string(),
      })
      .strict(),
  };
}
