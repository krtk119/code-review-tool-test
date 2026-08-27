import { validatePayment } from "./13-paymentValidator";

describe("validatePayment", () => {
  it("accepts a valid payment", () => {
    const result = validatePayment({
      amountCents: 2500,
      currency: "USD",
      cardLast4: "1234",
    });
    expect(result.valid).toBe(true);
  });
});
