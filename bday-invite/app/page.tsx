import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="bg-cantina bg-cover bg-center fixed -z-100 w-full h-full blur-sm"></div>
      <div className="grid grid-rows-12 grid-cols-12 h-[100dvh] w-[100vw]">
        <div className="relative col-start-4 col-end-10 row-span-3">
          <Card className="text-center text-3xl bg-[#FFCC00]">0d 00h 00m 00s</Card>
          <Card className="text-center w-3/4 m-auto text-2xl bg-[#FFFFDD]">9 Listopada 2024</Card>
        </div>
        <div className="relative col-start-1 col-end-4 row-start-2 row-end-6 text-center">
          <div className="absolute bottom-full inset-x-0 m-auto text-white text-center">Tu zaczynamy:</div>
          <Card className="absolute bottom-0 inset-x-0 h-full aspect-[5/4] bg-[url('https://wiki.openstreetmap.org/w/images/thumb/6/69/Baclaran_and_Pasay_Rotunda_-_in_Standard_map_layer.png/250px-Baclaran_and_Pasay_Rotunda_-_in_Standard_map_layer.png')] bg-cover bg-center m-auto"></Card>
        </div>
        <div className="relative col-start-4 col-end-9 row-start-4 row-end-8">
          <h1 className="text-3xl font-bold italic text-white">&lt;Nickname&gt;, we&apos;ve got a&nbsp;quest for you!</h1>
        </div>
        <div className="relative col-start-2 col-end-4 row-start-7 row-end-11">
        <Card id="questThumb" className="h-full aspect-square bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e3ccc22-bd54-4a4d-9b30-0fe3538da5ab/dbuvk4o-35a25bf5-6a65-425f-9698-82e08e85f057.jpg/v1/fit/w_800,h_655,q_70,strp/bounty_listing_by_markbulahao_dbuvk4o-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjU1IiwicGF0aCI6IlwvZlwvNWUzY2NjMjItYmQ1NC00YTRkLTliMzAtMGZlMzUzOGRhNWFiXC9kYnV2azRvLTM1YTI1YmY1LTZhNjUtNDI1Zi05Njk4LTgyZTA4ZTg1ZjA1Ny5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.cIMGuhthZ1mNx26osRf32CLhZUCTUVN5sDcm6ZCorqs')] bg-cover bg-center m-auto text-center align-middle text-white font-semibold text-2xl">Quest</Card>
        <div className="my-auto text-center text-2xl text-white">16:00</div>
        </div>
        <div className="relative col-start-7 col-end-9 row-start-8 row-end-12">
          <Card id="lasertagThumb" className="h-full aspect-square bg-[url('https://lh3.googleusercontent.com/p/AF1QipN1QuDp_VHkD8OTdkMVSwXz-XSM0srNiEGKh1NY=s1360-w1360-h1020')] bg-cover bg-center m-auto text-center align-middle text-white font-semibold text-2xl">Lasertag</Card>
          <div className="my-auto text-center text-2xl text-white">17:00</div>
        </div>
        <div className="relative col-start-10 col-end-12 row-start-2 row-end-6">
          <Card id="lokalThumb" className="h-full aspect-square bg-[url('https://party-poznan.pl/wp-content/uploads/2021/09/partyhouse_01-27.jpg')] bg-cover bg-center m-auto text-center align-middle text-white font-semibold text-2xl">Lokal</Card>
          <div className="my-auto text-center text-2xl text-white">18:45</div>
        </div>
        <div className="relative col-start-1 col-end-7 row-start-12 row-end-13">
          <h3 className="text-center text-xl overflow-show text-white text-nowrap">Motyw imperzy: &quot;I&apos;m ready for the quest!&quot;</h3>
        </div>
        <div className="relative col-start-10 col-end-13 row-start-6 row-end-10">
          <div className="bg-[url('https://freepngimg.com/save/99099-apex-legends-png-download-free/920x786')] bg-cover bg-top w-full h-full"></div>
          {/* <h1 className="text-center text-3xl">Jubilarians</h1> */}
        </div>
        <div className="relative col-start-9 col-end-13 row-start-10 row-end-12 inline-flex justify-end">
          <Button className="text-center text-xl h-full text-black bg-[#FFFF00]">Potwierdź obecność</Button>
        </div>
        <div className="relative col-start-9 col-end-13 row-start-12 row-end-13 ">
          <h1 className="text-center text-xl underline text-white ">&#9432; Więcej informacji</h1>
        </div>
      </div>
    </>
  );
}
