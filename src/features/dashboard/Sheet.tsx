import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { GetDashboardUserSheetsType } from "../../../prisma/queries/sheet";

type SheetProps = {
  sheet: GetDashboardUserSheetsType[number];
};

export const Sheet = ({ sheet }: SheetProps) => {
  return (
    <Card>
      <CardTitle>{sheet.title}</CardTitle>
      <CardContent>{sheet.content}</CardContent>
      <CardFooter>{sheet.createdAt.toLocaleDateString()}</CardFooter>
    </Card>
  );
};
