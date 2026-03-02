"use client";

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
import { Input } from "@/components/ui/input";
import { Icons } from "../icon";


const emailSchema = z.object({
  email: z.string().email({
    message: "Pleasse enter valid email address",
  })
})

export default function EmailForm() {
  // 1. Define your form
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler
  function onSubmit(values: z.infer<typeof emailSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex w-[300px] flex-col gap-2 group" autoComplete="off"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="relative flex items-center">
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className="h-20 w-full bg-muted/40 border-border rounded-xl px-4 pr-16 text-sm focus-visible:ring-2 focus-visible:ring-primary/20 transition-all shadow-sm group-hover:bg-muted/60"
                  />
                </FormControl>

                <button
                  type="submit"
                  className="absolute right-4 p-1"
                >
                  <Icons.arrow
                    className="size-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <FormMessage className="text-[10px] px-1" />
            </FormItem>
          )}
        /> 
      </form>
    </Form>
  );
}