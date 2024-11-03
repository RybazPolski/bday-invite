import GuestSelect from "@/components/GuestSelect";
import PageContent from "@/components/PageContent";

export default function Home() {
  
  return (
    <>
      <div className="w-[100dvw] h-[100dvh] absolute overflow-hidden bg-black"></div>
      <PageContent/>
      <GuestSelect/>
    </>
  );
}
