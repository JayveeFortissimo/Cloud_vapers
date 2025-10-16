import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerFormSchema } from "@/lib/FormSchemas";
import { Button } from "@/components/ui/Button";
import { socialsButtons } from "@/components/social-media-button/SocialMedias";
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
import api from "@/lib/api";
import { redirect } from "@/lib/redirect";
import { toast } from "sonner";

const RegisterForm = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_PORT;
  console.log(BACKEND_URL);
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, reset } = form;

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    try {
      const response = await api.post(`${BACKEND_URL}api/register`, values);

      if (!response?.data)
        return toast.error("Cannot Proceed, Have a problem plewase try again!");

      reset();
      redirect("/login");
    } catch (error: any) {
      toast.error(error?.data.message);
    } finally {
    }
  }

  return (
    <div className="w-full p-5 flex justify-center items-center">
      <div className="w-[30rem] h-[50rem] flex flex-col justify-center gap-10">
        <div className="text-white grid gap-3">
          <h1 className="text-4xl lg:text-5xl font-bold">Create new Account</h1>
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
                      placeholder="John@gmail.com"
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base lg:text-xl text-white">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="JohnDoe"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base lg:text-xl text-white">
                    Confirm
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="********"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full">
              <Button variant={"default"} type="submit" className="w-full">
                Sign up
              </Button>
            </div>
          </form>
        </Form>

        <div className="w-full border" />
        <NavLink
          to="/login"
          className="text-center text-white cursor-pointer hover:underline text-sm"
        >
          Have account already?
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

export default RegisterForm;
