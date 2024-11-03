import { Guest } from "@/model/Guest";
import GuestSelectScreen from "@/components/GuestSelectScreen";

const URL = process.env.NEXT_PUBLIC_API_URL? "https://"+process.env.NEXT_PUBLIC_API_URL : "http://localhost:3000"

async function getGuests() {
    const res = fetch(URL+"/api/guests", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        cache: 'no-store'
    });
    const data = await res.then(e=>{return e.json()})
    // console.log(data)
    return data
}

async function getDeclaration(nickname:string) {
    const res = fetch(URL+"/api/declarations/"+nickname, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        cache: 'no-store'
    });
    const data = await res.then(e=>{return e.json()})
    // console.log(data)
    return data
}

export default async function GuestSelect() {
    const guests = await getGuests().then(e=>{return e})
    const guestOptions = guests.map((e:Guest)=>{
        return {
            value: e,
            label: e.nickname
        };
    })

return (<>
        <GuestSelectScreen options={guestOptions}/>
    </>)
}

