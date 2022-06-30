import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ListItem from "../../components/list/ListItem";
import Pagination from "../../components/list/Pagination";
import { getAllCategories, getDataByCategory } from "../../lib/api";

export default function Category({ data, categories }) {
  console.log(`categories`, categories);
  return (
    <>
      <Head>
        <title>Recipe Guru</title>
        <meta name="description" content="Recipe for Every Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex gap-6">
        <div className="flex grow flex-col bg-white">
          <div className="grow">
            <h1 className="mb-6 text-3xl font-bold text-[#439C9C]">
              Category Title
            </h1>
            <ul className="grid grid-cols-6 gap-4">
              {data.map((item) => (
                <ListItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(ctx) {
  const categories = await getAllCategories();
  const data = await getDataByCategory(1, ctx.params.slug);

  return {
    props: {
      data,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getAllCategories();

  const paths = categories.map((item) => ({ params: { slug: item.slug } }));

  return {
    paths,
    fallback: false,
  };
}
