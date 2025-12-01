import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="bg-tertiaryColor text-white py-10 lg:py-10">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-6 gap-4 gap-y-10">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg capitalize">Fruitful Africa</p>

            <p className="text-base font-normal">
              Connecting authentic African craftsmanship with global markets.
              Empowering artisans, celebrating culture.
            </p>

            <div className="flex justify-start items-center gap-3">
              <FacebookIcon size={17} />
              <InstagramIcon size={17} />
              <TwitterIcon size={17} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg capitalize">Quick Links</p>

            <ul className="flex flex-col gap-2 [&>li]:text-base [&>li]:hover:underline cursor-pointer">
              <li>About us</li>
              <li>Marketplace</li>
              <li>Meet the Makers</li>
              <li>How it Works</li>
              <li>Become a Vendor</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg capitalize">Support</p>

            <ul className="flex flex-col gap-2 [&>li]:text-base [&>li]:hover:underline  cursor-pointer">
              <li>Help Center</li>
              <li>Shipping & Delivery</li>
              <li>Returns Policy</li>
              <li>Track Order</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg capitalize">Support</p>

            <ul className="flex flex-col gap-2 [&>li]:text-base [&>li]:hover:underline  cursor-pointer">
              <li>support@fruitfulafrica.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Returns Policy</li>
              <li>Lagos, Nigeria & Global Offices</li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-3 [&>p]:text-white text-base border-t border-primaryColor/50 py-6 pb-0">
          <p>© {year} FruitfulAfrica. All rights reserved.</p>

          <div className="flex flex-col md:flex-row items-start [&>p]:text-base [&>p]:text-white [&>p]:cursor-pointer justify-center gap-3">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
