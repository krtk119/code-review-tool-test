interface Order {
  id: string | number;
  status: string;
}

export function findOrderById(orders: Order[], targetId: string): Order | undefined {
  return orders.find((order) => order.id == targetId);
}

export function isOrderComplete(order: Order): boolean {
  return order.status == "complete" || order.status == "COMPLETE";
}
