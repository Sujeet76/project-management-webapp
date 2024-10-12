"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

import DottedSeparator from "@/components/dotted-separator";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z.string().trim().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const SignUpCard = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const handleSubmit = (data: FormSchemaType) => {
    console.log(data);
  };

  return (
    <Card className="h-full w-full flex-1 md:max-w-2xl">
      <CardHeader className="items-center justify-center">
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link
            href={"#"}
            className={cn(
              buttonVariants({
                variant: "link",
                className: "h-auto px-0",
              })
            )}
          >
            privacy policy
          </Link>
          {""}
          and{" "}
          <Link
            href={"#"}
            className={cn(
              buttonVariants({
                variant: "link",
                className: "h-auto px-0",
              })
            )}
          >
            terms of service
          </Link>
        </CardDescription>
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        type="text"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email"
                        type="text"
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
                        placeholder="*********"
                        type="text"
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
                size={"lg"}
                disabled={form.formState.isSubmitting}
              >
                sign up
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
            <FaGithub /> Login with Github
          </Button>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
