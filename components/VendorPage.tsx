import VendorDashboardStats from "@/components/VendorDashboardStats";
import VendorPageHeader from "@/components/VendorPageHeader";
import VendorPageTabs from "@/components/VendorPageTabs";

type VendorPageProps = {
  id: string;
};

const VendorPage = ({ id }: VendorPageProps) => {
  return (
    <>
      <VendorPageHeader id={id} />

      <div className="min-h-screen py-10">
        <div className="wrapper">
          <VendorDashboardStats />
          <VendorPageTabs />
        </div>
      </div>
    </>
  );
};

export default VendorPage;
