
import { LayoutDashboard, Mail, Smartphone, Check, Clock, AlertCircle, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { OutlookMetrics } from "@/components/OutlookMetrics";
import { GeraWorldMetrics } from "@/components/GeraWorldMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <LayoutDashboard className="h-6 w-6 text-purple-600" />
          <h1 className="text-2xl font-bold text-gray-900">Helpdesk Dashboard</h1>
        </div>
        <p className="text-gray-600">Track helpdesk and mobile application metrics</p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Outlook Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Outlook Helpdesk</h2>
          </div>
          <OutlookMetrics />
        </section>

        {/* Gera World Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Smartphone className="h-5 w-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-800">Gera World Mobile App</h2>
          </div>
          <GeraWorldMetrics />
        </section>
      </div>
    </div>
  );
};

export default Index;
