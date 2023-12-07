
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"

type RequestCardProps = {
    userName: string
    phone: string
    avatar: string
    email: string
    match: number
}

export const RequestCard = ({userName, phone, avatar, email, match}: RequestCardProps) => {
    let ringColorStyle: string;

    if (match >= 0 && match <= 20) {
        ringColorStyle = "ring-red-500";
    } else if (match > 20 && match <= 40) {
        ringColorStyle = "ring-red-300";
    } else if (match > 40 && match <= 60) {
        ringColorStyle = "ring-orange-300";
    } else if (match > 60 && match <= 80) {
        ringColorStyle = "ring-green-300";
    } else {
        ringColorStyle = "ring-green-500";
    }

    return (
        <Card className="flex shadow-md self-stretch w-full ">
        <CardHeader className="flex flex-col gap-4 items-center">
            <Avatar className={`ring-2 ${ringColorStyle} ring-offset-2  w-16 h-16`}>
            <AvatarImage src={avatar} alt={userName} />
            <AvatarFallback>{userName}</AvatarFallback>
            </Avatar>
            <span className="text-xs leading-4 font-normal">{match}% match</span>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4 ">
            <div className="flex items-start gap-4 self-stretch">
                <span className="text-sm leading-5 font-normal opacity-50"> Driver:</span>
                <span className="text-sm leading-5 font-normal"> {userName} </span>
            </div>
            <div className="flex items-start gap-4 self-stretch">
                <span className="text-sm leading-5 font-normal opacity-50"> Phone:</span>
                <span className="text-sm leading-5 font-normal"> {phone} </span>
            </div>
            <div className="flex items-start gap-4 self-stretch">
                <span className="text-sm leading-5 font-normal opacity-50"> Email:</span>
                <span className="text-sm leading-5 font-normal"> {email} </span>
            </div>
            <div className="flex items-end justify-end w-full gap-4">
                <Button variant={"destructive"}>Decline</Button>
                <Button variant={"outline"}>Accept</Button>
            </div>
        </CardContent>
        </Card>
    );
}