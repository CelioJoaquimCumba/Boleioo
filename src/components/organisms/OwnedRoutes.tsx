import { RouteCard, RouteProps } from "../molecules/RouteCard"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"

type OwnedRoutesProps = {
    routes: RouteProps[]
}

export const OwnedRoutes = ({routes}: OwnedRoutesProps) => {
    return (
        <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex md:hidden flex-col items-start gap-2 self-stretch overflow-x-auto max-h-[24rem]">
                {routes.map((route) => (
                    <RouteCard key={route.id} {...route} />
                ))}
            </div>
            <Table className="hidden md:table">
                <TableHeader>
                    <TableRow>
                    <TableHead >Start Location</TableHead>
                    <TableHead>Start Time</TableHead>
                    <TableHead>EndLocation</TableHead>
                    <TableHead >EndTime</TableHead>
                    <TableHead >Frequency</TableHead>
                    <TableHead >End of cycle</TableHead>
                    <TableHead ></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {routes.map((route) => (
                    <TableRow key={route.id}>
                        <TableCell >{route.origin.place}</TableCell>
                        <TableCell>{route.origin.time}</TableCell>
                        <TableCell>{route.destination.place}</TableCell>
                        <TableCell >{route.destination.time}</TableCell>
                        <TableCell >{route.frequency}</TableCell>
                        <TableCell >{route.end ? route.end : "Never"}</TableCell>
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