"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/signin", label: "Signin" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-12 items-center justify-center px-1 shadow duration-100 sm:px-8  ">
      <div className="flex w-full items-center justify-between">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative ${
              pathname === item.href
                ? `pointer-events-none`
                : `pointer-events-auto`
            } cursor-pointer rounded px-4 py-1 font-light duration-500 hover:bg-slate-700 hover:text-white active:scale-90`}
          >
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
