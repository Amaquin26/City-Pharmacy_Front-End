import {Card, CardHeader, CardBody, Image, Button, Input} from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { EyeSlashFilledIcon } from "../../components/Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../components/Icons/EyeFilledIcon ";

const ProfilePage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = React.useState(false);

  const toggleVisibilityPassword = () => setIsVisiblePassword(!isVisiblePassword);
  const toggleVisibilityConfirmPassword = () => setIsVisibleConfirmPassword(!isVisibleConfirmPassword);

  const isInvalid = useMemo(() => {
    return password !== confirmPassword ? true : false;
  }, [password,confirmPassword]);

  return (
    <div className="min-h-screen px-4">
      <div className='md:w-3/5 m-auto mt-10'>
        <div className="flex gap-2">
            <div className="w-[30%]">
            <Card className="py-4">
              <CardBody >        
                  <Image
                      alt="Card background"
                      className="object-cover"
                      src="/profiles/brayl.png"
                      radius="full"
                    />          
                    <p className="text-tiny text-center uppercase font-bold">Admin</p>
                    <Button className="mt-3" color="primary" variant="shadow">Edit Profile</Button>
              </CardBody>
            </Card>
            </div>
            <div className="w-full">
                <h4 className="font-bold text-2xl">Hello Brayl James Amaquin</h4>
                <form className="ml-2">
                  <fieldset className="border border-default-500 p-4 rounded-lg" disabled>
                    <legend className="text-base text-default-500">User Details</legend>
                      <div className="grid grid-cols-2 gap-2">

                        <div>
                          <Input
                            type="email"
                            label="Email"
                            variant="bordered"
                            className="w-full"
                            color="danger"
                            defaultValue="brayljamesamaquin@gmail.com"
                          />
                        </div>
                        <div>
                          <Input
                            type="text"
                            label="Username"
                            variant="bordered"
                            className="w-full"
                            color="danger"
                            defaultValue="Brayl"
                          />
                        </div>

                        <div>
                          <Input
                            type="text"
                            label="First Name"
                            variant="bordered"
                            className="w-full"
                            color="danger"
                            defaultValue="Brayl James"
                          />
                        </div>
                        <div>
                          <Input
                            type="text"
                            label="Last Name"
                            variant="bordered"
                            className="w-full"
                            color="danger"
                            defaultValue="Amaquin"
                          />
                        </div>
                        <div>
                          <Input
                              label="Password"
                              placeholder="Password"
                              endContent={
                                  <button className="focus:outline-none" type="button" onClick={toggleVisibilityPassword}>
                                  {isVisiblePassword ? (
                                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                  ) : (
                                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                  )}
                                  </button>
                              }
                              type={isVisiblePassword ? "text" : "password"}
                              className="w-full"       
                              color="danger"
                              isRequired
                              isInvalid={isInvalid}
                              value={password}
                              errorMessage="Password do not match"
                              onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div>
                          <Input
                              label="Confirm Password"
                              placeholder="Re-enter Password"
                              endContent={
                                  <button className="focus:outline-none" type="button" onClick={toggleVisibilityConfirmPassword}>
                                  {isVisibleConfirmPassword ? (
                                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                  ) : (
                                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                  )}
                                  </button>
                              }
                              type={isVisibleConfirmPassword ? "text" : "password"}
                              className="w-full"

                              color="danger"
                              isRequired
                              isInvalid={isInvalid}
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                  </fieldset>
                </form>
              </div>
          </div>
        
      </div>
    </div>
  );
}

export default ProfilePage