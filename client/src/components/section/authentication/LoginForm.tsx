import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import SpinnerCircle from "@/components/ui/Spinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import api from "@/lib/api";
import toast from "@/lib/toast";
import { loginFormSchema } from "@/lib/formSchemas";
import { socialsButtons } from "@/components/social-media-button/SocialMedias";

const LoginForm = () => {
  const router = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_PORT;
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, reset } = form;

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      setLoading(true);
      const response = await api.post(`${BACKEND_URL}api/login`, values);

      toast.success("Login Successfully !");

      if (response?.data) {
        reset();
        router("/");
      }
    } catch (error: object | any) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full p-5 flex justify-center items-center">
      <div className="w-[30rem] h-[50rem] flex flex-col justify-center gap-10">
        <div className="text-white grid gap-3">
          <h1 className="text-4xl lg:text-5xl font-bold">Let’s you sign in</h1>
          <p className="text-2xl lg:text-3xl">Welcome Cloud Vapers</p>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base lg:text-xl text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="JohnDoe@gmail.com"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base lg:text-xl text-white">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="********"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {/* <Input placeholder="********" {...field} className="bg-white"/> */}
                    <div className="flex items-center gap-5">
                      {/* Pag aralan mo to */}
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="cursor-pointer"
                      />
                      <FormLabel className="text-base text-white">
                        Remember me
                      </FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <Button variant={"default"} type="submit" className="w-full">
                {isLoading ? <SpinnerCircle /> : "Sign in"}
              </Button>
            </div>
          </form>
        </Form>

        <div className="w-full border" />
        <NavLink
          to="/register"
          className="text-center text-white cursor-pointer hover:underline text-sm"
        >
          Don't have account yet?
        </NavLink>
        <div className="flex justify-between w-full gap-3">
          {socialsButtons.map((pro) => (
            <Button variant={"default"} key={pro.name} className="flex-1">
              {pro.logo()}
              {pro.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
