import { Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ParkingListItem({
  name,
  distance,
  available,
  rating,
  reviews,
  price,
}) {
  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{distance} mi away</span>
            <span>•</span>
            <span>{available} available</span>
          </div>
          <div className="flex items-center mt-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm ml-1">{rating}</span>
            <span className="text-sm text-muted-foreground ml-1">
              ({reviews})
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold">${price}/hr</div>
          <Button variant="ghost" size="icon" className="mt-2">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
