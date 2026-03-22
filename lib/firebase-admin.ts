import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import * as admin from "firebase-admin";

function parseServiceAccountJson(raw: string): admin.ServiceAccount {
  let s = raw.trim().replace(/^\uFEFF/, "");

  // Strip one layer of wrapping quotes from .env (e.g. '...' or "...")
  if (
    (s.startsWith("'") && s.endsWith("'")) ||
    (s.startsWith('"') && s.endsWith('"'))
  ) {
    s = s.slice(1, -1);
    s = s.replace(/\\"/g, '"').replace(/\\n/g, "\n");
  }

  try {
    return JSON.parse(s) as admin.ServiceAccount;
  } catch {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON. Use double-quoted keys like {\"type\":\"service_account\",...}, or set FIREBASE_SERVICE_ACCOUNT_PATH to a .json file path (easiest for local dev).",
    );
  }
}

function loadServiceAccount(): admin.ServiceAccount {
  const filePath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH?.trim();
  if (filePath) {
    const absolute = resolve(process.cwd(), filePath);
    try {
      return JSON.parse(readFileSync(absolute, "utf8")) as admin.ServiceAccount;
    } catch {
      throw new Error(
        `Could not read or parse FIREBASE_SERVICE_ACCOUNT_PATH: ${absolute}`,
      );
    }
  }

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY?.trim();
  if (!raw) {
    throw new Error(
      "Set FIREBASE_SERVICE_ACCOUNT_PATH (path to service account .json) or FIREBASE_SERVICE_ACCOUNT_KEY (JSON string) for server-side auth.",
    );
  }

  return parseServiceAccountJson(raw);
}

function initAdminApp(): void {
  if (admin.apps.length > 0) return;

  const credentials = loadServiceAccount();

  admin.initializeApp({
    credential: admin.credential.cert(credentials),
  });
}

export function getAdminAuth(): admin.auth.Auth {
  initAdminApp();
  return admin.auth();
}
