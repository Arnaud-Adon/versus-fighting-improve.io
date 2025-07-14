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

type AuthFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export function AuthForm({ onSubmit, isLoading }: AuthFormProps) {
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
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="space-y-4">
                <div className="*:not-first:mt-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Matt Welsh"
                    type="text"
                    required
                  />
                </div>
                <div className="*:not-first:mt-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="hello@yourcompany.com"
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
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign up"}
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
