"use client"

import { z } from "zod"

export const DeclarationSchema = z.object({
    id : z.number(),
    guestNickname : z.string(),
    declarationDatetime : z.date().default(new Date(Date.now())).or(z.string().datetime()), 
    inviteAccepted : z.boolean(),
    questAccepted : z.boolean(),
    lasertagAccepted : z.boolean(),
    overnight : z.boolean(),
    alkomohol : z.boolean(),
    bringIns : z.string().optional().nullable(),
    notes : z.string().optional().nullable(),
});

export type Declaration = z.infer<typeof DeclarationSchema>;