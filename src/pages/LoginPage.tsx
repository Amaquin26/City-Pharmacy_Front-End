import {Button, Card, CardBody,CardFooter,CardHeader, Input} from "@nextui-org/react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen flex">
        <div className="max-w-lg m-auto flex items-center justify-center lg:px-4 md:px-2 px-1">
            <Card fullWidth>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">Welcome to City Pharmacy</h4>
                    <p className="text-tiny uppercase font-medium opacity-75">Login to your account</p>
                </CardHeader>
                <CardBody>
                    <form>
                        <Input type="email" label="Email" className="mb-3 md:w-96 sm:w-72" isRequired/>
                        <Input type="password" label="Password" className="mb-3 md:w-96 sm:w-72" isRequired/>
                        <Button color="primary" className="w-full">
                            Login
                        </Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <p className="text-tiny font-medium opacity-75">No account yet? 
                        <Link to={"/register"} className="text-blue-500"> Register an Account</Link> 
                    </p>
                </CardFooter>
            </Card>       
        </div>
    </div>
  )
}

export default LoginPage