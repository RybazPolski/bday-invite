import { Guest } from "@/model/Guest";
import GuestSelectScreen from "@/components/GuestSelectScreen";
import { Declaration } from "@/model/Declaration";

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

async function getDeclarations() {
    const res = fetch(URL+"/api/declarations", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        cache: 'no-store'
    });
    const data = await res.then(e=>{return e.json()})
    // console.log(data)
    return data.map((declaration:{
        id:number,
        guestnickname:string,
        declarationdatetime:Date,
        inviteaccepted:boolean,
        questaccepted:boolean,
        lasertagaccepted:boolean,
        overnight:boolean,
        alkomohol:boolean,
        bringins:string,
        notes:string,
    })=>{
        const dec :Declaration = {
            id : declaration?.id,
            guestNickname : declaration?.guestnickname,
            declarationDatetime : new Date(declaration?.declarationdatetime), 
            inviteAccepted : declaration?.inviteaccepted,
            questAccepted : declaration?.questaccepted,
            lasertagAccepted : declaration?.lasertagaccepted,
            overnight : declaration?.overnight,
            alkomohol : declaration?.alkomohol,
            bringIns : declaration?.bringins,
            notes : declaration?.notes,
        }
        return dec
    }) as Array<Declaration>
}

export default async function GuestSelect() {
    const guests = await getGuests().then(e=>{return e})
    const guestOptions = guests.map((e:Guest)=>{
        return {
            value: e,
            label: e.nickname
        };
    })

    
    const declarations : Array<Declaration> = await getDeclarations();

return (<>
        <GuestSelectScreen options={guestOptions} declarations={declarations}/>
    </>)
}

