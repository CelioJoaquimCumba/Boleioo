import { Input } from "@/components/atoms/Input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RegisterValidation } from "@/form validations/RegisterValidation"
import { useFormik } from "formik"

export const Register = () => {
    const validation = RegisterValidation()
    const formik = useFormik(validation)
    return(
        <div className="flex items-start w-full overflow-hidden h-[calc(100dvh)]">
            <div className={`hidden lg:flex w-full h-full  flex-grow self-stretch bg-[url('https://jugnoo.io/wp-content/uploads/2021/10/Carpool-2-1024x683.jpg')] bg-cover bg-right bg-blend-overlay`}>
                <div className="flex w-full h-full py-8 px-32 items-start bg-black bg-opacity-50">
                    <span className="text-3xl font-bold leading-9 text-white">Boleioo</span>
                </div>
            </div>
            <div className="flex w-full h-full py-4 px-8 md:px-48 lg:px-32 flex-col items-end gap-1 overflow-auto">
                <Button variant={"outline"}>Login</Button>
                <form className="flex flex-col justify-center items-center flex-grow self-stretch gap-3" onSubmit={formik.handleSubmit}>
                    {/* header */}
                    <div className="flex flex-col justify-center items-center gap-1">
                        <span className=" text-xl leading-7 font-bold"> Create an account</span>
                        <span className="text-base leading-6 font-normal"> Enter your credentials to create an account </span>
                    </div>
                    {/* image upload */}
                    <div className="flex flex-row-reverse justify-center items-center gap-1 self-stretch">
                        {/* <img className="flex rounded-full bg-gray-200 w-16 aspect-square" src={formik.values.profilePicture}/> */}
                        <Input id="profilePicture" value={formik.values.profilePicture} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.profilePicture && formik.errors.profilePicture ? true : false} hint={formik.errors.profilePicture} placeholder="Upload document(jpeg, png, pdf)" label="Profile picture" type="file"/>
                    </div>
                    {/* email */}
                    <Input id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.email && formik.errors.email ? true : false} hint={formik.errors.email} label="Email" placeholder="Email" type="email" autoComplete="email" />

                    {/* password */}
                    <Input id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.password && formik.errors.password ? true : false} hint={formik.errors.password} label="Password" placeholder="Password" type="password" />

                    {/* genre and birthdate */}
                    <div className="flex justify-center items-center gap-2 w-full self-stretch ">
                        <div className="flex flex-col items-start justify-center gap-2 self-stretch w-full">
                            <Label>Genre</Label>
                            <Select name="genre">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a genre" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Input id="birthDate" value={formik.values.birthDate} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.birthDate && formik.errors.birthDate ? true : false} hint={formik.errors.birthDate} label="Birth Date" type="date" placeholder="Birth Date" />
                    </div>
                    {/* phone number */}
                    <Input id="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber ? true : false} hint={formik.errors.phoneNumber} label="Phone number" placeholder="Phone number" type="number" />
                    {/* Document of identification */}
                    <div className="flex flex-col justify-center items-center gap-1 self-stretch">
                        <Input type="file" id="identityDocument" value={formik.values.identityDocument} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.identityDocument && formik.errors.identityDocument ? true : false} hint={formik.errors.identityDocument} placeholder="Upload document(jpeg, png, pdf)" label="Identity document" />
                    </div>
                    <Button type="submit" className="self-stretch">Register</Button>
                </form>
            </div>
        </div>
    )
}