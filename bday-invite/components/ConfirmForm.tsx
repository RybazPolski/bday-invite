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
import { getCookie } from "cookies-next"
import { Declaration, DeclarationSchema } from "@/model/Declaration"
import { useState } from "react"

export const formSchema = DeclarationSchema.partial({
    id : true,
    guestNickname : true,
    declarationDatetime : true, 
    inviteAccepted : true,
})

export default function ConfirmForm({declaration}:{declaration:Declaration|undefined}) {

  const [inviteAccepted, setInviteAccepted] = useState<boolean>();
  
  function acceptInvite(){
    setInviteAccepted(true)
  } 
  // function rejectInvite(){
  //   setInviteAccepted(false)
  // }

  const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues:
    declaration!==undefined ? 
    declaration 
    : 
    {
      guestNickname: getCookie("nickname"),
      inviteAccepted: true,
      declarationDatetime: new Date("01-01-1970 00:00"),
      questAccepted: false,
      lasertagAccepted: false,
      overnight: false,
      alkomohol: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.inviteAccepted = inviteAccepted
    // TODO: replace with server action from seperate file I guess? And do it better.
    fetch("/api/declarations",{
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values)
    }).then(res=>{
      if(res.status==201){
        window.location.reload()
        // TODO: toast or sth in future
      }else{
        console.log("Something went wrong")
        console.log(res)
      }
    })
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
                <Input disabled placeholder={"<Nickname>"} defaultValue={getCookie("nickname")} {...field} />
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
                  disabled={declaration!==undefined}
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
                  disabled={declaration!==undefined}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I&apos;m gonna shoot them before they shoot me
                </FormLabel>
                <FormDescription>
                  (Czy bierzesz udział w grze w lasertaga?)
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
                  disabled={declaration!==undefined}
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
                  disabled={declaration!==undefined}
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
                disabled={declaration!==undefined}
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
                disabled={declaration!==undefined}
                placeholder="Np. mam uczulenie na bezgluten."
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
        <Button type="submit" onClick={acceptInvite} disabled={declaration!==undefined}>Potwierdź</Button>
        {/* <Button variant="destructive" type="submit" onClick={rejectInvite}>Odrzuć</Button> */}
      </form>
    </Form>
  )
}
