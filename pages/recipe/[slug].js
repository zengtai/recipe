import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../../components/ads/Banner";
import RecipeDetail from "../../components/detail/RecipeDetail";

import { getAllSlugs, getTotal } from "../../lib/api";
import { SITE_META, ADS_SLOT_ID } from "../../lib/constants";

export default function Recipe({ data, recommendedData, slug, pages }) {
  console.log(`data`, data);
  console.log(`slug`, slug);
  console.log(`pages`, pages);
  // console.log(`recommendedData`, recommendedData);
  return (
    <>
      <Head>
        <title>{`${data.title} | ${SITE_META.name}`}</title>
        <meta name="description" content="Recipe for Every Day" />
      </Head>
      <Banner
        className={`banner rectangle`}
        style={{ display: "block" }}
        slot={ADS_SLOT_ID.detail}
        responsive="false"
      />
      <div className="container flex flex-col gap-6">
        <div className="flex grow bg-white">
          <div className="flex grow flex-col gap-4">
            <div className="grow">
              <div className="flex flex-col gap-4">
                <div className="relative mx-4 h-fit w-32 border-4 border-[#48C0C0] xl:basis-1/5">
                  <Image
                    src={data.featuredImageUrl}
                    alt={data.title}
                    width={200}
                    height={200}
                    layout={`responsive`}
                  />
                </div>
                <div className="mx-4 max-w-3xl">
                  <RecipeDetail content={data.content} title={data.title} />
                </div>
              </div>
            </div>
            <div className="xl:max-w-xl">
              <h2 className="mx-4 mb-4 text-xl font-bold text-[#439C9C]">
                Recommended
              </h2>
              <ul className="mx-4 grid gap-4">
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
    let tmp1 = ""; //设置默认图片
    try {
      tmp1 =
        item._embedded["wp:featuredmedia"][0].media_details.sizes.square
          .source_url;
    } catch (e) {
      /*try {
        tmp1 = item._embedded["wp:featuredmedia"][0].media_details.sizes.full;
      } catch (e) {}*/
    }
    tmp.featuredImageUrl = tmp1;
    if (tmp1 != "") data.push(tmp);
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

  const slugs = await getAllSlugs();

  const allDataCount = await getTotal(100, `posts`);

  let pages = allDataCount.pages;

  return {
    props: {
      data: data[0],
      recommendedData,
      slug: ctx.params.slug,
      slugs,
      pages,
      // categories,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();

  // for (let page = 1, per_page = 10; page * 10 <= total; page++) {
  //   let tmp = await fetch(
  //     `https://www.recipegirl.com/wp-json/wp/v2/posts?&per_page=10&page=${i}&categories_exclude=19959,8883,26383,7942,19961&_fields=slug,title,id,_links`
  //   );
  // }

  const paths = slugs.map((item) => ({ params: { slug: item.slug } }));

  // console.log(`paths`, paths.length);

  return {
    paths,
    fallback: false,
  };
}
