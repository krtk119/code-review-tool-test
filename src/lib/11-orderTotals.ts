interface Order {
  subtotal: number;
  state: string;
}

const TAX_RATES: Record<string, number> = {
  CA: 0.0725,
  NY: 0.04,
  TX: 0.0625,
};

export function getOrderTotal(order: Order): number {
  const rate = TAX_RATES[order.state] ?? 0;
  const tax = order.subtotal * rate;
  return order.subtotal + tax;
}

export function getOrderReceiptLine(order: Order): string {
  const rate = TAX_RATES[order.state] ?? 0;
  const tax = order.subtotal * rate;
  const total = order.subtotal + tax;
  return `Subtotal: ${order.subtotal}, Tax: ${tax}, Total: ${total}`;
}

export function isOrderOverFreeShippingThreshold(order: Order): boolean {
  const rate = TAX_RATES[order.state] ?? 0;
  const tax = order.subtotal * rate;
  const total = order.subtotal + tax;
  return total > 50;
}
