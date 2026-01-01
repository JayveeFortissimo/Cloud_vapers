import { Input } from "@/components/ui/Input";
import { Bell, Settings, Search, Filter } from "lucide-react";
import SwitchCustomizationDemo from "@/components/ui/Night";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      <header className="bg-white min-h-[5rem] border p-3 flex items-center justify-between gap-4">
        <div>
          <p className="font-bold text-xl">Dashboard</p>
          <p className="text-stone-400 text-sm">
            Welcome back, Jayvee! Here's what's happening today.
          </p>
        </div>

        <div className="w-full max-w-[30rem] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />

          <Input
            className="pl-10 pr-10 border rounded-2xl bg-stone-50/50"
            placeholder="Search anything..."
          />

          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4 cursor-pointer" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer" />
            <Settings className="cursor-pointer" />
            <SwitchCustomizationDemo />
          </div>
          {/* Profile */}
          <div></div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
