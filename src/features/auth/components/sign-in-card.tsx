"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { z } from "zod";

import DottedSeparator from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const SignInCard = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: FormSchemaType) => {
    console.log(data);
  };

  return (
    <Card className="h-full w-full flex-1 md:max-w-2xl">
      <CardHeader className="items-center justify-center">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>
      <CardContent>
        <DottedSeparator />
        <div className="pt-4">
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        type="email"
                        required
                        {...field}
                        className="w-full"
                        disabled={form.formState.isSubmitting}
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        required
                        {...field}
                        className="w-full"
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full"
                disabled={form.formState.isSubmitting}
                size={"lg"}
              >
                Login
              </Button>
            </form>
          </Form>
        </div>
        <div className="py-8">
          <DottedSeparator />
        </div>
        <CardContent className="flex flex-col gap-y-4">
          <Button
            variant={"secondary"}
            disabled={form.formState.isSubmitting}
            className="w-full gap-1"
            size={"lg"}
          >
            <FcGoogle />
            Login with Google
          </Button>
          <Button
            variant={"secondary"}
            disabled={form.formState.isSubmitting}
            className="w-full gap-1"
            size={"lg"}
          >
            <FiGithub /> Login with Github
          </Button>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
