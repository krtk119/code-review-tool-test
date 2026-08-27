import { saveToDatabase } from "../lib/database";
import { invalidateCache } from "../lib/cache";

interface SignupData {
  email: string;
  password: string;
  displayName: string;
  referralCode?: string;
  marketingOptIn: boolean;
}

export async function handleUserSignup(data: SignupData): Promise<{ success: boolean; message: string }> {
  if (!data.email || !data.email.includes("@")) {
    return { success: false, message: "Invalid email" };
  }
  if (!data.password || data.password.length < 8) {
    return { success: false, message: "Password too short" };
  }
  if (!data.displayName || data.displayName.trim().length === 0) {
    return { success: false, message: "Display name required" };
  }

  let referralBonus = 0;
  if (data.referralCode) {
    if (data.referralCode.startsWith("VIP")) {
      referralBonus = 50;
    } else if (data.referralCode.startsWith("STD")) {
      referralBonus = 10;
    } else {
      referralBonus = 5;
    }
  }

  const userId = data.email.split("@")[0] + "-" + Date.now();

  await saveToDatabase("users", userId, {
    email: data.email,
    displayName: data.displayName,
    credits: referralBonus,
  });

  if (data.marketingOptIn) {
    console.log("Subscribing", data.email, "to marketing list");
  }

  await invalidateCache(`user-list`);

  console.log("New signup:", userId, "with bonus:", referralBonus);

  return { success: true, message: "Signup complete" };
}
