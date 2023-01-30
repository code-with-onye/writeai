import clsx from "clsx";
import { Avatar } from "../";

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}
export default function Card(props: ICardProps) {
  return (
    <div
      className={clsx([
        "px-4 py-2 shadow-md rounded-md bg-gray-300 ",
        props.className,
      ])}
    >
      {props.children}
    </div>
  );
}
