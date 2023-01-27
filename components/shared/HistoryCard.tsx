import Link from "next/link";
import React from "react";
import { Card, Avatar } from "../ui";

const HistoryCard = () => {
  return (
    <Card>
      <Link href="/" className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-3">
          <Avatar />
          <h3 className="text-xs lg:text-sm  font-semibold tracking-wide">
            {/* {props.prompt} */}
            Audience
          </h3>
        </div>
        <p className="text-xs tracking-wide leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </Link>
    </Card>
  );
};

export default HistoryCard;
