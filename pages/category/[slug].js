import Head from "next/head";
import ListItem from "../../components/list/ListItem";
import Pagination from "../../components/list/Pagination";

export default function Category({ data, currentCategory }) {
  // console.log(`categories`, categories);

  // console.log(`data`, data);
  // console.log(`currentCategory`, currentCategory);
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
              dangerouslySetInnerHTML={{ __html: currentCategory[0].name }}
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
  const currentCategory = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/categories?slug=${ctx.params.slug}&_fields=slug,name,id`
  ).then((res) => res.json());

  async function getCategoryIdBySlug(slug) {
    const target = await fetch(
      `https://www.recipegirl.com/wp-json/wp/v2/categories?slug=${slug}&_fields=slug,name,id,count`
    ).then((res) => res.json());

    return target[0].id;
  }

  const categoryId = await getCategoryIdBySlug(ctx.params.slug); // 可行

  //// 基于分类id获取数据

  const childrenCategories = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=${categoryId}&per_page=100&_fields=id`
  ).then((res) => res.json());

  const children = [];

  if (childrenCategories.length !== 0) {
    childrenCategories.map((item) => children.push(item.id));
  }

  const sourceData = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${page}&categories=${categoryId}${children.join(
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
