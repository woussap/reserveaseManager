// src/context/RestaurantContext.jsx
import React, { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState({
    id: 1,
    name: "La Table Atlas",
    address: "Médina, Marrakech",
    phone: "+212 5 24 00 00 00",
    cuisine: "Marocaine Traditionnelle",
    capacity: 80,
    openingHours: {
      monday: { open: "12:00", close: "23:00" },
      tuesday: { open: "12:00", close: "23:00" },
      wednesday: { open: "12:00", close: "23:00" },
      thursday: { open: "12:00", close: "23:00" },
      friday: { open: "12:00", close: "23:00" },
      saturday: { open: "12:00", close: "23:00" },
      sunday: { open: "12:00", close: "23:00" },
    },
  });

  const updateRestaurant = (data) => {
    setRestaurant((prev) => ({ ...prev, ...data }));
  };

  return (
    <RestaurantContext.Provider value={{ restaurant, updateRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("useRestaurant must be used within a RestaurantProvider");
  }
  return context;
};
