import Image from "next/image";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatPeso } from "@/lib/format";

export default function ParkingCard({
  name,
  image,
  price,
  distance,
  rating,
  reviews,
}) {
  return (
    <Card className="flex-shrink-0 w-[280px] overflow-hidden">
      <div className="relative h-[160px]">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute bottom-2 left-2 bg-black/75 text-white px-2 py-1 rounded">
          {formatPeso(price)}/hr
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{distance} mi away</span>
          <span>•</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
            <span className="ml-1">({reviews})</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
