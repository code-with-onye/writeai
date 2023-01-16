import Link from "next/link";
import { route } from "../../data";

const BottomNav = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700 w-full">
      <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center">
          <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            {route.map((data, i) => (
              <li key={i}>
                <Link
                  href={data}
                  className="text-gray-900 dark:text-white hover:underline uppercase text-xs font-semibold"
                  aria-current="page"
                >
                  {data}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
