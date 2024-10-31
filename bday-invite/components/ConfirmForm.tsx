"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export const formSchema = z.object({
  id : z.number(),
  guestId : z.number(),
  guestNickname : z.string(),
  //inviteAccepted : z.boolean(),
  questAccepted : z.boolean(),
  lasertagAccepted : z.boolean(),
  overnight : z.boolean(),
  alkomohol : z.boolean(),
  bringIns : z.string().optional(),
  notes : z.string().optional(),
});

export default function ConfirmForm() {

 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    
  },
})

function onSubmit(values: z.infer<typeof formSchema>) {
  // TODO: Do something with the form values.
  console.log(values)
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid"></div>
        <FormField
          control={form.control}
          name="guestNickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nickname</FormLabel>
              <FormControl>
                <Input disabled placeholder={"<Nickname>"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="questAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Accept quest
                </FormLabel>
                <FormDescription>
                  (Czy bierzesz udział w grze terenowej?)
                </FormDescription>
                </div>
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="lasertagAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I'm gonna shoot them before they shoot me
                </FormLabel>
                <FormDescription>
                  (Czy bierzesz udział w grze w lasertag?a)
                </FormDescription>
                </div>
            </FormItem>
          )}
        />
        <div className="flex flex-row items-start space-x-3">
        <FormField
          control={form.control}
          name="overnight"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Czy planujesz nocować?
                </FormLabel>
                </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alkomohol"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Czy planujesz pić alkohol?
                </FormLabel>
                </div>
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="bringIns"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Czy planujesz coś przynieść?</FormLabel>
            <FormDescription>
              Może jakaś gra, może masz na coś smaka i chcesz to przynieść i się podzielić?
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="Np. krótką gierkę bitewną &quot;Warhammer 40k&quot;, albo jajka koguta."
                className="resize-none"
                {...field}
              />
            </FormControl>
            
            <FormMessage />
          </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Uwagi</FormLabel>
            <FormDescription>
              Czy powinniśmy wiedzieć coś jeszcze?
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="Np. mam uczulenie na bezgluten."
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
        <Button type="submit">Potwierdź</Button>
        {/* <Button variant="destructive">Odrzuć</Button> */}
      </form>
    </Form>
  )
}
