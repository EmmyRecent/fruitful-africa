import VendorPage from "@/components/VendorPage";

type VendorType = {
  params: Promise<{ id: string }>;
};

const Vendor = async ({ params }: VendorType) => {
  const id = (await params).id;
  return <VendorPage id={id} />;
};

export default Vendor;
