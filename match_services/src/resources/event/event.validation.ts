import mongoose from "mongoose";
import { z } from "zod";
export namespace EventValidation {

  export const CreateEvent = {
    body: z
      .object({
        player_id: z.string(),
        match_id: z.string(),
        activity_type: z.enum(["goal", "assist", "yellow", "red", "substitutedin", "substitutedout", "isinitial"]),
      })
      .strict()
  };

  export const DeleteEvent = {
    params: z
      .object({
        id: z.string(),
      })
      .strict()
  };
}
