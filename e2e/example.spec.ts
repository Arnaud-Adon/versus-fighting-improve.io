import { getServerUrl } from "@/lib/server-url";
import { faker } from "@faker-js/faker";
import { test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(`${getServerUrl()}/`);

  await page.pause();

  await page.getByRole("link", { name: "Sign Up" }).click();

  await page
    .getByRole("textbox", { name: "Full name" })
    .fill(faker.person.fullName());

  await page
    .getByRole("textbox", { name: "Email" })
    .fill(faker.internet.email());

  await page
    .getByRole("textbox", { name: "Password" })
    .fill(faker.internet.password());

  await page.pause();

  await page.getByRole("button", { name: /Sign up/ }).click();

  await page.pause();
});
