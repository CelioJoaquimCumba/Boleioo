import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "../ui/label"

type DateProps = {
    label?: string
}
export const  DatePicker = ({label}: DateProps) => {
  const [date, setDate] = React.useState<Date>()
  return (
    <Popover>
      <PopoverTrigger asChild className="self-stretch w-full">
        <div className="flex flex-col items-start gap-2 self-stretch">
            {label && <Label htmlFor={label}>{label}</Label>}
            <div className="flex self-stretch items-center gap-2 ">
                <Button
                variant={"outline"}
                className={cn(
                    "w-[280px] justify-start text-left font-normal self-stretch w-full",
                    !date && "text-muted-foreground "
                )}
                >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}