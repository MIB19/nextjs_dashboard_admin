"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import moment from 'moment'
import "moment/locale/id"
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
moment.locale('id')

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
      <html>
        <body>
          {pathname.includes('/auth') ? (
            <div className="dark:bg-gradient-to-r dark:from-[#382E8D] dark:to-[#1B1353] dark:text-bodydark">
              {loading ? (
                <Loader />
              ) : (
                <main>
                  <div className="w-full h-screen p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              )}
            </div>
          ) : (
            <div className="dark:bg-gradient-to-r dark:from-[#382E8D] dark:to-[#1B1353] dark:text-bodydark">
              {loading ? (
                <Loader />
              ) : (
                <div className="flex h-screen overflow-hidden">
                  {/* <!-- ===== Sidebar Start ===== --> */}
                  <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />
                  {/* <!-- ===== Sidebar End ===== --> */}

                  {/* <!-- ===== Content Area Start ===== --> */}
                  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        {children}
                      </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                  </div>
                  {/* <!-- ===== Content Area End ===== --> */}
                </div>
              )}
            </div>
          )}
        </body>
      </html>
  );
}
