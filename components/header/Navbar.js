import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: `Breads`, slug: `breads` },
  { name: `Desserts`, slug: `desserts` },
  { name: `Dinners`, slug: `main-dishes` },
  { name: `Sides`, slug: `side-dish-recipes-recipes` },
];

export default function Navbar(params) {
  return (
    <header className=" bg-[#439C9C]">
      <nav className="mt-20 flex justify-center bg-[#48C0C0] xl:mt-14">
        <div className="container relative flex justify-center gap-8 py-4 text-white xl:justify-start">
          <div className="absolute -top-8 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-[#48C0C0] drop-shadow xl:top-1/2 xl:left-0 xl:h-[140px] xl:w-[140px] xl:translate-x-0 xl:border-8">
            <Link href={`/`}>
              <a>
                <Image
                  src={`/logo.png`}
                  alt={``}
                  width={140}
                  height={140}
                  layout={`responsive`}
                />
              </a>
            </Link>
          </div>
          <ul className="flex gap-8 xl:ml-48">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link href={`/category/${item.slug}`}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
