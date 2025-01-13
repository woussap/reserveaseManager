import React from "react";
import { Users, Clock, Calendar } from "lucide-react";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import Button from "../../common/Button";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const ReservationsOverview = ({
  reservations,
  loading,
  onViewDetails,
  onAccept,
  onReject,
}) => {
  if (loading) {
    return (
      <Card className="animate-pulse">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-100 rounded"></div>
          ))}
        </div>
      </Card>
    );
  }

  const groupedReservations = reservations.reduce((acc, reservation) => {
    const date = format(new Date(reservation.date), "yyyy-MM-dd");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(reservation);
    return acc;
  }, {});

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Réservations à venir</h3>
        <Button variant="outline" size="sm" icon={Calendar}>
          Voir le calendrier
        </Button>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedReservations).map(([date, dayReservations]) => (
          <div key={date}>
            <h4 className="font-medium mb-3">
              {format(new Date(date), "EEEE d MMMM", { locale: fr })}
            </h4>
            <div className="space-y-3">
              {dayReservations.map((reservation) => (
                <div key={reservation.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-3">
                        <h5 className="font-medium">
                          {reservation.customerName}
                        </h5>
                        <Badge
                          variant={
                            reservation.status === "confirmed"
                              ? "success"
                              : "warning"
                          }
                        >
                          {reservation.status === "confirmed"
                            ? "Confirmé"
                            : "En attente"}
                        </Badge>
                      </div>
                      <div className="mt-2 space-y-1 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>
                            {format(new Date(reservation.date), "HH:mm")}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{reservation.guests} personnes</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {reservation.status === "pending" && (
                        <>
                          <Button
                            variant="success"
                            size="sm"
                            onClick={() => onAccept(reservation.id)}
                          >
                            Accepter
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => onReject(reservation.id)}
                          >
                            Refuser
                          </Button>
                        </>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onViewDetails(reservation.id)}
                      >
                        Détails
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ReservationsOverview;
