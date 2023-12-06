import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type RideCardProps = React.HTMLAttributes<HTMLDivElement> & {
  driverName: string;
  startLocation: string;
  endLocation: string;
  match: number;
  startTime: string;
  endTime: string;
  avatar: string;
};

export const RideCard = ({
  driverName,
  startLocation,
  endLocation,
  match,
  startTime,
  endTime,
  avatar,
}: RideCardProps) => {
  let ringColorStyle: string;

  if (match >= 0 && match <= 20) {
    ringColorStyle = "ring-red-500";
  } else if (match > 20 && match <= 40) {
    ringColorStyle = "ring-red-300";
  } else if (match > 40 && match <= 60) {
    ringColorStyle = "ring-orange-300";
  } else if (match > 60 && match <= 80) {
    ringColorStyle = "ring-green-300";
  } else {
    ringColorStyle = "ring-green-500";
  }

  return (
    <Card className="flex shadow-md self-stretch w-full ">
      <CardHeader className="flex flex-col gap-4 items-center">
        <Avatar className={`ring-2 ${ringColorStyle} ring-offset-2  w-16 h-16`}>
          <AvatarImage src={avatar} alt={driverName} />
          <AvatarFallback>{driverName}</AvatarFallback>
        </Avatar>
        <span className="text-xs leading-4 font-normal">{match}% match</span>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-start gap-4 self-stretch">
            <span className="text-sm leading-5 font-normal opacity-50"> Driver:</span>
            <span className="text-sm leading-5 font-normal"> {driverName} </span>
        </div>
        <div className="flex items-start gap-4 self-stretch">
            <span className="text-sm leading-5 font-normal opacity-50"> From:</span>
            <span className="text-sm leading-5 font-normal"> {startLocation}, {startTime} </span>
        </div>
        <div className="flex items-start gap-4 self-stretch">
            <span className="text-sm leading-5 font-normal opacity-50"> To:</span>
            <span className="text-sm leading-5 font-normal"> {endLocation}, {endTime} </span>
        </div>
      </CardContent>
    </Card>
  );
};
