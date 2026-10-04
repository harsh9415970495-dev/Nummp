import { AppSidebar } from "@/components/AppSidebar";
import { TopNavbar } from "@/components/TopNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-brand-secondary overflow-hidden text-slate-300">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-transparent">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-950 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 relative">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
