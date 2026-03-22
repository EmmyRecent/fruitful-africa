import { cookies } from "next/headers";
import type { DecodedIdToken } from "firebase-admin/auth";
import { getAdminAuth } from "@/lib/firebase-admin";
import { SESSION_COOKIE_NAME } from "./constants";

/**
 * Verifies the Firebase session cookie set by POST /api/auth/session.
 * Returns decoded token (includes custom claims such as `role`) or null.
 */
export async function verifySessionCookie(): Promise<DecodedIdToken | null> {
  const store = await cookies();
  const value = store.get(SESSION_COOKIE_NAME)?.value;
  if (!value) return null;

  try {
    return await getAdminAuth().verifySessionCookie(value, true);
  } catch {
    return null;
  }
}
