import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="bg-tertiaryColor py-10 text-white lg:py-10">
      <div className="wrapper">
        <div className="grid grid-cols-1 gap-4 gap-y-10 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold capitalize">Fruitful Africa</p>

            <p className="text-base font-normal">
              Connecting authentic African craftsmanship with global markets.
              Empowering artisans, celebrating culture.
            </p>

            <div className="flex items-center justify-start gap-3">
              <FacebookIcon size={17} />
              <InstagramIcon size={17} />
              <TwitterIcon size={17} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold capitalize">Quick Links</p>

            <ul className="flex cursor-pointer flex-col gap-2 [&>li]:text-base [&>li]:hover:underline">
              <li>About us</li>
              <li>Marketplace</li>
              <li>Meet the Makers</li>
              <li>How it Works</li>
              <li>Become a Vendor</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold capitalize">Support</p>

            <ul className="flex cursor-pointer flex-col gap-2 [&>li]:text-base [&>li]:hover:underline">
              <li>Help Center</li>
              <li>Shipping & Delivery</li>
              <li>Returns Policy</li>
              <li>Track Order</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold capitalize">Support</p>

            <ul className="flex cursor-pointer flex-col gap-2 [&>li]:text-base [&>li]:hover:underline">
              <li>support@fruitfulafrica.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Returns Policy</li>
              <li>Lagos, Nigeria & Global Offices</li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-primaryColor/50 flex flex-col items-center justify-center gap-3 border-t py-6 pb-0 text-base md:flex-row md:justify-between [&>p]:text-white">
          <p>© {year} FruitfulAfrica. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-3 [&>p]:cursor-pointer [&>p]:text-base [&>p]:text-white">
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
