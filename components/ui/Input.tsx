import React from "react";

interface IInputProps {
  placeholder: string;
  type: string;
  disabled?: boolean;
  describedby?: string;
  content?: string;
}

const Input = (props: IInputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={props.content}
        className="text-xs font-semibold capitalize"
      >
        {props.content}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        aria-describedby={props.describedby}
        aria-atomic
        aria-autocomplete="none"
        className="w-full rounded-lg "
      />
    </div>
  );
};

export default Input;
