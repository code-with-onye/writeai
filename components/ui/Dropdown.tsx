import clsx from "clsx";
import { useState } from "react";

interface IDropdownContent {
  content?: string;
  onSelect?: () => void;
}

interface IDropdown {
  contentData: string[];
  content?: string;
  className?: string;
}

const DropdownContent = (props: IDropdownContent) => {
  return (
    <div
      className="w-full hover:bg-slate-600  hover:text-white text-black px-2 py-2 cursor-pointer "
      onClick={props.onSelect}
    >
      <p> {props.content}</p>
    </div>
  );
};

const Dropdown = (props: IDropdown) => {
  const [toogle, setToogle] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>("USA");

  return (
    <div className={clsx(["w-full"])}>
      <label htmlFor="drodown" className="text-xs font-semibold capitalize">
        {props.content}
      </label>
      <button
        aria-haspopup="true"
        aria-controls="menu"
        type="button"
        className="flex items-center justify-between bg-slate-200 p-2 w-full rounded-3xl"
        onClick={() => (toogle ? setToogle(false) : setToogle(true))}
      >
        <div>
          <span>{selectCountry}</span>
        </div>
        <svg viewBox="0 0 24 24" fill="#000" width="1.5rem" height="1.5rem">
          <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path>
          <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"></path>
        </svg>
      </button>
      <div
        className={clsx([
          "w-full  bg-slate-200 rounded-md absolute z-10 ",
          props.className,
        ])}
      >
        {toogle &&
          props.contentData?.map((data) => (
            <DropdownContent
              content={data}
              onSelect={() => {
                setToogle(false);
                setSelectCountry(data);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
