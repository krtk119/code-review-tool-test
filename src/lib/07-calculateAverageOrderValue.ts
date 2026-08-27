interface Order {
  total: number;
  cancelled: boolean;
}

export function calculateAverageOrderValue(orders: Order[]): number {
  let sum = 0;
  let validCount = 0;

  for (const order of orders) {
    if (!order.cancelled) {
      sum += order.total;
      validCount++;
    }
  }

  return sum / orders.length;
}
