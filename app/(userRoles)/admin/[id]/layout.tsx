import { redirect } from "next/navigation";
import { verifySessionCookie } from "@/lib/auth/session";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default async function AdminRoleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const decoded = await verifySessionCookie();

  if (!decoded) {
    redirect("/admin-login");
  }

  if (decoded.uid !== id) {
    redirect(`/admin/${decoded.uid}`);
  }

  const role = decoded.role as string | undefined;
  if (role !== "admin") {
    redirect(`/user/${decoded.uid}`);
  }

  return (
    <>
      <Nav />

      {children}

      <Footer />
    </>
  );
}
