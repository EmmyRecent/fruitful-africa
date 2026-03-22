/**
 * Set Firebase Auth custom claim `role` for a user (admin | user).
 *
 * Usage (file path — easiest):
 *   FIREBASE_SERVICE_ACCOUNT_PATH=./.secrets/firebase-adminsdk.json \
 *     node scripts/set-custom-role.cjs <uid> admin
 *
 * Or inline JSON:
 *   FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}' \
 *     node scripts/set-custom-role.cjs <uid> admin
 */

const admin = require("firebase-admin");

const uid = process.argv[2];
const role = process.argv[3];

if (!uid || !role || !["admin", "user"].includes(role)) {
  console.error(
    "Usage: FIREBASE_SERVICE_ACCOUNT_KEY='{...}' node scripts/set-custom-role.cjs <uid> <admin|user>",
  );
  process.exit(1);
}

const path = require("node:path");
const fs = require("node:fs");

let credentials;
const filePath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH?.trim();
if (filePath) {
  const absolute = path.resolve(process.cwd(), filePath);
  credentials = JSON.parse(fs.readFileSync(absolute, "utf8"));
} else {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!raw) {
    console.error(
      "Set FIREBASE_SERVICE_ACCOUNT_PATH or FIREBASE_SERVICE_ACCOUNT_KEY",
    );
    process.exit(1);
  }
  credentials = JSON.parse(raw.trim());
}

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

admin
  .auth()
  .setCustomUserClaims(uid, { role })
  .then(() => {
    console.log(`Set role "${role}" for ${uid}`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
