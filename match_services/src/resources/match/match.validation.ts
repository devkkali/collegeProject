import mongoose from "mongoose";
import { z } from "zod";
export namespace MatchValidation {

  export const CreateMatch = {
    body: z
      .object({
        team1: z.string(),
        team2: z.string(),
        match_time: z.string(),
        team1players: z.array(z.string()),
        team2players: z.array(z.string())
      })
      .strict()
  };

  export const DeleteMatch = {
    params: z
      .object({
        id: z.string(),
      })
      .strict()
  };
}
