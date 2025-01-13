// src/pages/DashboardPage/index.jsx
import React, { useState, useEffect } from "react";
import { BookOpen, Users, DollarSign } from "lucide-react"; // Removed Utensils
import StatCard from "../../components/dashboard/StatCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import ReservationsOverview from "../../components/dashboard/ReservationsOverview";
import TopDishes from "../../components/dashboard/TopDishes";
import RecentReviews from "../../components/dashboard/RecentReviews";
import { useToast } from "../../components/common/Toast";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  // Sample data - Replace with actual API calls
  const dashboardData = {
    statistics: {
      reservations: {
        value: "42",
        trend: "+12",
        loading: false,
      },
      guests: {
        value: "128",
        trend: "+8",
        loading: false,
      },
      revenue: {
        value: "4,850 MAD",
        trend: "+15",
        loading: false,
      },
      averageTicket: {
        value: "37.89 MAD",
        trend: "+5",
        loading: false,
      },
    },
    revenueData: [
      { date: "01/03", revenue: 3200, target: 3000 },
      { date: "02/03", revenue: 4100, target: 3000 },
      { date: "03/03", revenue: 3800, target: 3000 },
      { date: "04/03", revenue: 4800, target: 3000 },
      { date: "05/03", revenue: 5200, target: 3000 },
      { date: "06/03", revenue: 6100, target: 3000 },
      { date: "07/03", revenue: 4900, target: 3000 },
    ],
    reservations: [
      {
        id: 1,
        customerName: "Ahmed Alami",
        date: "2024-03-07T19:00:00",
        guests: 4,
        status: "confirmed",
        phone: "+212 6 61 23 45 67",
        specialRequests: "Vue sur jardin si possible",
      },
      {
        id: 2,
        customerName: "Sarah Thompson",
        date: "2024-03-07T20:30:00",
        guests: 2,
        status: "pending",
        phone: "+212 6 62 34 56 78",
      },
    ],
    topDishes: [
      {
        id: 1,
        name: "Tajine d'agneau",
        category: "Plats principaux",
        orders: 128,
        growth: 15,
      },
      {
        id: 2,
        name: "Couscous Royal",
        category: "Plats principaux",
        orders: 96,
        growth: 8,
      },
      {
        id: 3,
        name: "Pastilla au poulet",
        category: "Entrées",
        orders: 85,
        growth: 12,
      },
      {
        id: 4,
        name: "Briouates aux fruits de mer",
        category: "Entrées",
        orders: 72,
        growth: 5,
      },
      {
        id: 5,
        name: "Thé à la menthe",
        category: "Boissons",
        orders: 245,
        growth: 18,
      },
    ],
    reviews: [
      {
        id: 1,
        authorName: "Karim Benjelloun",
        rating: 5,
        comment:
          "Une expérience culinaire exceptionnelle ! Le service était impeccable et le tajine était délicieux.",
        date: "Il y a 2 heures",
        reply: null,
      },
      {
        id: 2,
        authorName: "Marie Dubois",
        rating: 4,
        comment:
          "Très bon repas, ambiance authentique. Légère attente au début mais ça en valait la peine.",
        date: "Il y a 1 jour",
        reply:
          "Merci pour votre retour Marie ! Nous sommes désolés pour l'attente et heureux que vous ayez apprécié votre repas.",
      },
    ],
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const handleReservationAccept = (id) => {
    addToast("Réservation confirmée avec succès", "success");
  };

  const handleReservationReject = (id) => {
    addToast("Réservation refusée", "info");
  };

  const handleReviewReply = (id) => {
    addToast("Réponse envoyée avec succès", "success");
  };

  const handlePeriodChange = (period) => {
    console.log("Period changed:", period);
    // Implement period change logic
  };

  return (
    <div className="p-6 space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Réservations du jour"
          value={dashboardData.statistics.reservations.value}
          trend={dashboardData.statistics.reservations.trend}
          icon={BookOpen}
          loading={loading}
        />
        <StatCard
          title="Couverts"
          value={dashboardData.statistics.guests.value}
          trend={dashboardData.statistics.guests.trend}
          icon={Users}
          loading={loading}
        />
        <StatCard
          title="Chiffre d'affaires"
          value={dashboardData.statistics.revenue.value}
          trend={dashboardData.statistics.revenue.trend}
          icon={DollarSign}
          loading={loading}
        />
        <StatCard
          title="Ticket moyen"
          value={dashboardData.statistics.averageTicket.value}
          trend={dashboardData.statistics.averageTicket.trend}
          icon={DollarSign}
          loading={loading}
        />
      </div>

      {/* Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart
            data={dashboardData.revenueData}
            loading={loading}
            onPeriodChange={handlePeriodChange}
          />
        </div>
        <div>
          <TopDishes dishes={dashboardData.topDishes} loading={loading} />
        </div>
      </div>

      {/* Reservations and Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReservationsOverview
          reservations={dashboardData.reservations}
          loading={loading}
          onAccept={handleReservationAccept}
          onReject={handleReservationReject}
          onViewDetails={(id) => console.log("View details:", id)}
        />
        <RecentReviews
          reviews={dashboardData.reviews}
          loading={loading}
          onReply={handleReviewReply}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
