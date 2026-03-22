import type { User } from "firebase/auth";

/**
 * Exchanges a fresh Firebase ID token for an httpOnly session cookie (server-verified).
 * Call after `signInWithEmailAndPassword` / `createUserWithEmailAndPassword`.
 */
export class SessionExchangeError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "SessionExchangeError";
    this.status = status;
  }
}

export async function establishServerSession(user: User): Promise<void> {
  const idToken = await user.getIdToken(true);
  const res = await fetch("/api/auth/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken }),
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    const message = body.error ?? "Could not create session";
    if (process.env.NODE_ENV === "development") {
      console.error("[establishServerSession] failed:", res.status, message);
    }
    throw new SessionExchangeError(message, res.status);
  }
}

export async function clearServerSession(): Promise<void> {
  await fetch("/api/auth/session", {
    method: "DELETE",
    credentials: "include",
  });
}
