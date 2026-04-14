"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { PasswordInput } from "./password-input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginAction } from "@/action";

const FormSchema = z.object({
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 characters")
    .max(12, "Phone number must be at most 12 characters")
    .regex(/^\d{7,}$/, "Invalid phone number"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(8, "Password must be less than 8 characters")
    .regex(/^\d{7,}$/, "Invalid password"),
    
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
   
    
  const router = useRouter();
const [loading, setLoading] = useState(false);
   
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          phone: "",
          password: "",
        },
      });
      
      // 2. Define a submit handler
      async function onSubmit(values: z.infer<typeof FormSchema>) {
        setLoading(true);
        
        const formData = new FormData();
        formData.append("phone", values.phone);
        formData.append("password", values.password);
        
        try {
          const result = await loginAction(formData);
          
          if (result?.error) {
            console.error("Login failed:", result.error);
            // Handle error - show message to user
            return;
          }
          
          // Success - the server action will handle redirect
        } catch (error) {
          console.error("Login error:", error);
          // Handle error
        } finally {
          setLoading(false);
        }
      }

  return (
    <div className={cn("mx-auto w-300  max-w-md", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-xl border bg-card p-8 shadow-lg transition-all hover:shadow-xl" {...props}>
        <FieldGroup className="gap-5">
          {/* Header Section */}
          <div className="mb-2 flex  text-center items-start gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h1 className="text-3xl  font-semibold tracking-tight">
              Sign in
            </h1>
          </div>
             <div>

            <p className="text-sm text-muted-foreground">
              Enter your phone number below to login to your account
            </p>
             </div>
   
          {/* Input Fields */}
          <div className="grid gap-4 mt-3 space-y-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FieldLabel
                    className="text-xl  "
                    htmlFor="phone"
                  >
                    phone number
                  </FieldLabel>
                  <FormControl>
                    <Input
                      id="phone"
                      type="phone"
                      placeholder="097********"
                      className="bg-muted/30 focus-visible:ring-primary"
                      {...field}
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
                  <div className="flex items-center justify-between">
                    <FieldLabel
                      className="text-xl  "
                      htmlFor="password"
                    >
                      Password
                    </FieldLabel>
                    <a
                      href="#"
                      className="text-xl   hover:underline underline-offset-4"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <FormControl>
                    <PasswordInput
                      id="password"
                      className="bg-muted/30 focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full py-6 transition-colors hover:bg-secondary"
            onClick={() => {
              // TODO: Implement Google OAuth
              console.log("Google sign in clicked");
            }}
          >
            <svg
              className="mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>

          <Button
            type="submit"
            className="w-full shadow-md transition-transform active:scale-[0.98]"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a
              href="/Auth/register/"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Sign up
            </a>
          </p>
        </FieldGroup>
        </form>
      </Form>

      {/* Optional Footer Legal Links */}
      <p className="mt-6 px-8 text-center text-xs leading-relaxed text-muted-foreground">
        Secure login with 256-bit encryption. By signing in, you agree to our{" "}
        <a href="#" className="hover:text-primary underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
