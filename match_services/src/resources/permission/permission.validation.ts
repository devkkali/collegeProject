import { z } from "zod";

export namespace PermissionValidation {
  export const Add = {
    body: z
      .object({
        permissions: z.array(
          z
            .object({
              permission_name: z.string(),
              permission_path: z.string(),
              permission_method: z.array(
                z.enum([
                  "GET",
                  "HEAD",
                  "POST",
                  "PUT",
                  "DELETE",
                  "CONNECT",
                  "OPTIONS",
                  "TRACE",
                  "PATCH",
                ])
              ),
              permission_allowed_role: z.array(z.enum(["admin", "user", "*"])),
              permission_status: z.enum(["0", "1"]),
            })
            .strict()
        ),
      })
      .strict(),
  };
}
