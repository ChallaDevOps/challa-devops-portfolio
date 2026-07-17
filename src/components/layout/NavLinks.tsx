"use client";

import navigation from "@/constants/navigation";

export default function NavLinks() {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="
            text-slate-300
            hover:text-sky-400
            transition-all
            duration-300
            font-medium
          "
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}
