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

export function ConfirmSheet() {
    return (
    <Sheet>
      <SheetTrigger asChild>
        <ConfirmButton />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Potwierdź obecność:</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full">
          <ConfirmForm />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}