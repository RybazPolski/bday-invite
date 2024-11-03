"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,} from "@/components/ui/command"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Guest, GuestScheme } from "@/model/Guest"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog"

const UserSelectFormSchema = z.object({
  guest: GuestScheme
})

const isGuestSet = ()=>{
  return getCookie("nickname")!=undefined
}

export default function GuestSelectScreen({options}:{options:Array<{value:Guest,label:string}>}){
  return(
    <>
    <div className={`fixed inset-0 z-500 w-[100dvw] h-[100dvh] bg-black bg-opacity-90 ${isGuestSet()?"":"hidden"}`}>
            <AlertDialog defaultOpen={!isGuestSet()}>
                <AlertDialogContent>
                    <AlertDialogTitle>
                        Przedstaw się!
                    </AlertDialogTitle>
                    <GuestSelectForm options={options}></GuestSelectForm>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    </>
  )
}

function GuestSelectForm({options}:{options:Array<{value:Guest,label:string}>}) {
  
  const form = useForm<z.infer<typeof UserSelectFormSchema>>({
    resolver: zodResolver(UserSelectFormSchema),
  })

  function onSubmitGuestSelect(data: z.infer<typeof UserSelectFormSchema>) {
    if(JSON.stringify(data)!="{}" && data!=null && data !=undefined) console.log(JSON.stringify(data, null, 2))
    
    if(data?.guest?.nickname) setCookie("nickname",data.guest.nickname); else deleteCookie("nickname")
    if(data?.guest?.team) setCookie("team",data.guest.team); else deleteCookie("team")
    window.location.reload()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitGuestSelect)} className="space-y-6">
        <FormField
          control={form.control}
          name="guest"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Nickname</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? options.find(
                            (option) => JSON.stringify(option.value) == JSON.stringify(field.value)
                          )?.label
                        : "Podaj swój nickname"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Wyszukaj..." />
                    <CommandList>
                      <CommandEmpty>Nie znaleziono.</CommandEmpty>
                      <CommandGroup>
                        {options.map((option) => (
                          <CommandItem
                            value={option.label}
                            key={option.value.nickname}
                            onSelect={() => {
                              form.setValue("guest", option.value)
                              console.log(form.getValues("guest"))
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                option.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {option.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">To ja!</Button>
      </form>
    </Form>
  )
}
