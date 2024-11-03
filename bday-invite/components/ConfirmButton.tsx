import { Button } from "@/components/ui/button";

export default function ConfirmButton(){
    return(
        <>
            <div className="relative -top-2 inline-flex h-14 animate-shimmer items-center justify-center rounded-md border border-yellow-500 bg-[linear-gradient(110deg,#F8D803,45%,#F0FF88,55%,#F8D803)] bg-[length:200%_100%] px-6 text-l text-slate-800 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span><i className="text-xl">Accept&nbsp;quest</i><br/>(Potwierdź&nbsp;obecność)</span>
            </div>
        </>
    )
}