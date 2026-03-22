import AdminDashboardStats from "@/components/AdminDashboardStats";
import AdminPageHeader from "@/components/AdminPageHeader";
import AdminPageTabs from "@/components/AdminPageTabs";
import LogOut from "./LogOut";

type AdminPageProps = {
  id: string;
};

const AdminPage = ({ id }: AdminPageProps) => {
  return (
    <>
      <AdminPageHeader id={id} />

      <div className="min-h-screen py-10">
        <div className="wrapper">
          <AdminDashboardStats />
          <AdminPageTabs />
          <LogOut />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
