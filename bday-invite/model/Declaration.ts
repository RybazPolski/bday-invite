"use client"

import { z } from "zod"

export const DeclarationSchema = z.object({
    id : z.number(),
    guestId : z.number(),
    declarationDatetime : z.date().default(new Date(Date.now())), 
    inviteAccepted : z.boolean(),
    questAccepted : z.boolean(),
    lasertagAccepted : z.boolean(),
    overnight : z.boolean(),
    alkomohol : z.boolean(),
    bringIns : z.string().optional(),
    notes : z.string().optional(),
});

export type Declaration = z.infer<typeof DeclarationSchema>;