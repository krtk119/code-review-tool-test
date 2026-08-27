export interface PaymentRequest {
  amountCents: number;
  currency: string;
  cardLast4: string;
}

export function validatePayment(payment: PaymentRequest): { valid: boolean; reason?: string } {
  if (payment.amountCents <= 0) {
    return { valid: false, reason: "Amount must be positive" };
  }
  if (payment.amountCents > 5_000_000) {
    return { valid: false, reason: "Amount exceeds maximum allowed" };
  }
  if (!["USD", "GBP", "EUR"].includes(payment.currency)) {
    return { valid: false, reason: "Unsupported currency" };
  }
  if (!/^\d{4}$/.test(payment.cardLast4)) {
    return { valid: false, reason: "Invalid card reference" };
  }
  return { valid: true };
}
