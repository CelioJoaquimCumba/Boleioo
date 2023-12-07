
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export type RouteProps = React.HTMLAttributes<HTMLDivElement> & {
    id: string,
    origin: { place:string, time:string},
    destination: { place:string, time:string},
    frequency: string,
    end?: string
}
export const RouteCard = ({origin, destination, frequency, end}: RouteProps) => {
    return(
        <Card className="flex pt-6 flex-col items-start justify-center gap-6 self-stretch">
            <CardContent className="flex flex-col justify-center items-start gap-4 self-stretch">
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">From</span>
                    <span className="text-sm leading-5 font-normal">{origin.place}, {origin.time}</span>
                </div>
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">To</span>
                    <span className="text-sm leading-5 font-normal">{destination.place}, {destination.time}</span>
                </div>
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">Frequency</span>
                    <span className="text-sm leading-5 font-normal">{frequency}{end && " until"+end}</span>
                </div>
                <div className="flex items-end justify-end w-full gap-4">
                    <Button variant={"destructive"}>Delete</Button>
                    <Button variant={"outline"}>Edit</Button>
                </div>
            </CardContent>
        </Card>
    )
}