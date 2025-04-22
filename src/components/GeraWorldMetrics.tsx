
import { 
  Clock, Check, Loader, AlertCircle, Users 
} from "lucide-react";
import { Card } from "@/components/ui/card";

export const GeraWorldMetrics = () => {
  // Dummy data
  const metrics = [
    {
      title: "Open",
      value: "42",
      icon: Clock,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Closed",
      value: "156",
      icon: Check,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Work in Progress",
      value: "28",
      icon: Loader,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      title: "Work Completed",
      value: "189",
      icon: Check,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Need Attention",
      value: "15",
      icon: AlertCircle,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Pending Customer Actions",
      value: "31",
      icon: Users,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center gap-4">
            <div className={`${metric.bg} p-3 rounded-lg`}>
              <metric.icon className={`h-6 w-6 ${metric.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-600">{metric.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
