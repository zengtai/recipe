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
  let allCategories = await getAllCategories();
  let id = allCategories.filter((item) => item.slug == categorySlug).id;
  return id;
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

export const getDataByCategoryId = async (page = 1, catgoryId) => {
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
