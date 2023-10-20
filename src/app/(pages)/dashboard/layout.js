import Navbar from "@/components/molecules/navbar";
import Sidebar from "@/components/molecules/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row relative w-[100%] h-[100vh] overflow-hidden">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-[100%] overflow-y-auto min-h-min max-h-max">
        <div className="flex flex-col w-[100%] top-0 left-0 bg-white z-[10] sticky">
          <Navbar />
          <div className="p-4 w-[100%] mt-[20%] md:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
