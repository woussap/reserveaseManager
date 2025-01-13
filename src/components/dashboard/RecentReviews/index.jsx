import React from "react";
import { Star, MessageSquare } from "lucide-react";
import Card from "../../common/Card";
import Button from "../../common/Button";

const RecentReviews = ({ reviews, loading, onReply }) => {
  if (loading) {
    return (
      <Card className="animate-pulse">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-100 rounded"></div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Derniers avis</h3>
        <span className="text-emerald-600 text-sm font-medium">Voir tout</span>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{review.authorName}</span>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
                <div className="mt-2 text-sm text-gray-500">{review.date}</div>

                {review.reply && (
                  <div className="mt-3 pl-4 border-l-2 border-gray-200">
                    <div className="text-sm">
                      <span className="font-medium">Votre réponse:</span>
                      <p className="mt-1 text-gray-600">{review.reply}</p>
                    </div>
                  </div>
                )}
              </div>

              {!review.reply && (
                <Button
                  variant="outline"
                  size="sm"
                  icon={MessageSquare}
                  onClick={() => onReply(review.id)}
                >
                  Répondre
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentReviews;
