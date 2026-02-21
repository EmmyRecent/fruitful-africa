import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default CartLayout;
