import {
  Layout,
  LayoutContent,
  LayoutHeader,
} from "@/components/layout/Layout";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SheetList } from "@/features/dashboard/SheetList";
import { getRequiredUser } from "@/lib/auth-session";
import { Frown } from "lucide-react";
import Link from "next/link";
import { getDashboardUserSheets } from "../../prisma/queries/sheet";

export default async function DashboardPage() {
  const user = await getRequiredUser();

  const sheets = await getDashboardUserSheets({ userId: user.id });

  if (!sheets.length) {
    return (
      <Layout>
        <LayoutContent>
          <Card className="flex flex-col items-center justify-center">
            <CardTitle className="flex items-center gap-2">
              Pas de note de disponible <Frown size={16} />
            </CardTitle>
            <CardContent>
              <Link
                className={buttonVariants({ variant: "outline" })}
                href="/user/sheet/create"
              >
                Créer une nouvelle note
              </Link>
            </CardContent>
          </Card>
        </LayoutContent>
      </Layout>
    );
  }

  return (
    <Layout>
      <LayoutHeader> Salut {user.name}, prêt pour leveler sur :</LayoutHeader>
      <LayoutContent>
        <SheetList sheets={sheets} />
      </LayoutContent>
    </Layout>
  );
}
