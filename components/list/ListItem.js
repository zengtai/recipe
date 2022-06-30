import Image from "next/image";
import Link from "next/link";

export default function ListItem({ item }) {
  return (
    <li className="border-4 border-[#48C0C0]">
      <Link href={`/recipe/${item.slug}`}>
        <a>
          <div className="relative">
            <Image
              src={item.featuredImageUrl}
              className="bg-slate-50"
              alt="Title"
              width={200}
              height={200}
              layout={`responsive`}
            />
          </div>
          <h2 className="p-2 font-bold text-[#439C9C]">{item.title}</h2>
        </a>
      </Link>
    </li>
  );
}
