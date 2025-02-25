import Link from "next/link";
import Icon from "@mdi/react";
import {
  mdiAccountGroup,
  mdiCar,
  mdiCalendar,
  mdiFileDocumentMultipleOutline,
  mdiBookOpenOutline,
  mdiWeb,
  mdiTruck,
} from "@mdi/js";
import Image from "next/image";

export default function Home() {
  const items = [
    {
      icon: <Icon path={mdiTruck} size={3} />,
      label: "Manage Trucks",
      href: "/manage/car",
    },
    {
      icon: <Icon path={mdiAccountGroup} size={3} />,
      label: "Manage Drivers",
      href: "/manage/renter",
    },
    {
      icon: <Icon path={mdiCalendar} size={3} />,
      label: "Assignments",
      href: "/manage/rental",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col">
          <Image
            className="white:invert"
            src="/logo.svg"
            alt="A title"
            width={40}
            height={40}
            priority
          />
          <p className="italic">
            Assigner - A simple solution to allocate all drivers
          </p>
        </div>
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
