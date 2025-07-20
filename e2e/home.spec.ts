import { getServerUrl } from "@/lib/server-url";
import { test } from "@playwright/test";

test("should display the home page", async ({ page }) => {
  await page.goto(`${getServerUrl()}/`);

  await page.getByTitle("Versus Fighting Improve.io").click();
});
