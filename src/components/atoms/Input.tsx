import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { Input as RootInput } from "../ui/input"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
    button?: {
        value: string,
        onClick: () => void
    }
    isInvalid?: boolean
    hint?:string
}

export const Input = ({label, button,isInvalid, hint, ...props}: InputProps) => {
    return(
        <div className="flex flex-col items-start gap-2 self-stretch w-full">
            {label && <Label htmlFor={props.id}>{label}</Label>}
            <div className="flex self-stretch items-center gap-2 ">
                <RootInput className={`${isInvalid && "border border-destructive"}`} {...props} />
                {button && <Button>{button.value}</Button>}
            </div>
            {hint && isInvalid && <p className="text-destructive text-xs italic">{hint}</p>}
        </div>
    )
}