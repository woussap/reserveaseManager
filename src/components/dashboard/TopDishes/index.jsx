import React from "react";
import Card from "../../common/Card";

const TopDishes = ({ dishes, loading }) => {
  if (loading) {
    return (
      <Card className="animate-pulse">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded"></div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="text-lg font-medium mb-6">Plats les plus commandés</h3>
      <div className="space-y-4">
        {dishes.map((dish) => (
          <div key={dish.id} className="flex items-center justify-between py-2">
            <div>
              <h4 className="font-medium">{dish.name}</h4>
              <p className="text-sm text-gray-500">{dish.category}</p>
            </div>
            <div className="text-right">
              <div className="font-medium">{dish.orders} commandes</div>
              <div className="text-sm text-green-600">+{dish.growth}%</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopDishes;
