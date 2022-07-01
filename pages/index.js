import Head from "next/head";

import Aside from "../components/Aside";
import List from "../components/list/List";
import Pagination from "../components/list/Pagination";
import { getDataForHome } from "../lib/api";

export default function Home({ data, aside, test }) {
  // console.log(`data`, data);
  // console.log(`categories`, categories);

  // console.log(test);

  return (
    <>
      <Head>
        <title>Recipe Guru</title>
        <meta name="description" content="Recipe for Every Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex gap-6">
        <aside className="basis-1/6">
          <Aside items={aside} />
        </aside>
        <div className="flex basis-5/6 flex-col bg-white">
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
  const data = await getDataForHome();
  // const categories = await getAllCategories();
  const mealType = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=1&_fields=id,name,slug&per_page=100`
  ).then((res) => res.json());
  const cookingMethod = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/set?parent=26251&per_page=100&_fields=id,name,slug&per_page=100`
  ).then((res) => res.json());
  const cuisine = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/set?parent=26252&per_page=100&_fields=id,name,slug&per_page=100`
  ).then((res) => res.json());
  const dietary = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/set?parent=26253&per_page=100&_fields=id,name,slug&per_page=100`
  ).then((res) => res.json());
  const holiday = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/set?parent=26254&per_page=100&_fields=id,name,slug&per_page=100`
  ).then((res) => res.json());
  const seasonal = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/set?parent=26255&per_page=100&_fields=id,name,slug&per_page=100`
  ).then((res) => res.json());
  const weightWatchers = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/set?parent=26257&per_page=100&_fields=id,name,slug&per_page=100`
  ).then((res) => res.json());
  // let test = await getTotal();

  return {
    props: {
      data,
      aside: {
        mealType,
        cookingMethod,
        cuisine,
        dietary,
        holiday,
        seasonal,
        weightWatchers,
      },
      // categories,
    },
  };
};
