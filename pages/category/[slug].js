import Head from "next/head";
import ListItem from "../../components/list/ListItem";
import Pagination from "../../components/list/Pagination";
import { SITE_META, ADS_SLOT_ID } from "../../lib/constants";
import { EXCLUDED_CATEGORY, getCategoryIdBySlug } from "../../lib/api";
import Banner from "../../components/ads/Banner";

export default function Category({ data, sourceData, currentCategory }) {
  // console.log(`categories`, categories);
  // console.log(`sourceData`, sourceData[0]);
  // console.log(`data`, data);
  // console.log(`Count`, data.length);
  // console.log(`currentCategory`, currentCategory);
  return (
    <>
      <Head>
        <title>{`${currentCategory[0].name} | ${SITE_META.name}`}</title>
        <meta name="description" content="Recipe for Every Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        className={`banner rectangle banner_lg`}
        style={{ display: "block" }}
        slot={ADS_SLOT_ID.category}
        responsive="false"
      />
      <div className="container flex gap-6">
        <div className="mx-4 flex grow flex-col bg-white">
          <div className="grow">
            <h1
              className="mb-6 text-3xl font-bold text-[#439C9C]"
              dangerouslySetInnerHTML={{ __html: currentCategory[0].name }}
            ></h1>
            <ul className="grid grid-cols-2 gap-4 xl:grid-cols-6">
              {data.map((item) => (
                <ListItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
          {/* <Pagination /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(ctx) {
  const page = 1; // 页数
  const per_page = 30; // 每页条数
  const currentCategory = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/categories?slug=${ctx.params.slug}&_fields=slug,name,id`
  ).then((res) => res.json());

  const categoryId = await getCategoryIdBySlug(ctx.params.slug); // 可行

  //// 基于分类id获取数据

  const childrenCategories = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=${categoryId}&per_page=100&_fields=id`
  ).then((res) => res.json());

  let children = [];

  if (childrenCategories.length !== 0) {
    childrenCategories.map((item) => children.push(item.id));
  }

  const sourceData = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?&_embed&per_page=${per_page}&page=${page}&categories=${categoryId}${children.join(
      `,`
    )}&_fields=slug,title,id,_embedded,_links`
  ).then((res) => res.json());

  //// 筛选数据

  let data = [];

  sourceData.map((item) => {
    let tmp = {};
    tmp.title = item.title.rendered;
    tmp.id = item.id;
    tmp.slug = item.slug;
    let tmp1 = ""; //设置默认图片
    try {
      tmp1 =
        item._embedded["wp:featuredmedia"][0].media_details.sizes.square
          .source_url;
    } catch (e) {
      /*try {
        tmp1 =
          item._embedded["wp:featuredmedia"][0].media_details.sizes.full;
      } catch (e) {}*/
    }
    tmp.featuredImageUrl = tmp1;
    if (tmp1 != "") data.push(tmp);
  });

  return {
    props: {
      data,
      sourceData,
      // categories,
      currentCategory,
    },
  };
}

export async function getStaticPaths() {
  const allCategories = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/categories?&per_page=100&page=1&exclude=${EXCLUDED_CATEGORY}&_fields=slug`
  ).then((res) => res.json());

  //获取所有分类slug;

  const allCategorySlugs = [];
  allCategories.map((item) => allCategorySlugs.push(item.slug));

  // const categories = await getAllCategories();

  const paths = allCategorySlugs.map((item) => ({
    params: { slug: item },
  }));

  return {
    paths,
    fallback: false,
  };
}
