import { RequestCard } from "../atoms/RequestCard"

export const Requests = () => {
    return(
        <div className="flex w-full flex-col self-stretch gap-2">
            {["1","2","3","4","5","6","7","8","9","10"].map(item => <RequestCard key={item} match={10} userName={"Olivia Doe"} phone={"Fomento, CABA"} avatar={"https://randomuser.me/api/portraits/women/37.jpg"} email={"oliviaDoe@domain.com"}/>)}
        </div>
    )
}