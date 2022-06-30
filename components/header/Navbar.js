import Link from "next/link"

export default function Navbar(params) {
  return (
    <header className=" bg-[#439C9C]">
      <nav className="mt-10 flex justify-center bg-[#48C0C0]">
        <div className="container flex gap-8 py-4 text-white">
          <Link href={`/`}>Recipe Guru</Link>
          <ul className="flex gap-8">
            <li>
              <Link href={`/category/1`}>Category 1</Link>
            </li>
            <li>
              <Link href={`/category/2`}>Category 2</Link>
            </li>
            <li>
              <Link href={`/category/3`}>Category 3</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
