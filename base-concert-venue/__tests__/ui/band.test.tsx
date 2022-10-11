import { render, screen } from "@testing-library/react";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandComponent from "@/Pages/bands/[bandId]";

test("band component displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent error={null} band={fakeBands[0]} />);

  const heading = screen.getByRole("heading", {
    name: /The Wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("band component displays error", () => {
  render(<BandComponent band={null} error="EVERYTHING IS FINE" />);

  const error = screen.getByRole("heading", { name: /everything is fine/i });

  expect(error).toBeInTheDocument();
})