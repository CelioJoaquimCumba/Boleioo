import { VehicleCard, VehicleProps } from "../molecules/VehicleCard"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"

type OwnedVehiclesProps = {
    vehicles: VehicleProps[]
}
export const OwnedVehicles = ({vehicles}: OwnedVehiclesProps) => {

    return (
        <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex md:hidden flex-col items-start gap-2 self-stretch overflow-x-auto max-h-[24rem]">
                {vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} {...vehicle} />
                ))}
            </div>
            <Table className="hidden md:table max-w-6xl">
                    <TableHeader>
                        <TableRow>
                        <TableHead >Make</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead >License Plate</TableHead>
                        <TableHead >Cylinders</TableHead>
                        <TableHead >Seats</TableHead>
                        <TableHead >Year</TableHead>
                        <TableHead ></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vehicles.map((vehicle) => (
                        <TableRow key={vehicle.id}>
                            <TableCell >{vehicle.make}</TableCell>
                            <TableCell >{vehicle.model}</TableCell>
                            <TableCell >{vehicle.color}</TableCell>
                            <TableCell >{vehicle.plate}</TableCell>
                            <TableCell >{vehicle.cylinders}</TableCell>
                            <TableCell >{vehicle.seats}</TableCell>
                            <TableCell >{vehicle.year}</TableCell>
                            <TableCell >
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuItem className=" text-destructive">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
            </Table>
        </div>
    )
}