import { render, screen } from "@testing-library/react";
import { UserReservations } from "@/components/user/UserReservations";

test("Displays reservations and purchase more buttons when reservations exist", async () => {
  render(<UserReservations userId={1} />);

  const purchaseButton = await screen.findByRole("button", {
    name: /purchase more tickets/i,
  });
  expect(purchaseButton).toBeInTheDocument();

})