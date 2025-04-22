
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Mail, Clock, Check } from "lucide-react";

interface Ticket {
  id: string;
  subject: string;
  status: "open" | "resolved";
  priority: "high" | "medium" | "low";
  date: string;
  requester: string;
}

const dummyTickets: Ticket[] = [
  {
    id: "HD-001",
    subject: "Cannot access Outlook email",
    status: "open",
    priority: "high",
    date: "2025-04-22",
    requester: "John Smith"
  },
  {
    id: "HD-002",
    subject: "Password reset required",
    status: "resolved",
    priority: "medium",
    date: "2025-04-21",
    requester: "Sarah Johnson"
  },
  {
    id: "HD-003",
    subject: "Calendar sync issues",
    status: "open",
    priority: "low",
    date: "2025-04-20",
    requester: "Mike Brown"
  },
  {
    id: "HD-004",
    subject: "Email attachment problems",
    status: "resolved",
    priority: "high",
    date: "2025-04-19",
    requester: "Lisa Davis"
  }
];

const HelpdeskTickets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "open" | "resolved">("all");

  const filteredTickets = dummyTickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Mail className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Helpdesk Tickets</h1>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search tickets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              statusFilter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("open")}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              statusFilter === "open"
                ? "bg-yellow-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Clock className="h-4 w-4" />
            Open
          </button>
          <button
            onClick={() => setStatusFilter("resolved")}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              statusFilter === "resolved"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Check className="h-4 w-4" />
            Resolved
          </button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticket ID</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Requester</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell className="font-medium">{ticket.id}</TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ticket.status === "open"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {ticket.status}
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ticket.priority === "high"
                      ? "bg-red-100 text-red-800"
                      : ticket.priority === "medium"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {ticket.priority}
                </span>
              </TableCell>
              <TableCell>{ticket.date}</TableCell>
              <TableCell>{ticket.requester}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HelpdeskTickets;
