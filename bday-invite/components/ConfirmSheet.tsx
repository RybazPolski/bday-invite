import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ConfirmButton from "@/components/ConfirmButton"
import ConfirmForm from "@/components/ConfirmForm"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Declaration } from "@/model/Declaration"

export function ConfirmSheet({declaration}:{declaration:Declaration|undefined}) {

    return (
    <Sheet>
      <SheetTrigger>
        <ConfirmButton />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Potwierdź obecność:</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full">
          <ConfirmForm declaration={declaration}/>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}