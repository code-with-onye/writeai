import Link from "next/link";
import React from "react";
import { Card, Avatar } from "../ui";

interface ITemplateCardProps {
  prompt?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function TemplateCard(props: ITemplateCardProps) {
  return (
    <Card className="h-40">
      <Link href="/" className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-3 mt-2 border-b-2 border-black pb-3">
          <Avatar />
          <h3 className="text-xs lg:text-sm  font-semibold tracking-wide">
            {props.prompt}
            {/* Audience */}
          </h3>
        </div>
        <p className="text-sm tracking-wide leading-5">
          {props.description}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing */}
        </p>
      </Link>
    </Card>
  );
}
