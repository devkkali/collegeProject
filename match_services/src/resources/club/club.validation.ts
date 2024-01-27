import { z } from "zod";

export namespace ClubValidation {

    export const CreateClub = {
        body: z
          .object({
            name: z.string(),
            image: z.string(),
          })
          .strict()
      };
    export const DeleteClub = {
        body: z
          .object({
            id: z.string()
          })
          .strict()
      };

}
