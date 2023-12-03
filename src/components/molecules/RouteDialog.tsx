import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { Input } from "../atoms/Input"

export const RouteDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
            <Plus />
            <span>Add Route</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Add/Edit Route</DialogTitle>
          <DialogDescription>
            Make changes to your route here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-start gap-4 py-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              placeholder="Route name"
              id="name"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            {/* start */}
            <div className="flex flex-col items-start gap-4 flex-grow">
                {/* start time */}
                <div className="flex items-start gap-4 self-stretch ">
                    <Label htmlFor="startTime">
                    Start Time
                    </Label>
                    <Input
                    placeholder="Insert the time that you go"
                    id="startTime"
                    className="col-span-3"
                    />
                </div>
                {/* start location */}
                <div className="flex flex-col items-start gap-4 self-stretch">
                    <Input label="Start Location" placeholder="Location name"/>
                    {/* <img src="https://k8q3f6p8.rocketcdn.me/wp-content/uploads/2019/05/Google-Maps-Tips.png" alt="map" className="w-full aspect-square bg-gray-500 rounded-md object-cover"/> */}
                </div>
            </div>
            {/* end */}
            <div className="flex flex-col items-start gap-4 flex-grow">
                {/* start time */}
                <div className="flex items-start gap-4 self-stretch ">
                    <Label htmlFor="startTime">
                    Start Time
                    </Label>
                    <Input
                    placeholder="Insert the time that you go"
                    id="startTime"
                    className="col-span-3"
                    />
                </div>
                {/* start location */}
                <div className="flex flex-col items-start gap-4 self-stretch">
                    <Input label="Start Location" placeholder="Location name"/>
                    {/* <img src="https://k8q3f6p8.rocketcdn.me/wp-content/uploads/2019/05/Google-Maps-Tips.png" alt="map" className="w-48 aspect-square bg-gray-500 rounded-md object-cover"/> */}
                </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
