import Link from "next/link";

interface IBredcrumb {
  items?: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb = (props: IBredcrumb) => {
  return (
    <div className="w-full flex items-center gap-x-3 overflow-x-auto  ">
      {props.items?.map((item) => (
        <Link href={item.href}>
          <div className="hover:border-2 hover:rounded-3xl border-black text-center p-2 cursor-pointer text-xs font-semibold uppercase tracking-wide ">
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumb;
