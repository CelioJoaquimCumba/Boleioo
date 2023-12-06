import { Input } from "@/components/atoms/Input"
import { Button } from "@/components/ui/button"
import { LoginValidation } from "@/form validations/LoginValidation"
import { Register } from "@/router/routes"
import {useFormik} from 'formik'
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const validation = LoginValidation()
    const formik = useFormik(validation)
    const navigate = useNavigate()
    return(
        <div className="flex items-start w-full overflow-hidden h-[calc(100dvh)]">
            <div className={`hidden lg:flex w-full h-full  flex-grow self-stretch bg-[url('https://imageio.forbes.com/specials-images/dam/imageserve/1161159565/960x0.jpg?height=474&width=711&fit=bounds')] bg-cover bg-right bg-blend-overlay`}>
                <div className="flex w-full h-full py-8 px-32 items-start bg-black bg-opacity-50">
                    <span className="text-3xl font-bold leading-9 text-white">Boleioo</span>
                </div>
            </div>
            <div className="flex w-full h-full py-4 px-8 md:px-48 lg:px-32 flex-col items-end gap-1 overflow-auto">
                <Button variant={"outline"} onClick={()=>navigate(Register)}>Register</Button>
                <form className="flex flex-col justify-center items-center flex-grow self-stretch gap-4" onSubmit={formik.handleSubmit}>
                    {/* header */}
                    <div className="flex flex-col justify-center items-center gap-1">
                        <span className=" text-xl leading-7 font-bold"> Log In to your account</span>
                        <span className="text-base leading-6 font-normal"> Enter your credentials to login to your account </span>
                    </div>
                    {/* email */}
                    <Input id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.email && formik.errors.email ? true : false} hint={formik.errors.email} label="Email" placeholder="Email" type="email" autoComplete="email" />

                    {/* password */}
                    <Input id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.password && formik.errors.password ? true : false} hint={formik.errors.password} label="Password" placeholder="Password" type="password" />
                    <Button type="submit" className="self-stretch">Login</Button>
                </form>
            </div>
        </div>
    )
}