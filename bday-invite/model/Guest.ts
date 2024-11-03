"use client"

import { z } from "zod"

export const GuestScheme = z.object({
    nickname : z.string(),
    team : z.enum(["lime","orange"]).nullable(),
});

export type Guest = z.infer<typeof GuestScheme>;