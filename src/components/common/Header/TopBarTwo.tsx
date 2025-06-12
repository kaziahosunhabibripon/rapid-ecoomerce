"use client";

import { useState } from "react";
import { ChevronDown, Zap } from "react-feather";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function Header() {
  const [locale, setLocale] = useState<string>("en");
  const router = useRouter();
  const pathname = usePathname();

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}; path=/;`;
    setLocale(newLocale);
    const currentPath = pathname;
    const newPath = currentPath.replace(/^\/(en|ar)/, `/${newLocale}`);

    router.push(newPath);
    router.refresh();
  };
  return (
    <header>
      <div className="bg-brand-secondary text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={locale}
                onChange={handleChange}
                className="block w-full px-2 py-1 text-left"
              >
                <option value="en" className="text-red-500 rounded">
                  English
                </option>
                <option value="ar" className="text-red-500 rounded">
                  عربي
                </option>
              </select>
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1"
                onClick={() => setCurrencyOpen(!currencyOpen)}
              >
                <span>USD</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {currencyOpen && (
                <div className="absolute left-0 top-full z-10 mt-1 w-32 rounded bg-white py-1 text-black shadow-lg">
                  <button className="block w-full px-4 py-1 text-left hover:bg-gray-100">
                    USD
                  </button>
                  <button className="block w-full px-4 py-1 text-left hover:bg-gray-100">
                    EUR
                  </button>
                  <button className="block w-full px-4 py-1 text-left hover:bg-gray-100">
                    GBP
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-2 flex w-full flex-wrap justify-center space-x-4 sm:mt-0 sm:w-auto sm:justify-end">
            <Link
              href="/"
              className="flex items-center space-x-1 text-yellow-400"
            >
              <Zap className="h-4 w-4" />
              <span>Flash Sale</span>
            </Link>
            <Link href="/tracking" className="hover:text-gray-300">
              Track Order
            </Link>
            <Link href="/" className="hover:text-gray-300">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
