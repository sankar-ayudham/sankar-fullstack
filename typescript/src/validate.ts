import { email, z } from "zod";

const user = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
});
export type user = z.infer<typeof user>;
