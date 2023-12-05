import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"

type SelectProps = React.HTMLAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLInputElement> & {
    values : Array<string>,
    label?: string
    isInvalid?: boolean
    hint?: string
}
export const SelectInput = ({values, label, isInvalid, hint, ...props}: SelectProps) => {
  return (
    <Select value={props.value?.toString()} onValueChange={props.onChange}  >
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <SelectTrigger  className={`${isInvalid && "border border-destructive"}`}>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {values.map((value, index) => (
              <SelectItem key={index} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
        {hint && isInvalid && <p className="text-destructive text-xs italic">{hint}</p>}
    </Select>
  )
}
