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
import { signIn } from "@/lib/auth-client";

import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function SignInPage() {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const { error } = await signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
      }

      router.push("/dashboard");
      router.refresh();
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    mutate({ email, password });
  };

  return (
    <Layout>
      <LayoutContent>
        <Card>
          <CardHeader>
            <CardTitle className="sm:text-center">Se connecter</CardTitle>
            <CardDescription className="sm:text-center">
              Prêt pour Level up
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="*:not-first:mt-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="hi@yourcompany.com"
                    type="email"
                    required
                  />
                </div>
                <div className="*:not-first:mt-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Se connecte..." : "Se connecter"}
              </Button>
            </form>

            <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
              <span className="text-muted-foreground text-xs">Ou</span>
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
