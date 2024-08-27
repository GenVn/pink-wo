import * as z from "zod";

export const productDetailSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Vui lòng chọn ít nhất 1 món",
  }),
});
