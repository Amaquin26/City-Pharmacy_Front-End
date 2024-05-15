import {Button, Card, CardBody,CardFooter,CardHeader, Input} from "@nextui-org/react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex">
        <div className="max-w-lg m-auto flex items-center justify-center lg:px-4 md:px-2 px-1">
            <Card fullWidth>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">Welcome to City Pharmacy</h4>
                    <p className="text-tiny uppercase font-medium opacity-75">Register an account</p>
                </CardHeader>
                <CardBody>
                    <form>
                        <Input type="text" label="First Name" className="mb-3 md:w-96 sm:w-72" isRequired/>
                        <Input type="text" label="Last Name" className="mb-3 md:w-96 sm:w-72" isRequired/>
                        <Input type="email" label="Email" className="mb-3 md:w-96 sm:w-72" isRequired/>
                        <Input type="phone" label="Phone Number" className="mb-3 md:w-96 sm:w-72" isRequired/>
                        <Input type="password" label="Password" className="mb-3 md:w-96 sm:w-72 " isRequired/>
                        <Input type="password" label="Confirm Password" className="mb-3 md:w-96 sm:w-72 " isRequired/>
                        <Button color="primary" className="w-full">
                            Register
                        </Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <p className="text-tiny font-medium opacity-75">Already have an account? 
                        <Link to={"/login"} className="text-blue-500"> Login your Account</Link> 
                    </p>
                </CardFooter>
            </Card>       
        </div>
    </div>
  )
}

export default RegisterPage