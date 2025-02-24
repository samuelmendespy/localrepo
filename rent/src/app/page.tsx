import Link from "next/link";
import Icon from "@mdi/react";
import {
  mdiAccountGroup,
  mdiCar,
  mdiCalendar,
  mdiFileDocumentMultipleOutline,
  mdiBookOpenOutline,
  mdiWeb,
} from "@mdi/js";
import Image from "next/image";

export default function Home() {
  const items = [
    {
      icon: <Icon path={mdiCar} size={3} />,
      label: "Manage Cars",
      href: "/manage/car",
    },
    {
      icon: <Icon path={mdiAccountGroup} size={3} />,
      label: "Manage Renters",
      href: "/manage/renter",
    },
    {
      icon: <Icon path={mdiCalendar} size={3} />,
      label: "Manage Rents",
      href: "/manage/rental",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/flam.svg"
          alt="FLAM title"
          width={180}
          height={38}
          priority
        />
        <ol className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <div className="flex flex-col items-center w-40 bg-orange-600 rounded-2xl shadow-lg p-2">
                  <div className="mb-2">{item.icon}</div>
                  <span>{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/logo.svg"
              alt="FLAM logomark"
              width={20}
              height={20}
            />
            Menu Fun1
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Menu Fun2
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Menu Fun3
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiBookOpenOutline} size={1} />
          Documentation
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiFileDocumentMultipleOutline} size={0.7} />
          Licenses
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://samuelmendespy.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiWeb} size={1} />
          System Info (external link) →
        </a>
      </footer>
    </div>
  );
}
