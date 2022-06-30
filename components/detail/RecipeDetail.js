export default function RecipeDetail({ content, title }) {
  let htmlContent = `${content}`;
  htmlContent
    .replace(/(<\/?a[^>]*>)(?!.*\1)/gi, ``)
    .replace(
      /<div class=\"wprm-container-float-right\">(.|\n)*<h2 class=\"wprm-recipe-name/g,
      `<h2 class="wprm-recipe-name`
    );
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
