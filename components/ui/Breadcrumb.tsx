import React, { useRef, useState, useEffect } from "react";

interface Props {
  items: string[];
  className?: string;
}

const Breadcrumb: React.FC<Props> = ({ items, className }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const breadcrumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollPos = () => {
      setScrollPos(breadcrumbRef.current!.scrollLeft);
    };
    breadcrumbRef.current!.addEventListener("scroll", updateScrollPos);
    return () => {
      breadcrumbRef.current!.removeEventListener("scroll", updateScrollPos);
    };
  }, []);

  const handleScrollLeft = () => {
    breadcrumbRef.current!.scrollBy({ left: -100, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    breadcrumbRef.current!.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex overflow-x-scroll w-full px-6 py-2 gap-x-2 bg-white rounded-lg shadow-sm"
        ref={breadcrumbRef}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="text-sm font-medium leading-5 text-gray-500 truncate"
          >
            {item}
          </span>
        ))}
      </div>
      <button
        className="absolute left-0 top-0 h-full w-12 p-6 text-3xl font-medium leading-tight text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={handleScrollLeft}
        disabled={scrollPos === 0}
      >
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10.828l4.242-4.243L12 4.343z" />
        </svg>
      </button>
      <button
        className="absolute right-0 top-0 h-full w-12 p-6 text-3xl font-medium leading-tight text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={handleScrollRight}
        disabled={
          scrollPos ===
          breadcrumbRef.current!?.scrollWidth -
            breadcrumbRef.current!?.clientWidth
        }
      >
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l5.657-5.657z" />
        </svg>
      </button>
    </div>
  );
};

export default Breadcrumb;
