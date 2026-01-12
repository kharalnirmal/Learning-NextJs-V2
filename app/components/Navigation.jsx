"use client";

import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold text-white text-2xl">MyApp</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4 ml-10">
                <a
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === "/"
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-blue-700"
                  }`}
                >
                  Home
                </a>
                <a
                  href="/posts/7"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === "/posts/7"
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-blue-700"
                  }`}
                >
                  hey
                </a>
                <a
                  href="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === "/about"
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-blue-700"
                  }`}
                >
                  about
                </a>
                <a
                  href="/contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === "/contact"
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-blue-700"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
