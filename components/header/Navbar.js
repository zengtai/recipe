import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    name: `Beverages`,
    slug: `beverages`,
    list: [
      {
        name: `Cocktails`,
        slug: `cocktails`,
      },
      {
        name: `Non-Alcoholic`,
        slug: `non-alcoholic`,
      },
    ],
  },
  {
    name: `Breakfast`,
    slug: `breakfast-brunch`,
    list: [
      { name: `Savory Breakfast`, slug: `savory-breakfast` },
      { name: `Sweet Breakfast`, slug: `sweet-breakfast` },
    ],
  },
  { name: `Breads`, slug: `breads` },
  { name: `Desserts`, slug: `desserts` },
  { name: `Dinners`, slug: `main-dishes` },
  { name: `Sides`, slug: `side-dish-recipes` },
];

export default function Navbar(params) {
  return (
    <header className=" bg-[#439C9C]">
      <nav className="mt-16 flex justify-center bg-[#48C0C0]">
        <div className="container relative flex gap-8 py-4 text-white">
          <div className="absolute top-1/2 left-0 h-36 w-36 -translate-y-1/2 overflow-hidden rounded-full border-8 border-[#48C0C0] drop-shadow">
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
          <ul className="ml-48 flex gap-8">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link href={`/category/${item.slug}`}>
                  <a>{item.name}</a>
                </Link>
                <ul className="hidden">
                  {item.list &&
                    item.list.map((subItem) => (
                      <li key={subItem.slug}>
                        <Link href={`/category/${subItem.slug}`}>
                          <a>{subItem.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
