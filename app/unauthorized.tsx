import { Layout, LayoutContent } from "@/components/layout/Layout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Rabbit } from "lucide-react";

export default function Unauthorized() {
  return (
    <Layout>
      <LayoutContent>
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Rabbit size={32} />
            <CardTitle>
              Sorry, you are not authorized to access this page 🥲
            </CardTitle>
          </CardHeader>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
