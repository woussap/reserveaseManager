// src/components/common/Toast.jsx
import React, { createContext, useContext, useState } from "react";
import { X } from "lucide-react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-0 right-0 p-6 space-y-4 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center justify-between p-4 rounded-lg border shadow-lg ${
              toast.type === "success"
                ? "bg-green-50 border-green-100"
                : toast.type === "error"
                  ? "bg-red-50 border-red-100"
                  : "bg-blue-50 border-blue-100"
            }`}
          >
            <p
              className={
                toast.type === "success"
                  ? "text-green-800"
                  : toast.type === "error"
                    ? "text-red-800"
                    : "text-blue-800"
              }
            >
              {toast.message}
            </p>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
