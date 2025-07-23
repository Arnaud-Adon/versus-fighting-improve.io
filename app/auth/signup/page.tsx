"use client";

import { Layout, LayoutContent } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signUp } from "@/lib/auth-client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";

export default function SignUpPage() {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    }) => {
      const { error } = await signUp.email({
        email,
        password,
        name,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Compte créé avec succès");
      router.push("/dashboard");
      router.refresh();
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    mutate({ name, email, password });
  };

  return (
    <Layout>
      <LayoutContent>
        <Card>
          <CardHeader>
            <CardTitle className="sm:text-center">Sign up Origin UI</CardTitle>
            <CardDescription className="sm:text-center">
              We just need a few details to get you started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="*:not-first:mt-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Matt Welsh"
                    type="text"
                  />
                </div>
                <div className="*:not-first:mt-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="hi@yourcompany.com"
                    type="email"
                  />
                </div>
                <div className="*:not-first:mt-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Signing up..." : "Sign up"}
              </Button>
            </form>

            <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
              <span className="text-muted-foreground text-xs">Or</span>
            </div>

            <Button variant="outline">Continuer avec Google</Button>

            <p className="text-muted-foreground text-center text-xs">
              By signing up you agree to our{" "}
              <a className="underline hover:no-underline" href="#">
                Terms
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
