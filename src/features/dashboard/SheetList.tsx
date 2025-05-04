import { GetDashboardUserSheetsType } from "../../../prisma/queries/sheet";
import { Sheet } from "./Sheet";

type SheetListProps = {
  sheets: GetDashboardUserSheetsType;
};

export const SheetList = ({ sheets }: SheetListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sheets.map((sheet) => (
        <Sheet key={sheet.id} sheet={sheet} />
      ))}
    </div>
  );
};
