import { z } from "zod"

export const ProgramPointSchema = z.object({
    imageUrl : z.string().startsWith("/"),
    title : z.string(),
    rv : z.string(),
    time : z.string().time(),
    address: z.string(),
    description: z.string(),
    content: z.custom<React.JSX.Element>(
        e => (e as any)?.$$typeof === Symbol.for("react.element"),
        "value must be a React Element"
      ),
});

export type ProgramPoint = z.infer<typeof ProgramPointSchema>;