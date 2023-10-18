import Navbar from "@/components/molecules/navbar";
import Sidebar from "@/components/molecules/sidebar";

export default function DashboardLayout({children}){
    return(
        <section className="relative w-full h-[100%] overflow-hidden">
        <div className="flex flex-row relative w-[100%] mb-[30%] md:mb-0">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
            <div className="flex flex-col w-[100%]">
              <Navbar />
              <div>
              {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}