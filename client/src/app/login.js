import { Input, Label, PasswordInput } from "@/components/ui-elements/input";
import Link from "next/link";
import Button from "@/components/ui-elements/button";

export default function Login() {
  return (
    <div className="h-screen grid items-center bg-no-repeat bg-cover bg-[url('/login-bg.png')]">
      <div className="h-full w-full backdrop-blur-sm">
        <div className="flex h-full w-full items-center justify-center">
          <div className="p-8 w-full bg-white rounded-lg shadow-lg max-md:m-4 sm:w-[420px]">
            <form>
              <h1 className="font-semibold text-lg sm:text-2xl">
                Welcome Back
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Please enter your details to get started!
              </p>
              <div className="space-y-5 mt-8 mb-2">
                <div className="flex flex-col">
                  <Label>Email</Label>
                  <Input placeholder="Enter your email address" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <Label>Password</Label>

                    <Link
                      href=""
                      className="font-medium text-xs text-primary-600 hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <PasswordInput
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="my-6 space-y-4">
                <Button className="w-full">Next</Button>
                <div className="text-center font-semibold text-gray-400">
                  OR
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="w-full flex gap-4 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                      <path fill="none" d="M1 1h22v22H1z" />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full flex gap-4 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                      <path fill="none" d="M1 1h22v22H1z" />
                    </svg>
                    Google
                  </Button>
                </div>
              </div>
              <div className="text-center text-gray-600 text-sm">
                {`Don't have an account?`} <br />
                <Link
                  href=""
                  className="text-primary-600 leading-8 hover:underline">
                  Signup
                </Link>
              </div>
            </form>
            <div className="mt-8 -mb-3 text-xs text-gray-600 text-center">
              Copyrights (C) 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
