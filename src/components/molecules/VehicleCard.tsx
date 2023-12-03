
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export type VehicleProps = React.HTMLAttributes<HTMLDivElement> & {
    id: string
    make: string
    model: string
    plate: string
    color: string
    cylinders: number
    seats: number
    year: number
}
export const VehicleCard = ({make, model, plate, color, cylinders, seats}: VehicleProps) => {
    return(
        <Card className="flex pt-6 flex-col items-start gap-6 self-stretch">
            <CardContent className="flex flex-col items-start gap-4 self-stretch">
                {/* make */}
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">Make</span>
                    <span className="text-sm leading-5 font-normal">{make}</span>
                </div>
                {/* model */}
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">Model</span>
                    <span className="text-sm leading-5 font-normal">{model}</span>
                </div>
                {/* color */}
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">Color</span>
                    <span className="text-sm leading-5 font-normal">{color}</span>
                </div>
                {/* license plate */}
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">License Plate</span>
                    <span className="text-sm leading-5 font-normal">{plate}</span>
                </div>
                {/* cylinders */}
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">Cylinders</span>
                    <span className="text-sm leading-5 font-normal">{cylinders}</span>
                </div>
                {/* seats */}
                <div className="flex flex-start gap-4 self-stretch">
                    <span className="text-sm leading-5 font-normal opacity-25">Seats</span>
                    <span className="text-sm leading-5 font-normal">{seats}</span>
                </div>
                <div className="flex items-end justify-start w-full gap-4">
                    <Button variant={"destructive"}>Delete</Button>
                    <Button variant={"outline"}>Edit</Button>
                </div>
            </CardContent>
        </Card>
    )
}