import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Social Login */}
          <Button variant="outline" type="button" className="w-full py-6 transition-colors hover:bg-secondary">
            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Login with GitHub
          </Button>

          <FieldSeparator className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Or use your email
          </FieldSeparator>

          {/* Input Fields */}
          <div className="grid gap-4">
            <Field>
              <FieldLabel className="text-xs font-bold uppercase text-muted-foreground/70" htmlFor="email">
                Email Address
              </FieldLabel>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@company.com" 
                className="bg-muted/30 focus-visible:ring-primary" 
                required 
              />
            </Field>

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel className="text-xs font-bold uppercase text-muted-foreground/70" htmlFor="password">
                  Password
                </FieldLabel>
                <a
                  href="#"
                  className="text-xs font-medium text-primary hover:underline underline-offset-4"
                >
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                className="bg-muted/30 focus-visible:ring-primary" 
                required 
              />
            </Field>
          </div>

          <Button type="submit" className="w-full shadow-md transition-transform active:scale-[0.98]">
            Sign In
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
      
      {/* Optional Footer Legal Links */}
      <p className="mt-6 px-8 text-center text-xs leading-relaxed text-muted-foreground">
        Secure login with 256-bit encryption. 
        By signing in, you agree to our <a href="#" className="hover:text-primary underline">Privacy Policy</a>.
      </p>
    </div>
  )
}