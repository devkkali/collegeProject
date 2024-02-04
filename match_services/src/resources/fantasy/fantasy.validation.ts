import mongoose from "mongoose";
import { z } from "zod";
export namespace FantasyValidation {

  export const CreateFantasy = {
    body: z
      .object({
        team_name: z.string().optional(),
        user_id: z.string(),
        match_id: z.string(),
        players: z.array(z.string().nullable()),
      })
      .strict()
  };

  export const DeleteFantasy = {
    params: z
      .object({
        id: z.string(),
      })
      .strict()
  };
}
