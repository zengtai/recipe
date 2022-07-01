import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import RecipeDetail from "../../components/detail/RecipeDetail";
import List from "../../components/list/List";
import ListItem from "../../components/list/ListItem";
import {
  getAllCategories,
  getDataByCategory,
  getDataBySlug,
  getTotal,
  EXCLUDED_CATEGORY,
} from "../../lib/api";

export default function Recipe({ data, recommendedData }) {
  console.log(`data`, data);
  console.log(`recommendedData`, recommendedData);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="Recipe for Every Day" />
      </Head>

      <div className="container flex gap-6">
        <div className="flex grow flex-col bg-white">
          <div className="flex grow gap-4">
            <div className="grow">
              <div className="flex gap-4">
                <div className="relative h-fit basis-1/5 border-4 border-[#48C0C0]">
                  <Image
                    src={data.featuredImageUrl}
                    alt={data.title}
                    width={200}
                    height={200}
                    layout={`responsive`}
                  />
                </div>
                <div className="max-w-3xl">
                  <RecipeDetail content={data.content} title={data.title} />
                </div>
              </div>
            </div>
            <div className="xl:max-w-xl">
              <h2 className="mb-4 text-xl font-bold text-[#439C9C]">
                Recommended
              </h2>
              <ul className="grid gap-4">
                {recommendedData.map((item) => (
                  <li key={item.id}>
                    <Link href={`/recipe/${item.slug}`}>
                      <a className="flex gap-4">
                        <div className="relative h-24 w-24 border-4 border-[#48C0C0]">
                          <Image
                            src={item.featuredImageUrl}
                            alt={item.title}
                            width={200}
                            height={200}
                            layout={`responsive`}
                          />
                        </div>
                        <div className="flex grow flex-col">
                          <h2 className="grow py-2 font-bold text-[#439C9C]">
                            {item.title}
                          </h2>

                          <span className="text-sm text-[#D93B85]">
                            Read More &rarr;
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getCategoryIdBySlug(slug) {
  const target = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/categories?slug=${slug}&_fields=id`
  ).then((res) => res.json());

  return target[0].id;
}

export async function getStaticProps(ctx) {
  // const categories = await getAllCategories();

  const sourceData = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?&slug=${ctx.params.slug}&_fields=slug,title,content,categories,id,_links,_embedded&_embed`
  ).then((res) => res.json());
  let data = [];
  sourceData.map((item) => {
    let tmp = {};
    tmp.id = item.id;
    tmp.title = item.title.rendered;
    tmp.slug = item.slug;
    tmp.content = item.content.rendered;
    tmp.categories = item.categories;
    tmp.featuredImageUrl =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.square.source_url;

    data.push(tmp);
  });

  const currentCategory = data[0].categories.join(`,`);
  const relatedData = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?&categories=${currentCategory}&exclude=${data[0].id}&per_page=4&_fields=slug,title,id,_links,_embedded&_embed`
  ).then((res) => res.json());

  const recommendedData = [];
  relatedData.map((item) => {
    let tmp = {};
    tmp.id = item.id;
    tmp.title = item.title.rendered;
    tmp.slug = item.slug;
    tmp.featuredImageUrl =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.square.source_url;

    recommendedData.push(tmp);
  });

  return {
    props: {
      data: data[0],
      recommendedData,
      // categories,
    },
  };
}

export async function getStaticPaths() {
  let recipes = [];
  const per_page = 100;
  const allDataCount = await getTotal(per_page);

  let pages = allDataCount.pages;

  for (let currPage = 1; currPage <= pages; currPage++) {
    let tmp = await fetch(
      `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=${per_page}&page=${currPage}&categories_exclude=${EXCLUDED_CATEGORY}&_fields=slug`
    ).then((res) => res.json());

    recipes = recipes.concat(tmp);
  }

  // for (let page = 1, per_page = 10; page * 10 <= total; page++) {
  //   let tmp = await fetch(
  //     `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=10&page=${i}&categories_exclude=19959,8883,26383,7942,19961&_fields=slug,title,id,_links`
  //   );
  // }

  const paths = recipes.map((item) => ({ params: { slug: item.slug } }));

  return {
    paths,
    fallback: false,
  };
}
