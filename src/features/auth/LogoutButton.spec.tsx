import { signOut } from "@/lib/auth-client";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { LogoutButton } from "./LogoutButton";

beforeAll(() => {
  vi.mock("@/lib/auth-client", () => ({
    signOut: vi.fn(),
  }));
});

describe("LogoutButton", () => {
  it("should render logout button correctly", () => {
    render(<LogoutButton />);
    expect(screen.getByText("Logout")).toBeDefined();
  });

  it("should call signOut when clicked", () => {
    render(<LogoutButton />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(signOut).toHaveBeenCalled();
  });
});
