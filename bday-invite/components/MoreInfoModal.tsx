import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog"
import { Clock11, FilePen, HeartHandshake, MessageSquareText, ScrollTextIcon, ShirtIcon, VolumeOff, XIcon } from "lucide-react"

export function MoreInfoModal({children}:{children:React.ReactNode}) {
return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
        {children}
    </AlertDialogTrigger>
    <AlertDialogContent className="max-w-[50%] max-h-[90%] overflow-x-hidden">
        <AlertDialogHeader className="overflow-x-hidden">
            <AlertDialogCancel><XIcon className="absolute right-3 top-3"/></AlertDialogCancel>
            <AlertDialogTitle className="max-h-[10%] inline-block">Dodatkowe informacje (wciąż ważne!):</AlertDialogTitle>
            <AlertDialogDescription className="inline-block overflow-scroll max-h-[50%]">
                <MessageSquareText className="inline h-4"/> Wiadomość od Jacka:<br/>
                <span className="inline-block text-primary px-2 py-1 rounded-md bg-accent">Btw I'm a complete random
                for some of you, so jak ktoś mnie nie zna to proszę się nie czuć wobec mnie zobowiązanym do żadnych prezentów ani nic</span><br/>
                <span className="block mb-2"/>
                <ShirtIcon className="inline h-4"/> Dress code: <span className="text-primary">Ubierzcie się tak, abyście czuli się komfortowo. Innymi słowy ubierzcie się w taki sposób, w jaki chcecie przyjąć naszego questa!</span><br/>
                <span className="block mb-2"/>
                <VolumeOff className="inline h-4"/> Cisza nocna: <span className="text-primary">Cisza nocna w lokalu trwa od 0:00 do 6:00.</span><br/>
                <span className="block mb-2"/>
                <Clock11 className="inline h-4"/> Czas wynajmu lokalu: <span className="text-primary">Z lokalu musimy się wymeldować do 12:00.</span><br/>
                <span className="block mb-2"/>
                <HeartHandshake className="inline h-4"/> Prośba: <span className="text-primary">Lokal musimy zostawić tak, jak go zastaliśmy. Stąd prosimy, aby ci, którzy mogą, pomogli w ogarnięciu go na koniec.</span><br/>

                <span className="block bg-secondary h-[2px] w-full my-1"/>
                <a className="underline text-blue-700 visited:text-purple-800" target="_blank" href="https://drive.google.com/file/d/1c0wC6-qrs4TWcZDYElPXz4dGs37_YE_1/view">
                    <FilePen className="inline h-4"/> Zgoda rodzica na udział w Lasertagu
                </a><br/>
                <a className="underline text-blue-700 visited:text-purple-800" target="_blank" href="https://drive.google.com/file/d/1da9zOWNu24k4Hkw7cASnfy0RqTplWjSA/view">
                    <ScrollTextIcon className="inline h-4"/> Regulamin Laser Arena Poznań 
                </a><br/>
                <a className="underline text-blue-700 visited:text-purple-800" target="_blank" href="https://party-poznan.pl/wp-content/uploads/2022/11/Regulamin-Party-House_Sierpien2022.pdf">
                <ScrollTextIcon className="inline h-4"/> Regulamin lokalu
                </a>
            </AlertDialogDescription>
        </AlertDialogHeader>
    </AlertDialogContent>
    </AlertDialog>
)
  }