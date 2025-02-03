import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import CredentialSignUpForm from "./credential-sign-up";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up to your account",
};

const SignUpPage = async (props: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt={`${SITE_NAME} Logo`}
              width={50}
              height={50}
            />
          </Link>

          <CardTitle className="text-center">Create an account</CardTitle>

          <CardDescription className="text-center">
            Sign up to your account to continue
          </CardDescription>
          <CardContent className="space-y-4">
            <CredentialSignUpForm />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SignUpPage;
