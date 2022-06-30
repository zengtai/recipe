import Image from "next/image";
import Link from "next/link"

export default function ListItem(params) {
  return (
    <li className="border-4 border-[#48C0C0]">
      <Link href={`/recipe/1`}>
        <a>
        <div className="relative">
          <Image
            src={`https://www.recipegirl.com/wp-content/uploads/2008/08/Best-Brownies-Recipe-1-300x300.jpeg`}
            alt="Title"
            width={200}
            height={200}
            layout={`responsive`}
          />
        </div>
        <h2 className="p-2 font-bold text-[#439C9C]">Title</h2>
        </a>
      </Link>
    </li>
  );
}
