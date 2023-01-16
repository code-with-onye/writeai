interface IAvatarProps {
  size?: "sm" | "lg";
  variant?: "round";
}

const Avatar = (props: IAvatarProps) => {
  return (
    <div className="rounded-full bg-black w-10 h-10 ring-4 ring-teal-600 drop-shadow-md flex items-center justify-center text-slate-50">
      T
    </div>
  );
};

export default Avatar;
