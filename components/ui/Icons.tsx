import { BiBold } from "react-icons/bi";
import { GoItalic, GoListUnordered, GoListOrdered } from "react-icons/go";
import { BiHeading } from "react-icons/bi";

const IBold = () => (
  <>
    <BiBold />
  </>
);

const IItalic = () => (
  <>
    <GoItalic />
  </>
);

const IHeading = () => (
  <>
    <BiHeading />
  </>
);

const ISubHeading = () => (
  <div className="flex">
    <BiHeading className="text-lg" />
    <span className="text-xs">2</span>
  </div>
);

const IUnordered = () => (
  <div className="flex">
    <GoListUnordered />
  </div>
);

const IOrdered = () => (
  <div className="flex">
    <GoListOrdered />
  </div>
);

export { IBold, IItalic, IHeading, ISubHeading, IUnordered, IOrdered };
