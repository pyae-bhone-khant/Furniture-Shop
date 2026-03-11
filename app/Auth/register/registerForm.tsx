import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <div className={cn("mx-auto w-full max-w-md", className)}>
      <form 
        className="rounded-xl border bg-card p-8 shadow-lg transition-all hover:shadow-xl" 
        {...props}
      >
        <FieldGroup className="gap-5">
          {/* Header Section */}
          <div className="mb-2 flex flex-col items-center gap-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to get started
            </p>
          </div>

          {/* Social Provider */}
          <Button variant="outline" type="button" className="w-full py-6 transition-colors hover:bg-secondary">
            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Sign up with GitHub
          </Button>

          <FieldSeparator className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Or continue with email
          </FieldSeparator>

          {/* Form Fields */}
          <div className="grid gap-4">
            <Field>
              <FieldLabel className="text-xs font-bold uppercase text-muted-foreground/70" htmlFor="name">
                Full Name
              </FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" className="bg-muted/30 focus-visible:ring-primary" required />
            </Field>

            <Field>
              <FieldLabel className="text-xs font-bold uppercase text-muted-foreground/70" htmlFor="email">
                Email Address
              </FieldLabel>
              <Input id="email" type="email" placeholder="name@company.com" className="bg-muted/30 focus-visible:ring-primary" required />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel className="text-xs font-bold uppercase text-muted-foreground/70" htmlFor="password">
                  Password
                </FieldLabel>
                <Input id="password" type="password" className="bg-muted/30" required />
              </Field>
              <Field>
                <FieldLabel className="text-xs font-bold uppercase text-muted-foreground/70" htmlFor="confirm-password">
                  Confirm
                </FieldLabel>
                <Input id="confirm-password" type="password" className="bg-muted/30" required />
              </Field>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Must be at least 8 characters.
            </p>
          </div>

          <Button type="submit" className="w-full shadow-md transition-transform active:scale-[0.98]">
            Create Account
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/Auth/login" className="font-medium text-primary underline-offset-4 hover:underline">
              Sign in
            </a>
          </p>
        </FieldGroup>
      </form>
      
      <p className="mt-6 px-8 text-center text-xs leading-relaxed text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">Terms of Service</a> and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">Privacy Policy</a>.
      </p>
    </div>
  )
}