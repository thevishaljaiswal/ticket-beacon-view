
import { Ticket, Clock, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const OutlookMetrics = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      title: "Total Tickets",
      value: "246",
      icon: Ticket,
      color: "text-blue-600",
      bg: "bg-blue-50",
      filter: "all"
    },
    {
      title: "Open Tickets",
      value: "38",
      icon: Clock,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      filter: "open"
    },
    {
      title: "Resolved Tickets",
      value: "208",
      icon: Check,
      color: "text-green-600",
      bg: "bg-green-50",
      filter: "resolved"
    },
  ];

  const handleCardClick = (filter: string) => {
    navigate(`/helpdesk?status=${filter}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <Card 
          key={metric.title} 
          className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleCardClick(metric.filter)}
        >
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
