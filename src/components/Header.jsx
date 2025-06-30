"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // 로그인/회원가입/랜딩 페이지에서는 Header 숨김
  if (pathname === "/signIn" || pathname === "/signup" || pathname === "/") {
    return null;
  }

  // 메뉴 항목
  const navItems = [
    { name: "커뮤니티", href: "/community" },
    { name: "마이페이지", href: "/mypage" },
  ];

  const authItems = [
    { name: "로그인", href: "/signIn" },
    { name: "회원가입", href: "/signup" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between px-4 xl:px-[200px] bg-white border-b border-gray-200 z-[999] shadow-sm">
      <div className="flex items-center max-w-[1200px] w-full mx-auto gap-10">
        <Link href="/">로고</Link>

        <nav className="flex-1">
          <ul className="flex gap-9 font-bold text-lg">
            {navItems.map((item) => {
              const isClick = pathname.startsWith(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`transition ${
                      isClick ? "text-blue-500" : "text-gray-600"
                    } hover:text-blue-500`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav>
          <ul className="flex items-center font-bold text-base">
            {authItems.map((item, index) => {
              const isClick = pathname === item.href;
              return (
                <li key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className={`transition ${
                      isClick ? "text-blue-500" : "text-gray-600"
                    } hover:text-blue-500`}
                  >
                    {item.name}
                  </Link>
                  {index === 0 && <span className="mx-3 text-gray-400">/</span>}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
