import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
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
import { contactFormSchema } from "@/lib/FormSchemas";
// import { useState } from "react";

const ContactForm = () => {
  // const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      fullName: "",
      message: "",
      subjectLine: "",
    },
  });

  const { handleSubmit} = form;

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      console.log("hello", values);
    } catch (error: object | any) {
      console.log(error)
    } finally {
      console.log("finally")
    }
  }

  return (
    <div className="w-full px-10">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="w-full flex justify-between gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base lg:text-xl text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      // disabled={isLoading}
                      placeholder="JohnDoe@gmail.com"
                      {...field}
                      className="bg-white w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base lg:text-xl text-white">
                    Full Name
                  </FormLabel>
                  <FormControl className="w-full">
                    <Input
                      // disabled={isLoading}
                      placeholder="John Smith"
                      {...field}
                      className="bg-white w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subjectLine"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base lg:text-xl text-white">
                  Subject line
                </FormLabel>
                <FormControl className="w-full">
                  <Input
                    // disabled={isLoading}
                    placeholder="Hello john doe"
                    {...field}
                    className="bg-white w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base lg:text-xl text-white">
                  Message
                </FormLabel>
                <FormControl className="w-full">
                  <textarea
                    // disabled={isLoading}
                    placeholder="Hello john doe"
                    {...field}
                    className="bg-white w-full rounded p-3 min-h-[10rem]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full">
            <Button variant={"default"} type="submit" className="w-full">
              {isLoading ? <SpinnerCircle /> : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
