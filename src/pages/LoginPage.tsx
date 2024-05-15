import React from "react";
import {Button, Card, CardBody,CardFooter,CardHeader, Checkbox, Input} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { EyeSlashFilledIcon } from "../components/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/Icons/EyeFilledIcon ";

const LoginPage = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="min-h-screen flex">
            <div className="max-w-lg m-auto flex items-center justify-center lg:px-4 md:px-2 px-1">
                <Card fullWidth>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h4 className="font-bold text-large">Welcome to City Pharmacy</h4>
                        <p className="text-tiny uppercase font-medium opacity-75">Login to your account</p>
                    </CardHeader>
                    <CardBody>
                        <form>
                            <Input type="email" label="Email" className="mb-3 md:w-96 sm:w-72" isRequired/>
                            <Input
                                label="Password"
                                placeholder="Enter your password"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                                className="mb-3 md:w-96 sm:w-72"
                                isRequired
                            />
                            <Checkbox defaultSelected size="sm" radius="sm" className="mb-3">Remember Me</Checkbox>
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