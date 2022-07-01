import { useEffect } from "react";

export default function Data({
  dataForHome,
  allCategories,
  allCategorySlugs,
  a,
  b,
  allSlugs,
  content,
}) {
  // console.log(`Data for Homepage`, dataForHome);
  // console.log(`All Categories`, allCategories);
  // console.log(`All Category Slugs`, allCategorySlugs);
  // console.log(`a`, a);
  // console.log(`b`, b);
  // console.log(`allSlugs`, allSlugs);
  console.log(`length`, JSON.parse(content).length);

  useEffect(() => {
    async function getData(params) {
      const EXCLUDED_CATEGORY_ID = [7942, 8883, 19959, 19961, 26383];
      const EXCLUDED_CATEGORY = EXCLUDED_CATEGORY_ID.join(`,`);

      let allRecipes = [];

      const total = await fetch(
        `https://www.recipegirl.com/wp-json/wp/v2/posts?per_page=20&page=1&_fields=id&categories_exclude=${EXCLUDED_CATEGORY}&orderby=id`
      ).then((res) => res.headers.get(`x-wp-total`));

      const totalPages = await fetch(
        `https://www.recipegirl.com/wp-json/wp/v2/posts?per_page=20&page=1&_fields=id&categories_exclude=${EXCLUDED_CATEGORY}&orderby=id`
      ).then((res) => res.headers.get(`x-wp-totalpages`));

      for (let page = 1; page <= totalPages; page++) {
        const data = await fetch(
          `https://www.recipegirl.com/wp-json/wp/v2/posts?per_page=20&page=${page}&_fields=id,title,content,slug,_links,_embedded&_embed&categories_exclude=${EXCLUDED_CATEGORY}&orderby=id`
        ).then((res) => res.json());

        allRecipes = allRecipes.concat(data);
        typeof window !== "undefined" &&
          localStorage.setItem(`recipesData`, {
            data: allRecipes,
            time: new Date(),
          });
      }
    }
  });

  return (
    <div
      className="recipe-content container mx-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export async function getStaticProps(params) {
  // const page = 1; // 页数
  // const per_page = 20; // 每页条数
  // const EXCLUDED_CATEGORY_ID = [`19959`, `8883`, `26383`, `7942`, `19961`]; // 排除分类ID
  // const EXCLUDED_CATEGORY = EXCLUDED_CATEGORY_ID.join(`,`); // 排除分类项
  // 首页数据
  // const dataForHome = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${page}&categories_exclude=${EXCLUDED_CATEGORY}&_fields=slug,title,id,_links,_embedded&_embed`
  // ).then((res) => res.json());

  /* 分类页数据 */

  // 分类页路径
  //// 获取所有分类

  // const allCategories = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?&per_page=${per_page}&page=${page}&exclude=${EXCLUDED_CATEGORY}&_fields=slug,name,id,count`
  // ).then((res) => res.json());

  //// 获取所有分类slug

  // const allCategorySlugs = [];
  // allCategories.map((item) => allCategorySlugs.push(item.slug));

  // 分类页数据
  //// 获取分类id

  // async function getCategoryIdBySlug(slug) {
  //   const target = await fetch(
  //     `https://www.recipegirl.com/wp-json/wp/v2/categories?slug=${slug}&_fields=slug,name,id,count`
  //   ).then((res) => res.json());

  //   return target[0].id;
  // }

  // const a = await getCategoryIdBySlug("appetizers"); // 可行

  //// 基于分类id获取数据

  // const b = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${page}&categories=${a}&_fields=slug,title,id,_links,_embedded&_embed`
  // ).then((res) => res.json());

  //// 筛选数据

  // let c = [];

  // b.map((item) => {
  //   let tmp = {};
  //   tmp.title = item.title.rendered;
  //   tmp.id = item.id;
  //   tmp.slug = item.slug;
  //   tmp.featureImageUrl =
  //     item._embedded[
  //       "wp:featuredmedia"
  //     ][0].media_details.sizes.square.source_url;

  //   c.push(tmp);
  // });

  /* 循环获取全部数据 */

  // let allSlugs = [];

  // const total = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/posts?categories_exclude=${EXCLUDED_CATEGORY}&_fields=slug&per_page=${per_page}`
  // ).then((res) => ({
  //   amount: res.headers.get("x-wp-total"),
  //   totalPages: res.headers.get("x-wp-totalpages"),
  // }));

  // for (let page = 1; page <= total.totalPages; page++) {
  //   const tmp = await fetch(
  //     `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${page}&categories_exclude=${EXCLUDED_CATEGORY}&_fields=slug`
  //   ).then((res) => res.json());

  //   allSlugs = allSlugs.concat(tmp);
  // }

  /* 内容处理 */
  // let content = `test`;
  // content = content
  //   .replace(/(<\/?a[^>]*>)(?!.*\1)/gi, ``)
  //   .replace(
  //     /<div class="wprm-container-float-right">(.|\n)*<h2 class="wprm-recipe-name/g,
  //     `<h2 class="wprm-recipe-name`
  //   )
  //   .replace(
  //     /<h2 class="wprm-recipe-name(.|\n)*<div class="wprm-recipe-summary/g,
  //     `<div class="wprm-recipe-summary`
  //   )
  //   .replace(
  //     /<div class="wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-author-container"(.|\n)*<div class="wprm-recipe-ingredients-container/g,
  //     `<div class="wprm-recipe-ingredients-container`
  //   )
  //   .match(/<div id="recipe">(.|\n)*<\/div>/g);
  // content = content.match(/<div id="recipe">(.|\n)*<\/div>/g);
  /* 分页 */

  // const totalPages = 100;
  // const pageSizes = 20;
  // const pages = Math.ceil(totalPages / pageSizes);

  // const styleA = [1];

  // if (pages <= 5) {
  //   return styleA;
  // }

  // 分类数据

  // const allCategories = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const topCategories = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=0&per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const recipesCategories = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=1&per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const breadCategories = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=15&per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const dessertCategories = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=51&per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const breakfastCategories = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=16&per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const beveragesCategories = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?parent=26386&per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // Set 数据

  // let tmp = [];
  // const allSets1 = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?page=1&per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const allSets2 = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/categories?page=2&per_page=100&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());
  // const allSets = tmp.concat(allSets1).concat(allSets2);

  // const topSets = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/set?per_page=100&parent=0&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const cookingMethodSets = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/set?per_page=100&parent=26251&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const cuisineSets = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/set?per_page=100&parent=26252&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const dietarySets = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/set?per_page=100&parent=26253&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const holidaySets = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/set?per_page=100&parent=26254&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const seasonalSets = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/set?per_page=100&parent=26255&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // const weightWatchersSets = await fetch(
  //   `https://www.recipegirl.com/wp-json/wp/v2/set?per_page=100&parent=26257&_fields=id,count,name,slug,parent&orderby=id`
  // ).then((res) => res.json());

  // Recipe 数据
  const EXCLUDED_CATEGORY_ID = [7942, 8883, 19959, 19961, 26383];
  const EXCLUDED_CATEGORY = EXCLUDED_CATEGORY_ID.join(`,`);

  let allRecipes = [];

  const total = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?per_page=20&page=1&_fields=id&categories_exclude=${EXCLUDED_CATEGORY}&orderby=id`
  ).then((res) => res.headers.get(`x-wp-total`));

  const totalPages = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?per_page=20&page=1&_fields=id&categories_exclude=${EXCLUDED_CATEGORY}&orderby=id`
  ).then((res) => res.headers.get(`x-wp-totalpages`));

  for (let page = 1; page <= totalPages; page++) {
    const data = await fetch(
      `https://www.recipegirl.com/wp-json/wp/v2/posts?per_page=20&page=${page}&_fields=id,title,content,slug,_links,_embedded&_embed&categories_exclude=${EXCLUDED_CATEGORY}&orderby=id`
    ).then((res) => res.json());

    allRecipes = allRecipes.concat(data);
    typeof window !== "undefined" &&
      localStorage.setItem(`recipesData`, {
        data: allRecipes,
        time: new Date(),
      });
  }

  const all = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?per_page=100&page=1&_fields=id,title,slug,content,categories&categories_exclude=${EXCLUDED_CATEGORY}&orderby=id`
  ).then((res) => res.json());

  return {
    props: {
      // dataForHome,
      // allCategories,
      // allCategorySlugs,
      // a,
      // b: c,
      // content: JSON.stringify(allCategories),
      // content: JSON.stringify(recipesCategories),
      // content: JSON.stringify(breadCategories),
      // content: JSON.stringify(dessertCategories),
      // content: JSON.stringify(breakfastCategories),
      // content: JSON.stringify(allSets),
      // content: JSON.stringify(cuisineSets),
      // content: JSON.stringify(dietarySets),
      // content: JSON.stringify(holidaySets),
      // content: JSON.stringify(seasonalSets),
      // content: JSON.stringify(allRecipes),
      // content: JSON.stringify(topSets),
      // content: JSON.stringify(cookingMethodSets),
      // content: JSON.stringify(topCategories),
      // allSlugs,
    },
  };
}
