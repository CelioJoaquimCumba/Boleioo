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
import { useFormik } from "formik"
import { RouteValidation } from "@/form validations/RouteValidation"

export const RouteDialog = () => {
  const formik = useFormik(RouteValidation())
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
            <Plus />
            <span>Add Route</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl overflow-y-auto overflow-x-hidden h-5/6 sm:h-5/6">
        <DialogHeader>
          <DialogTitle>Add/Edit Route</DialogTitle>
          <DialogDescription>
            Make changes to your route here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-start gap-4 py-4">
            <div className="flex items-center gap-4">
              <Label htmlFor="routeName" className="text-right">
                Name
              </Label>
              <Input
                placeholder="Route name"
                id="routeName"
                value={formik.values.routeName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.routeName && formik.errors.routeName ? true : false}
                hint={formik.errors.routeName}
              />
            </div>
            <div className="flex flex-col  gap-4">
              {/* start */}
              <div className="flex flex-col items-start gap-4 flex-grow w-full self-stretch">
                  {/* start time */}
                  <div className="flex items-start gap-4 self-stretch ">
                      <Label htmlFor="startTime">
                      Start Time
                      </Label>
                      <Input
                      placeholder="Insert the time that you go"
                      id="startTime"
                      type="time"
                      value={formik.values.startTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.startTime && formik.errors.startTime ? true : false}
                      hint={formik.errors.startTime}
                      />
                  </div>
                  {/* start location */}
                  <div className="flex flex-col items-start gap-4 self-stretch">
                      <Input label="Start Location" placeholder="Location name" id="startLocation" value={formik.values.startLocation} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.startLocation && formik.errors.startLocation ? true : false}/>
                      {/* <div className="sm:max-w-xs w-80 h-80 aspect-square rounded-md">
                        <MapComponent/>
                      </div> */}
                  </div>
              </div>
              {/* end */}
              <div className="flex flex-col items-start gap-4 flex-grow w-full self-stretch">
                  {/* end time */}
                  <div className="flex items-start gap-4 self-stretch ">
                      <Label htmlFor="endTime">
                      Start Time
                      </Label>
                      <Input
                      placeholder="Insert the time that you go"
                      id="endTime"
                      type="time"
                      value={formik.values.endTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.endTime && formik.errors.endTime ? true : false}
                      hint={formik.errors.endTime}
                      />
                  </div>
                  {/* end location */}
                  <div className="flex flex-col items-start gap-4 self-stretch">
                      <Input label="End Location" placeholder="Location name" id="endLocation" value={formik.values.endLocation} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.endLocation && formik.errors.endLocation ? true : false} hint={formik.errors.endLocation}/>
                      {/* <div className="sm:max-w-xs w-80 h-80 aspect-square rounded-md">
                        <MapComponent/>
                      </div> */}
                  </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
