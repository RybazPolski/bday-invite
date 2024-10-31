export default function ConfirmButton(){
    return(
        <>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-yellow-500 bg-[linear-gradient(110deg,#F8D803,45%,#F0FF88,55%,#F8D803)] bg-[length:200%_100%] px-6 text-l text-slate-800 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 relative right-5">
            <span><i className="text-xl">Accept quest</i><br/>(Potwierdź obecność)</span>
            </button>
        </>
    )
}