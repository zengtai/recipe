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
  let content = `<p><strong>Bacon Wrapped Green Beans</strong> are bundles of green beans wrapped with bacon and baked with butter and brown sugar.</p>\n<p><img loading=\"lazy\" class=\"aligncenter wp-image-77822 size-full\" title=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" src=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1.jpeg\" alt=\"bacon wrapped green beans on a white platter\" width=\"800\" height=\"1200\" data-pin-title=\"Bacon Wrapped Green Beans\" data-pin-description=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" srcset=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1.jpeg 800w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1-400x600.jpeg 400w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1-768x1152.jpeg 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<p>I first had these fabulous bacon wrapped green beans when my lovely friend Cindy contributed them to a dinner that I hosted. I was making <a href=\"https://www.recipegirl.com/simple-beef-brisket/\" rel=\"\">brisket</a>, and this was the perfect side dish. She brought them ready to bake in the oven, and we baked them at my house. We all enjoyed them so much, so of course I asked for the recipe.</p>\n<p>Cindy got the recipe from a cookbook called, <a href=\"https://amzn.to/3PxrtqE\" target=\"_blank\" rel=\"nofollow noopener\">Créme de Colorado</a> (a Junior League Cookbook). I had this particular cookbook on my shelves, once upon a time. Junior League cookbooks are always the best!<!--more--></p>\n<p><img loading=\"lazy\" class=\"aligncenter wp-image-77823 size-full\" title=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" src=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-2.jpeg\" alt=\"ingredients displayed for making bacon wrapped green beans\" width=\"800\" height=\"1200\" data-pin-title=\"Bacon Wrapped Green Beans\" data-pin-description=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" srcset=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-2.jpeg 800w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-2-400x600.jpeg 400w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-2-768x1152.jpeg 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<h2>Only 5 Ingredients are needed:</h2>\n<ul>\n<li>thin, fresh green beans</li>\n<li>bacon</li>\n<li>garlic salt</li>\n<li>butter</li>\n<li>light brown sugar</li>\n</ul>\n<p><img loading=\"lazy\" class=\"aligncenter wp-image-77824 size-full\" title=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" src=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-3.jpeg\" alt=\"bacon wrapped green beans in a white baking dish\" width=\"800\" height=\"1200\" data-pin-title=\"Bacon Wrapped Green Beans\" data-pin-description=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" srcset=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-3.jpeg 800w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-3-400x600.jpeg 400w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-3-768x1152.jpeg 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<h2>How to make Bacon Wrapped Green Beans:</h2>\n<p>The complete, printable recipe is at the end of this post.</p>\n<p>There are two &#8220;pre-steps&#8221; to this recipe. The green beans should be steamed until crisp-tender. And the bacon needs to be &#8220;slightly&#8221; pre-cooked. For the bacon, just put it on a foil-lined baking sheet and bake at 400 just until slightly cooked. Then remove from the pan and pat with paper towels.</p>\n<div class=\"wprm-recipe-instruction-text\">Preheat the oven to 350 degrees F. Gather 6 to 10 beans in bundles and wrap ½ piece of bacon around the center of each bundle. Place the bundles in a baking dish.</div>\n<div>&nbsp;</div>\n<div>Sprinkle the bundles with garlic salt. Pour melted butter over the bundles.</p>\n</div>\n<p><img loading=\"lazy\" class=\"aligncenter wp-image-77825 size-full\" title=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" src=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-4.jpeg\" alt=\"bacon wrapped green beans in a baking dish with brown sugar sprinkled on top\" width=\"800\" height=\"1200\" data-pin-title=\"Bacon Wrapped Green Beans\" data-pin-description=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" srcset=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-4.jpeg 800w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-4-400x600.jpeg 400w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-4-768x1152.jpeg 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<p>Sprinkle the bundles with brown sugar.</p>\n<p><img loading=\"lazy\" class=\"aligncenter wp-image-77826 size-full\" title=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" src=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-5.jpeg\" alt=\"bacon wrapped green beans baked in a baking dish\" width=\"800\" height=\"1200\" data-pin-title=\"Bacon Wrapped Green Beans\" data-pin-description=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" srcset=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-5.jpeg 800w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-5-400x600.jpeg 400w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-5-768x1152.jpeg 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<div class=\"wprm-recipe-instruction-text\">Bake for 15 to 20 minutes, or until the bacon is done. It&#8217;s okay to put them under the broiler in the last few minutes, if you want to get the bacon a bit crispy.</div>\n<p><img loading=\"lazy\" class=\"aligncenter wp-image-77827 size-full\" title=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" src=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-6.jpeg\" alt=\"bacon wrapped green bean bundles\" width=\"800\" height=\"1200\" data-pin-title=\"Bacon Wrapped Green Beans\" data-pin-description=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" srcset=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-6.jpeg 800w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-6-400x600.jpeg 400w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-6-768x1152.jpeg 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<p>The baked green beans are buttery and sweet. I love the inclusion of bacon to bundle them up. They&#8217;re so pretty for an elegant dinner party, and they&#8217;re easy enough for a weeknight dinner too.&nbsp;</p>\n<p>Find some fresh green beans and make this recipe. The haricot verts at Costco work perfectly. I hope you and your dinner-eaters love these bacon wrapped green beans as much as we do. Enjoy!</p>\n<p><img loading=\"lazy\" class=\"aligncenter wp-image-77828 size-full\" title=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" src=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-7.jpeg\" alt=\"bacon wrapped green bean bundles on a white plate\" width=\"800\" height=\"1200\" data-pin-title=\"Bacon Wrapped Green Beans\" data-pin-description=\"Bacon Wrapped Green Bean Bundles recipe from RecipeGirl.com #bacon #baconwrapped #greenbeans #recipe #RecipeGirl\" srcset=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-7.jpeg 800w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-7-400x600.jpeg 400w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-7-768x1152.jpeg 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<h2>The Best Green Bean Recipes:</h2>\n<ul>\n<li><a href=\"https://www.recipegirl.com/creamy-baked-green-beans/\" rel=\"\">Creamy Baked Green Beans</a></li>\n<li><a href=\"https://www.recipegirl.com/green-beans-with-caramelized-shallots/\" rel=\"\">Green Beans with Caramelized Shallots</a></li>\n<li><a href=\"https://www.loveandotherspices.com/air-fryer-green-beans/\" target=\"_blank\" rel=\"noopener\">Air Fryer Green Beans</a></li>\n<li><a href=\"https://www.recipegirl.com/roasted-green-beans-with-lemon-pine-nuts-and-parmigiano/\" rel=\"\">Roasted Green Beans with Lemon, Pine Nuts and Parmigiano</a></li>\n<li><a href=\"https://www.recipegirl.com/green-beans-with-mushrooms-shallots/\" rel=\"\">Green Beans with Mushrooms and Shallots</a></li>\n</ul>\n<div id=\"recipe\"></div><div id=\"wprm-recipe-container-74096\" class=\"wprm-recipe-container\" data-recipe-id=\"74096\" data-servings=\"6\"><div class=\"wprm-recipe wprm-recipe-template-rg-2020\"><div class=\"wprm-container-float-right\">\n\t<div class=\"wprm-recipe-image wprm-block-image-normal\"><img style=\"border-width: 0px;border-style: solid;border-color: #666666;\" width=\"150\" height=\"150\" src=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1-200x200.jpeg\" class=\"attachment-150x150 size-150x150 wp-image-77822\" alt=\"bacon wrapped green beans on a white platter\" loading=\"lazy\" srcset=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1-200x200.jpeg 200w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1-300x300.jpeg 300w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1-400x400.jpeg 400w, https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1-500x500.jpeg 500w\" sizes=\"(max-width: 150px) 100vw, 150px\" /></div>\n\t<a href=\"https://www.recipegirl.com/wprm_print/recipe/74096\" style=\"color: #ffffff;background-color: #3a3a3a;border-color: #3a3a3a;border-radius: 0px;padding: 5px 5px;\" class=\"wprm-recipe-print wprm-recipe-link wprm-print-recipe-shortcode wprm-block-text-normal wprm-recipe-print-wide-button wprm-recipe-link-wide-button wprm-color-accent\" data-recipe-id=\"74096\" data-template=\"\" target=\"_blank\" rel=\"nofollow\"><span class=\"wprm-recipe-icon wprm-recipe-print-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 24 24\"><g ><path fill=\"#ffffff\" d=\"M19,5.09V1c0-0.552-0.448-1-1-1H6C5.448,0,5,0.448,5,1v4.09C2.167,5.569,0,8.033,0,11v7c0,0.552,0.448,1,1,1h4v4c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1v-4h4c0.552,0,1-0.448,1-1v-7C24,8.033,21.833,5.569,19,5.09z M7,2h10v3H7V2z M17,22H7v-9h10V22z M18,10c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C19,9.552,18.552,10,18,10z\"/></g></svg></span> Print</a>\n<a href=\"https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Fwww.recipegirl.com%2Fbacon-wrapped-green-beans%2F&media=https%3A%2F%2Fwww.recipegirl.com%2Fwp-content%2Fuploads%2F2022%2F02%2FBacon-Wrapped-Green-Beans-1.jpeg&description=Bacon+Wrapped+Green+Beans&is_video=false\" style=\"color: #ffffff;background-color: #3a3a3a;border-color: #3a3a3a;border-radius: 0px;padding: 5px 5px;\" class=\"wprm-recipe-pin wprm-recipe-link wprm-block-text-normal wprm-recipe-pin-wide-button wprm-recipe-link-wide-button wprm-color-accent\" target=\"_blank\" rel=\"nofollow noopener\" data-recipe=\"74096\" data-url=\"https://www.recipegirl.com/bacon-wrapped-green-beans/\" data-media=\"https://www.recipegirl.com/wp-content/uploads/2022/02/Bacon-Wrapped-Green-Beans-1.jpeg\" data-description=\"Bacon Wrapped Green Beans\" data-repin=\"\"><span class=\"wprm-recipe-icon wprm-recipe-pin-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><g class=\"nc-icon-wrapper\" fill=\"#ffffff\"><path fill=\"#ffffff\" d=\"M12,0C5.4,0,0,5.4,0,12c0,5.1,3.2,9.4,7.6,11.2c-0.1-0.9-0.2-2.4,0-3.4c0.2-0.9,1.4-6,1.4-6S8.7,13,8.7,12 c0-1.7,1-2.9,2.2-2.9c1,0,1.5,0.8,1.5,1.7c0,1-0.7,2.6-1,4c-0.3,1.2,0.6,2.2,1.8,2.2c2.1,0,3.8-2.2,3.8-5.5c0-2.9-2.1-4.9-5-4.9 c-3.4,0-5.4,2.6-5.4,5.2c0,1,0.4,2.1,0.9,2.7c0.1,0.1,0.1,0.2,0.1,0.3c-0.1,0.4-0.3,1.2-0.3,1.4c-0.1,0.2-0.2,0.3-0.4,0.2 c-1.5-0.7-2.4-2.9-2.4-4.6c0-3.8,2.8-7.3,7.9-7.3c4.2,0,7.4,3,7.4,6.9c0,4.1-2.6,7.5-6.2,7.5c-1.2,0-2.4-0.6-2.8-1.4 c0,0-0.6,2.3-0.7,2.9c-0.3,1-1,2.3-1.5,3.1C9.6,23.8,10.8,24,12,24c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z\"></path></g></svg></span> Pin</a>\n\n<span class=\"wprm-recipe-grow-container\"><a href=\"https://app.grow.me\" target=\"_blank\" rel=\"nofollow noreferrer\" style=\"color: #3a3a3a;background-color: #ffffff;border-color: #3a3a3a;border-radius: 0px;padding: 5px 5px;\" class=\"wprm-recipe-grow-not-saved wprm-recipe-grow wprm-recipe-link wprm-block-text-normal wprm-recipe-link-wide-button wprm-color-accent\" data-recipe-id=\"74096\"><span class=\"wprm-recipe-icon wprm-recipe-grow-icon wprm-recipe-grow-not-saved-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><g class=\"nc-icon-wrapper\" fill=\"#3a3a3a\"><path fill=\"#3a3a3a\" d=\"M11.6,0C10.1,0,8.8,0.8,8,2C7.2,0.8,5.9,0,4.4,0C2,0,0,2,0,4.4c0,4.4,8,10.9,8,10.9s8-6.5,8-10.9 C16,2,14,0,11.6,0z\"/></g></svg></span> Save</a><a href=\"https://app.grow.me\" target=\"_blank\" rel=\"nofollow noreferrer\" style=\"color: #3a3a3a;background-color: #ffffff;border-color: #3a3a3a;border-radius: 0px;padding: 5px 5px;display: none;\" class=\"wprm-recipe-grow-saved wprm-recipe-grow wprm-recipe-link wprm-block-text-normal wprm-recipe-link-wide-button wprm-color-accent\" data-recipe-id=\"74096\"><span class=\"wprm-recipe-icon wprm-recipe-grow-icon wprm-recipe-grow-saved-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><g class=\"nc-icon-wrapper\" stroke-width=\"1\" fill=\"#3a3a3a\" stroke=\"#3a3a3a\"><path fill=\"none\" stroke=\"#3a3a3a\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M11.5,0.5 C9.982,0.5,8.678,1.355,8,2.601C7.322,1.355,6.018,0.5,4.5,0.5c-2.209,0-4,1.791-4,4c0,4,7.5,11,7.5,11s7.5-7,7.5-11 C15.5,2.291,13.709,0.5,11.5,0.5z\" data-cap=\"butt\"/> </g></svg></span> Saved!</a></span>\n\n</div>\n<h2 class=\"wprm-recipe-name wprm-block-text-bold\">Bacon Wrapped Green Beans</h2>\n<div class=\"wprm-recipe-summary wprm-block-text-normal\"><span style=\"display: block;\">This is a fabulous tasting side dish recipe!</span></div>\n<div class=\"smart-points\">\n\n\n\n</div>\n<h3>Recipe Details</h3>\n<div class=\"wprm-recipe-meta-container wprm-recipe-times-container wprm-recipe-details-container wprm-recipe-details-container-inline wprm-block-text-normal\" style=\"\"><div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-time-container wprm-recipe-prep-time-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-time-label wprm-recipe-prep-time-label\">Prep Time: </span><span class=\"wprm-recipe-time wprm-block-text-normal\"><span class=\"wprm-recipe-details wprm-recipe-details-minutes wprm-recipe-prep_time wprm-recipe-prep_time-minutes\">25</span> <span class=\"wprm-recipe-details-unit wprm-recipe-details-minutes wprm-recipe-prep_time-unit wprm-recipe-prep_timeunit-minutes\">mins</span></span></div><div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-time-container wprm-recipe-cook-time-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-time-label wprm-recipe-cook-time-label\">Cook Time: </span><span class=\"wprm-recipe-time wprm-block-text-normal\"><span class=\"wprm-recipe-details wprm-recipe-details-minutes wprm-recipe-cook_time wprm-recipe-cook_time-minutes\">15</span> <span class=\"wprm-recipe-details-unit wprm-recipe-details-minutes wprm-recipe-cook_time-unit wprm-recipe-cook_timeunit-minutes\">mins</span></span></div><div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-time-container wprm-recipe-total-time-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-time-label wprm-recipe-total-time-label\">Total Time: </span><span class=\"wprm-recipe-time wprm-block-text-normal\"><span class=\"wprm-recipe-details wprm-recipe-details-minutes wprm-recipe-total_time wprm-recipe-total_time-minutes\">40</span> <span class=\"wprm-recipe-details-unit wprm-recipe-details-minutes wprm-recipe-total_time-unit wprm-recipe-total_timeunit-minutes\">mins</span></span></div></div>\n<div class=\"wprm-recipe-meta-container wprm-recipe-tags-container wprm-recipe-details-container wprm-recipe-details-container-inline wprm-block-text-normal\" style=\"\"><div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-tag-container wprm-recipe-course-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-tag-label wprm-recipe-course-label\">Course: </span><span class=\"wprm-recipe-course wprm-block-text-normal\">Side Dish</span></div><div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-tag-container wprm-recipe-cuisine-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-tag-label wprm-recipe-cuisine-label\">Cuisine: </span><span class=\"wprm-recipe-cuisine wprm-block-text-normal\">American</span></div><div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-tag-container wprm-recipe-keyword-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-tag-label wprm-recipe-keyword-label\">Keyword: </span><span class=\"wprm-recipe-keyword wprm-block-text-normal\">bacon, green beans</span></div></div>\n<div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-servings-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-servings-label\">Servings: </span><span class=\"wprm-recipe-servings-with-unit\"><span class=\"wprm-recipe-servings wprm-recipe-details wprm-recipe-servings-74096 wprm-recipe-servings-adjustable-tooltip wprm-block-text-normal\" data-initial-servings=\"\" data-recipe=\"74096\" aria-label=\"Adjust recipe servings\">6</span> <span class=\"wprm-recipe-servings-unit wprm-recipe-details-unit wprm-block-text-normal\">servings</span></span></div>\n<div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-nutrition-container wprm-recipe-calories-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-nutrition-label wprm-recipe-calories-label\">Calories: </span><span class=\"wprm-recipe-nutrition-with-unit\"><span class=\"wprm-recipe-details wprm-recipe-nutrition wprm-recipe-calories wprm-block-text-normal\">228</span><span class=\"wprm-recipe-details-unit wprm-recipe-nutrition-unit wprm-recipe-calories-unit wprm-block-text-normal\">kcal</span></span></div>\n<div class=\"wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-author-container\" style=\"\"><span class=\"wprm-recipe-details-label wprm-block-text-normal wprm-recipe-author-label\">Author: </span><span class=\"wprm-recipe-details wprm-recipe-author wprm-block-text-normal\"><a href=\"https://www.recipegirl.com/bacon-wrapped-green-beans/\" target=\"_blank\">RecipeGirl.com (shared from the Creme de Colorado Junior League cookbook)</a></span></div>\n\n\n<div class=\"wprm-recipe-ingredients-container wprm-recipe-74096-ingredients-container wprm-block-text-normal wprm-ingredient-style-regular\" data-recipe=\"74096\" data-servings=\"6\"><h3 class=\"wprm-recipe-header wprm-recipe-ingredients-header wprm-block-text-bold wprm-align-left wprm-header-decoration-none\" style=\"\">Ingredients</h3><div class=\"wprm-recipe-ingredient-group\"><ul class=\"wprm-recipe-ingredients\"><li class=\"wprm-recipe-ingredient\" style=\"list-style-type: disc;\" data-uid=\"0\"><span class=\"wprm-recipe-ingredient-amount\">2</span>&#32;<span class=\"wprm-recipe-ingredient-unit\">pounds</span>&#32;<span class=\"wprm-recipe-ingredient-name\">thin fresh green beans,</span>&#32;<span class=\"wprm-recipe-ingredient-notes wprm-recipe-ingredient-notes-normal\">steamed until crisp-tender</span></li><li class=\"wprm-recipe-ingredient\" style=\"list-style-type: disc;\" data-uid=\"1\"><span class=\"wprm-recipe-ingredient-amount\">6</span>&#32;<span class=\"wprm-recipe-ingredient-unit\">strips</span>&#32;<span class=\"wprm-recipe-ingredient-name\">bacon,</span>&#32;<span class=\"wprm-recipe-ingredient-notes wprm-recipe-ingredient-notes-normal\">partially cooked (see NOTES below)</span></li><li class=\"wprm-recipe-ingredient\" style=\"list-style-type: disc;\" data-uid=\"2\"><span class=\"wprm-recipe-ingredient-name\">garlic salt</span></li><li class=\"wprm-recipe-ingredient\" style=\"list-style-type: disc;\" data-uid=\"3\"><span class=\"wprm-recipe-ingredient-amount\">4</span>&#32;<span class=\"wprm-recipe-ingredient-unit\">tablespoons</span>&#32;<span class=\"wprm-recipe-ingredient-name\">butter,</span>&#32;<span class=\"wprm-recipe-ingredient-notes wprm-recipe-ingredient-notes-normal\">melted</span></li><li class=\"wprm-recipe-ingredient\" style=\"list-style-type: disc;\" data-uid=\"4\"><span class=\"wprm-recipe-ingredient-amount\">3</span>&#32;<span class=\"wprm-recipe-ingredient-unit\">tablespoons</span>&#32;<span class=\"wprm-recipe-ingredient-name\">packed light brown sugar</span></li></ul></div></div>\n<div class=\"wprm-recipe-instructions-container wprm-recipe-74096-instructions-container wprm-block-text-normal\" data-recipe=\"74096\"><h3 class=\"wprm-recipe-header wprm-recipe-instructions-header wprm-block-text-bold wprm-align-left wprm-header-decoration-none\" style=\"\">Instructions</h3><div class=\"wprm-recipe-instruction-group\"><ul class=\"wprm-recipe-instructions\"><li id=\"wprm-recipe-74096-step-0-0\" class=\"wprm-recipe-instruction\" style=\"list-style-type: decimal;\"><div class=\"wprm-recipe-instruction-text\" style=\"margin-bottom: 5px\";><span style=\"display: block;\">Preheat the oven to 350 degrees F.</span></div></li><li id=\"wprm-recipe-74096-step-0-1\" class=\"wprm-recipe-instruction\" style=\"list-style-type: decimal;\"><div class=\"wprm-recipe-instruction-text\" style=\"margin-bottom: 5px\";><span style=\"display: block;\">Gather 6 to 10 beans in bundles and wrap ½ piece of bacon around the center of each bundle. Place the bundles in a baking dish. Sprinkle the bundles with garlic salt. Pour melted butter over the bundles. Sprinkle with brown sugar. </span></div></li><li id=\"wprm-recipe-74096-step-0-2\" class=\"wprm-recipe-instruction\" style=\"list-style-type: decimal;\"><div class=\"wprm-recipe-instruction-text\" style=\"margin-bottom: 5px\";><span style=\"display: block;\">Bake for 15 to 20 minutes, or until the bacon is done. You can put them under the broiler the last couple of minutes, if you&#39;d like.</span></div></li></ul></div></div>\n\n<div class=\"wprm-recipe-notes-container wprm-block-text-normal\"><h3 class=\"wprm-recipe-header wprm-recipe-notes-header wprm-block-text-bold wprm-align-left wprm-header-decoration-none\" style=\"\">Notes</h3><div class=\"wprm-recipe-notes\"><ul>\n<li>To partially cook the bacon, lay the bacon on a foil-rimmed baking sheet and bake at 400 degrees F. for a few minutes, just until the bacon is slightly cooked.</li>\n</ul></div></div>\n<h3 class=\"wprm-recipe-header wprm-recipe-nutrition-header wprm-block-text-bold wprm-align-left wprm-header-decoration-none\" style=\"\">Nutrition</h3><div class=\"wprm-nutrition-label-container wprm-nutrition-label-container-simple wprm-block-text-normal\" style=\"text-align: left;\"><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-serving_size\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Serving: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">1</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">serving (2 bundles)</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-calories\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Calories: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">228</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">kcal</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-carbohydrates\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Carbohydrates: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">17</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-protein\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Protein: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">6</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-fat\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Fat: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">17</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-saturated_fat\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Saturated Fat: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">8</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-polyunsaturated_fat\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Polyunsaturated Fat: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">2</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-monounsaturated_fat\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Monounsaturated Fat: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">6</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-trans_fat\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Trans Fat: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">1</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-cholesterol\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Cholesterol: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">35</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">mg</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-sodium\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Sodium: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">223</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">mg</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-potassium\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Potassium: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">373</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">mg</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-fiber\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Fiber: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">4</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-sugar\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Sugar: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">11</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">g</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-vitamin_a\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Vitamin A: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">1285</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">IU</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-vitamin_c\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Vitamin C: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">18</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">mg</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-calcium\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Calcium: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">64</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">mg</span></span><span style=\"color: #3a3a3a\">, </span><span class=\"wprm-nutrition-label-text-nutrition-container wprm-nutrition-label-text-nutrition-container-iron\"><span class=\"wprm-nutrition-label-text-nutrition-label  wprm-block-text-normal\" style=\"color: #3a3a3a\">Iron: </span><span class=\"wprm-nutrition-label-text-nutrition-value\" style=\"color: #3a3a3a\">2</span><span class=\"wprm-nutrition-label-text-nutrition-unit\" style=\"color: #3a3a3a\">mg</span></span></div></div></div>\n`;
  content = content
    .replace(/(<\/?a[^>]*>)(?!.*\1)/gi, ``)
    .replace(
      /<div class="wprm-container-float-right">(.|\n)*<h2 class="wprm-recipe-name/g,
      `<h2 class="wprm-recipe-name`
    )
    .replace(
      /<h2 class="wprm-recipe-name(.|\n)*<div class="wprm-recipe-summary/g,
      `<div class="wprm-recipe-summary`
    )
    .match(/<div id="recipe">(.|\n)*<\/div>/g);
  // content = content.match(/<div id="recipe">(.|\n)*<\/div>/g);
  /* 分页 */

  // const totalPages = 100;
  // const pageSizes = 20;
  // const pages = Math.ceil(totalPages / pageSizes);

  // const styleA = [1];

  // if (pages <= 5) {
  //   return styleA;
  // }

  return {
    props: {
      // dataForHome,
      // allCategories,
      // allCategorySlugs,
      // a,
      // b: c,
      content: content,
      // allSlugs,
    },
  };
}
