import { RideCard } from "../atoms/RideCard"

export const Rides = () => {
    return(
        <div className="flex flex-col gap-2 self-stretch w-full">
            {["1","2","3","4","5","6","7","8","9","10"].map(item => <RideCard key={item} driverName={"Olivia Doe"} startLocation={"Fomento, CABA"} endLocation={"Maputo, Mozambique"} match={10} startTime={"6:00 AM"} endTime={"7:00 AM"} avatar={"https://randomuser.me/api/portraits/women/37.jpg"}/>)}
        </div>
    )
}