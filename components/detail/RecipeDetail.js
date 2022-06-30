export default function RecipeDetail({ content, title }) {
  let htmlContent = `${content}`;
  htmlContent = htmlContent
    .replace(/(<\/?a[^>]*>)(?!.*\1)/gi, ``)
    .replace(
      /<div class="wprm-container-float-right">(.|\n)*<h2 class="wprm-recipe-name/g,
      `<h2 class="wprm-recipe-name`
    )
    .replace(
      /<h2 class="wprm-recipe-name(.|\n)*<div class="wprm-recipe-summary/g,
      `<div class="wprm-recipe-summary`
    )
    .replace(
      /<div class="wprm-recipe-block-container wprm-recipe-block-container-inline wprm-block-text-normal wprm-recipe-author-container"(.|\n)*<div class="wprm-recipe-ingredients-container/g,
      `<div class="wprm-recipe-ingredients-container`
    )
    .match(/<div id="recipe">(.|\n)*<\/div>/g);
  return (
    <>
      <h1 className="mb-6 text-5xl font-bold text-[#439C9C]">{title}</h1>
      <div
        className="recipe-content"
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
      />
    </>
  );
}
