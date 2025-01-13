import React from "react";
import { Bell, Settings, LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useRestaurant } from "../../context/RestaurantContext";

const Header = () => {
  const { logout } = useAuth();
  const { restaurant } = useRestaurant();

  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Tableau de bord</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="font-semibold text-emerald-600">
                {restaurant.name.charAt(0)}
              </span>
            </div>
            <span className="font-medium">{restaurant.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
