// 数据抓取主功能

async function fetchAPI(url, ...args) {
  const json = await fetch(`${url}${args}`).then((res) => res.json());
  return json;
}

// 首页数据

export const getDataForHome = async (page) => {
  let sourceData = await fetchAPI(
    `https://www.recipegirl.com/wp-json/wp/v2/`,
    `posts?&per_page=10&page=${page}&categories_exclude=19959,8883,26383,7942,19961&_fields=slug,title,id,_links,_embedded&_embed`
  );
  let data = [];
  sourceData.map((item) => {
    let tmp = {};
    tmp.id = item.id;
    tmp.title = item.title.rendered;
    tmp.slug = item.slug;
    tmp.featuredImageUrl =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.square.source_url;
    data.push(tmp);
  });

  return data;
};

export const getTotal = async (per_page = 10) => {
  let res = await fetch(
    `https://www.recipegirl.com/wp-json/wp/v2/posts?categories_exclude=19959,8883,26383,7942,19961&per_page=${per_page}`
  );

  return {
    total: res.headers.get(`x-wp-total`),
    pages: res.headers.get(`x-wp-totalpages`),
  };
};

// 列表页数据

export const getAllCategories = async () => {
  let sourceData = await fetchAPI(
    `https://www.recipegirl.com/wp-json/wp/v2/`,
    `categories?page=1&per_page=100&_fields=slug,name,id&exclude=19959,8883,26383,7942,19961`
  );
  let getAllCategories = [];
  sourceData.map((item) => {
    let tmp = {};
    tmp.id = item.id;
    tmp.name = item.name;
    tmp.slug = item.slug;
    getAllCategories.push(tmp);
  });

  return getAllCategories;
};

export const getCategoryId = async (categorySlug) => {
  let category = await fetchAPI(
    `https://www.recipegirl.com/wp-json/wp/v2/`,
    `categories?slug=breads&_fields=${categorySlug},name,id,count&exclude=19959,8883,26383,7942,19961`
  );
  return category[0].id;
};

export const getDataByCategory = async (page, catgorySlug) => {
  let catgoryId = await getCategoryId(catgorySlug);

  let sourceData = await fetchAPI(
    `https://www.recipegirl.com/wp-json/wp/v2/`,
    `posts?&per_page=10&page=${page}&categories=${catgoryId}&_fields=slug,title,id,_links,_embedded&_embed`
  );

  let dataByCategory = [];
  sourceData.map((item) => {
    let tmp = {};
    tmp.id = item.id;
    tmp.title = item.title.rendered;
    tmp.slug = item.slug;
    tmp.featuredImageUrl =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.square.source_url;
    dataByCategory.push(tmp);
  });

  return dataByCategory;
};

export const getDataByCategoryId = async (catgoryId = 1, page = 1) => {
  let sourceData = await fetchAPI(
    `https://www.recipegirl.com/wp-json/wp/v2/`,
    `posts?&per_page=10&page=${page}&categories=${catgoryId}&_fields=slug,title,id,_links,_embedded&_embed`
  );

  let dataByCategoryId = [];
  sourceData.map((item) => {
    let tmp = {};
    tmp.id = item.id;
    tmp.title = item.title.rendered;
    tmp.slug = item.slug;
    tmp.featuredImageUrl =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.square.source_url;

    dataByCategoryId.push(tmp);
  });

  return dataByCategoryId;
};

// 详情页数据

export const getDataBySlug = async (slug) => {
  let sourceData = await fetchAPI(
    `https://www.recipegirl.com/wp-json/wp/v2/`,
    `posts?slug=${slug}&_fields=slug,title,categories,content,id,_links,_embedded&_embed`
  );

  let dataBySlug = [];
  sourceData.map((item) => {
    let tmp = {};
    tmp.id = item.id;
    tmp.title = item.title.rendered;
    tmp.slug = item.slug;
    tmp.content = item.content.rendered;
    tmp.featuredImageUrl =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.square.source_url;

    dataBySlug.push(tmp);
  });

  return dataBySlug;
};
