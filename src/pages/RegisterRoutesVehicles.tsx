import { RouteDialog } from "@/components/molecules/RouteDialog";
import { VehicleDialog } from "@/components/molecules/VehicleDialog";
import { OwnedRoutes } from "@/components/organisms/OwnedRoutes";
import { OwnedVehicles } from "@/components/organisms/OwnedVehicles";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export const RegisterRoutesVehicles = () => {
    const [ checked, setChecked ] = useState(false)
    const handleChecked = () => {
        setChecked(!checked)
    }
    return (
        <div className="flex py-10 px-8 flex-col items-end gap-4 text-start self-stretch w-full">
            {/* Routes */}
            <div className="flex flex-col items-start gap-4 self-stretch">
                <span className="text-xl leading-7 font-bold">Routes</span>
                <span className="text-base leading-6 font-normal">Add all the routes that you make during the week so that we can give you suggestions of people to carpool with.</span>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch">
                <OwnedRoutes routes={[{id:"1", origin:{place:"Lagos", time:"5:00pm"}, destination:{place:"Abuja", time:"6:00pm"}, frequency:"Everyday"}, {id:"2", origin:{place:"Lagos", time:"5:00pm"}, destination:{place:"Abuja", time:"6:00pm"}, frequency:"Everyday"}, {id:"3", origin:{place:"Lagos", time:"5:00pm"}, destination:{place:"Abuja", time:"6:00pm"}, frequency:"Everyday"}]} />
                <RouteDialog/>
            </div>
            {/* Vehicles */}
            <div className="flex flex-col items-start gap-4 self-stretch">
                <span className="text-xl leading-7 font-bold">Vehicles</span>
                <span className="text-base leading-6 font-normal">Add your vehicles that you will use when making you routes using the app</span>
            </div>
            <div className="flex items-center gap-2 self-stretch">
                <Checkbox id="vehicleOwnership" checked={checked} onCheckedChange={handleChecked} />
                <label
                    htmlFor="vehicleOwnership"
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    I have a vehicle to use in my routes
                </label>
            </div>
            <div className={`${ checked ? "flex" : "hidden"} flex-col items-start gap-2 self-stretch`}>
                <OwnedVehicles vehicles={[{id:"1", make:"Toyota", model:"Corolla", plate:"AAA 000 MC", color:"Black", cylinders:2000, seats:5, year:2020}, {id:"2", make:"Toyota", model:"Corolla", plate:"AAA 000 MC", color:"Black", cylinders:2000, seats:5, year:2020}]} />
                <VehicleDialog/>
            </div>
            <Button>Save Changes</Button>
        </div>
    )
};