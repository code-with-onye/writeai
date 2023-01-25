import clsx from "clsx";

interface IButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "fill";
  size?: "sm" | "lg" | "md";
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className={clsx(
        props.variant === "outline" && "",
        props.variant === "fill" &&
          " bg-black text-gray-100 hover:bg-black/80 focus:ring-4 ring-gray-800",
        props.size === "lg" && "px-4 py-2",
        "rounded-3xl w-full flex items-center justify-center text-sm uppercase "
      )}
    >
      {props.children}
      <svg viewBox="0 0 24 24" fill="#fff" width="1rem" height="1rem">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg>
    </button>
  );
};

export default Button;
