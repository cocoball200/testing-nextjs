import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("reservation page show correct number of availale seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});

test("reservation page shows sold out message ", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);

  const soldOutMessage = await screen.findByRole("heading", {
    name: /sold out/i,
  });
  expect(soldOutMessage).toBeInTheDocument();

  const purchaseButton = screen.getByRole("button", {
    name: /purchase/i,
  });

  expect(purchaseButton).not.toBeInTheDocument();
}) 