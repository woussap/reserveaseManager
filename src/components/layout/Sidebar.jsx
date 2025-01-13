import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BarChart2,
  BookOpen,
  Store,
  Tag,
  MessageSquare,
  Settings,
  Menu,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { icon: BarChart2, label: "Vue d'ensemble", path: "/dashboard" },
    { icon: BookOpen, label: "Réservations", path: "/reservations" },
    { icon: Store, label: "Mon Restaurant", path: "/restaurant" },
    { icon: Tag, label: "Promotions", path: "/promotions" },
    { icon: MessageSquare, label: "Avis clients", path: "/reviews" },
    { icon: Settings, label: "Paramètres", path: "/settings" },
  ];

  return (
    <aside
      className={`${expanded ? "w-64" : "w-20"} bg-white shadow-lg transition-all duration-300`}
    >
      <div className="p-4 flex items-center justify-between">
        <h1
          className={`font-bold text-emerald-600 ${expanded ? "text-xl" : "hidden"}`}
        >
          ReservEase Manager
        </h1>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center px-4 py-3 space-x-3 ${
              location.pathname === item.path
                ? "bg-emerald-50 text-emerald-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-6 h-6" />
            {expanded && <span>{item.label}</span>}
          </button>
        ))}

        <button
          onClick={logout}
          className="w-full flex items-center px-4 py-3 space-x-3 text-red-600 hover:bg-red-50 mt-auto"
        >
          <LogOut className="w-6 h-6" />
          {expanded && <span>Déconnexion</span>}
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
