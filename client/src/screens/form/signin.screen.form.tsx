"use client";
import React from "react";
import { Button } from "@/components/button";
import { SignInSchema, SignInSchemaType } from "@/validation/form.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextBox } from "@/components/textbox";
import { useMutation } from "@tanstack/react-query";
import { AuthenticationServicesType } from "@/services/authentication/type";
import { AuthenticationServices } from "@/services/authentication/authentication.services";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const SignInScreenForm = () => {
  
  const router = useRouter();
  
  const {control, 
    handleSubmit,
    formState: { errors, dirtyFields },
    setError,
  } = useForm<SignInSchemaType>({
    resolver: yupResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
  });
  const { mutateAsync, isPending } = useMutation<
    AuthenticationServicesType.SignInRes,
    Error,
    AuthenticationServicesType.SignInProps
  >({
    mutationFn: (variables) => AuthenticationServices.SignIn(variables),
    onSuccess: (data) => {
      Cookies.set("token", data.token);
      router.replace(data.url);
    },
    onError: (error) => {
      const AxiosErr = error as AxiosError;
      const err = AxiosErr?.response?.data as {
        message: string;
        path: "username" | "password";
      };
      setError(err.path, {
        type: "manual",
        message: err.message,
      });
    },
  });
  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    try {
      await mutateAsync(data);
    } catch (e) {}
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col gap-10 w-full"
    >
      <div className={"w-full h-[50px]"}>
        <Controller
          name={"username"}
          control={control}
          render={({ field }) => (
            <TextBox
              id="email"
              disabled={isPending}
              variation="standard"
              placeholder="Enter Email Or Username"
              label="Email / Username"
              {...field}
              errormessage={errors.username && errors.username?.message}
            />
          )}
        />
      </div>
      <div className={"w-full h-[50px]"}>
        <Controller
          name={"password"}
          control={control}
          render={({ field }) => (
            <TextBox
              link={{
                name: "Forgot Password?",
                path: "#",
              }}
              disabled={isPending}
              id="password"
              variation="password"
              placeholder="Enter Password"
              label="Password"
              {...field}
              errormessage={errors.password && errors.password?.message}
            />
          )}
        />
      </div>
      <div className={"w-full h-[50px]"}>
        <Button
          type="submit"
          variation={isPending ? "loading-standard" : "standard"}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
