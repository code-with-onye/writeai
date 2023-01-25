import { Avatar } from "./Index";

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}
export default function Card(props: ICardProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-gray-300   ">
      {props.children}
    </div>
  );
}
