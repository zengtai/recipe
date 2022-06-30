import Head from "next/head";
import Image from "next/image";
import Aside from "../components/Aside";
import List from "../components/list/List";
import Pagination from "../components/list/Pagination";
import { getAllCategories, getDataForHome } from "../lib/api";

export default function Home({ data, categories }) {
  // console.log(`data`, data);
  // console.log(`categories`, categories);

  return (
    <>
      <Head>
        <title>Recipe Guru</title>
        <meta name="description" content="Recipe for Every Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex gap-6">
        <Aside />
        <div className="flex grow flex-col bg-white">
          <div className="grow">
            <List items={data} />
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await getDataForHome(1);
  // const categories = await getAllCategories();

  return {
    props: {
      data,
      // categories,
    },
  };
};
