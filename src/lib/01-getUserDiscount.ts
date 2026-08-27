interface User {
  id: string;
  membershipTier: string;
}

export function getUserDiscount(user: User, cartTotal: number): number {
  let discount: number = 0;

  if (user.membershipTier === "gold") {
    discount = 0.2;
  }
  if (user.membershipTier === "silver") {
    discount = 0.1;
  }

  return cartTotal - cartTotal * discount;
}
