"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { signUpSchema } from "@/lib/validators";
import { SignUpFormValues } from "@/types";
import { signUpUser } from "@/lib/actions/user.actions";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

const CredentialSignUpForm = () => {
  const { toast } = useToast();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      const result = await signUpUser(values);

      if (!result.success) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message,
        });
        return;
      }
    } catch (error) {
      if (isRedirectError(error)) return;

      toast({
        variant: "destructive",
        title: "Error",
        description: "Terjadi kesalahan saat sign up",
      });
      console.error("Terjadi kesalahan saat sign up:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="your-name" autoComplete="name" {...field} />
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
                  placeholder="your-email@example.com"
                  autoComplete="email"
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  {...field}
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
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="confirm password"
                  autoComplete="confirm-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting}
          className="w-full mt-4"
          type="submit"
        >
          {form.formState.isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>

        <div className="text-sm text-muted-foreground flex items-center justify-center gap-2 mt-4">
          Already have an account?{" "}
          <Link className="link" target="_self" href="/sign-in">
            Sign In
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default CredentialSignUpForm;
