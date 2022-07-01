import Head from "next/head";

import ListItem from "../../components/list/ListItem";
import Pagination from "../../components/list/Pagination";

import { getTotal } from "../../lib/api";

export default function Category({ data, currentSet }) {
  // console.log(`categories`, categories);

  // console.log(`data`, data);
  // console.log(`currentSet`, currentSet);
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
            <h1
              className="mb-6 text-3xl font-bold text-[#439C9C]"
              dangerouslySetInnerHTML={{ __html: currentSet[0].name }}
            ></h1>
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

const page = 1; // 页数
const per_page = 20; // 每页条数
const EXCLUDED_CATEGORY_ID = [`19959`, `8883`, `26383`, `7942`, `19961`]; // 排除分类ID
const EXCLUDED_CATEGORY = EXCLUDED_CATEGORY_ID.join(`,`); // 排除分类项

export async function getStaticProps(ctx) {
  const currentSet = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/set?slug=${ctx.params.slug}&_fields=slug,name,id`
  ).then((res) => res.json());

  async function getSetIdBySlug(slug) {
    const target = await fetch(
      `https://www.recipegirl.com/wp-json/wp/v2/set?slug=${slug}&_fields=slug,name,id,count`
    ).then((res) => res.json());

    return target[0].id;
  }

  const setId = await getSetIdBySlug(ctx.params.slug); // 可行

  //// 基于分类id获取数据

  const childrenSets = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/set?parent=${setId}&per_page=100&_fields=id`
  ).then((res) => res.json());

  const children = [];

  if (childrenSets.length !== 0) {
    childrenSets.map((item) => children.push(item.id));
  }

  const sourceData = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${page}&set=${setId}${children.join(
      `,`
    )}&_fields=slug,title,id,_links,_embedded&_embed`
  ).then((res) => res.json());

  //// 筛选数据

  let data = [];

  sourceData.map((item) => {
    let tmp = {};
    tmp.title = item.title.rendered;
    tmp.id = item.id;
    tmp.slug = item.slug;
    tmp.featuredImageUrl =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.square.source_url;

    data.push(tmp);
  });

  return {
    props: {
      data,
      // categories,
      currentSet,
    },
  };
}

export async function getStaticPaths() {
  let allSet = [];
  const per_page = 100;
  const allDataCount = await getTotal(per_page, `set`);

  let pages = allDataCount.pages;

  for (let currPage = 1; currPage <= pages; currPage++) {
    let tmp = await fetch(
      `https://www.recipegirl.com/wp-json/wp/v2/set?&per_page=${per_page}&page=${currPage}&_fields=slug`
    ).then((res) => res.json());

    allSet = allSet.concat(tmp);
  }

  //获取所有分类slug;

  const allSetSlugs = [];
  allSet.map((item) => allSetSlugs.push(item.slug));

  // const categories = await getAllCategories();

  const paths = allSetSlugs.map((item) => ({
    params: { slug: item },
  }));

  return {
    paths,
    fallback: false,
  };
}
