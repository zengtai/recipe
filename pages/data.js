export default function Data({
  dataForHome,
  allCategories,
  allCategorySlugs,
  a,
  b,
  allSlugs,
}) {
  // console.log(`Data for Homepage`, dataForHome);
  // console.log(`All Categories`, allCategories);
  // console.log(`All Category Slugs`, allCategorySlugs);
  // console.log(`a`, a);
  // console.log(`b`, b);
  // console.log(`allSlugs`, allSlugs);
}

const page = 1; // 页数
const per_page = 20; // 每页条数
const EXCLUDED_CATEGORY_ID = [`19959`, `8883`, `26383`, `7942`, `19961`]; // 排除分类ID
const EXCLUDED_CATEGORY = EXCLUDED_CATEGORY_ID.join(`,`); // 排除分类项

export async function getStaticProps(params) {
  // 首页数据
  const dataForHome = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${page}&categories_exclude=${EXCLUDED_CATEGORY}&_fields=slug,title,id,_links,_embedded&_embed`
  ).then((res) => res.json());

  /* 分类页数据 */

  // 分类页路径
  //// 获取所有分类

  const allCategories = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/categories?&per_page=${per_page}&page=${page}&exclude=${EXCLUDED_CATEGORY}&_fields=slug,name,id,count`
  ).then((res) => res.json());

  //// 获取所有分类slug

  const allCategorySlugs = [];
  allCategories.map((item) => allCategorySlugs.push(item.slug));

  // 分类页数据
  //// 获取分类id

  async function getCategoryIdBySlug(slug) {
    const target = await fetch(
      `https://www.recipegirl.com/wp-json/wp/v2/categories?slug=${slug}&_fields=slug,name,id,count`
    ).then((res) => res.json());

    return target[0].id;
  }

  const a = await getCategoryIdBySlug("appetizers"); // 可行

  //// 基于分类id获取数据

  const b = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${page}&categories=${a}&_fields=slug,title,id,_links,_embedded&_embed`
  ).then((res) => res.json());

  //// 筛选数据

  let c = [];

  b.map((item) => {
    let tmp = {};
    tmp.title = item.title.rendered;
    tmp.id = item.id;
    tmp.slug = item.slug;
    tmp.featureImageUrl =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.square.source_url;

    c.push(tmp);
  });

  /* 循环获取全部数据 */

  let allSlugs = [];

  const total = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?categories_exclude=${EXCLUDED_CATEGORY}&_fields=slug&per_page=${per_page}`
  ).then((res) => ({
    amount: res.headers.get("x-wp-total"),
    totalPages: res.headers.get("x-wp-totalpages"),
  }));

  for (let page = 1; page <= total.totalPages; page++) {
    const tmp = await fetch(
      `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${page}&categories_exclude=${EXCLUDED_CATEGORY}&_fields=slug`
    ).then((res) => res.json());

    allSlugs = allSlugs.concat(tmp);
  }

  /* */






  /* 分页 */

  const totalPages = 100;
  const pageSizes = 20;
  const pages = Math.ceil(totalPages / pageSizes);

  const styleA = [1];

  if (pages <= 5) {
    return styleA;
  }

  return {
    props: {
      dataForHome,
      allCategories,
      allCategorySlugs,
      a,
      b: c,
      // allSlugs,
    },
  };
}
