import { Guest } from "@/model/Guest";
import GuestSelectScreen from "@/components/GuestSelectScreen";

const APP_URL = process.env.VERCEL_URL || "localhost:3000"

async function getGuests() {
    const res = fetch(`http://${APP_URL}/api/guests`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    });
    const data = await res.then(e=>{return e.json()})
    console.log(data)
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

