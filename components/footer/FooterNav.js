export default function FooterNav(params) {
  return (
    <nav className="flex w-full justify-center bg-[#439C9C] py-4">
      <div className="container grid grid-cols-5">
        <dl className="grid gap-1">
          <dt className="mb-1 font-bold uppercase">Course</dt>
          <dd>Burgers</dd>
          <dd>Casseroles</dd>
          <dd>Pasta</dd>
          <dd>Pizza</dd>
          <dd>Salads</dd>
          <dd>Sandwiches</dd>
          <dd>Tacos</dd>
        </dl>
        <dl className="grid gap-1">
          <dt className="mb-1 font-bold uppercase">Cuisine</dt>
          <dd>Asian</dd>
          <dd>Cuban</dd>
          <dd>Greek</dd>
          <dd>Indian</dd>
          <dd>Mexican</dd>
          <dd>Middle Eastern</dd>
          <dd>Thai</dd>
        </dl>
        <dl className="grid gap-1">
          <dt className="mb-1 font-bold uppercase">Dietary</dt>
          <dd>Dairy Free</dd>
          <dd>Egg Free</dd>
          <dd>Gluten Free</dd>
          <dd>Low Carb</dd>
          <dd>Nut Free</dd>
          <dd>Paleo</dd>
          <dd>Vegan</dd>
          <dd>Vegetarian</dd>
        </dl>
        <dl className="grid gap-1">
          <dt className="mb-1 font-bold uppercase">Method</dt>
          <dd>Baking</dd>
          <dd>Grilling</dd>
          <dd>Instant Pot</dd>
          <dd>No-Bake</dd>
          <dd>Slow Cooker</dd>
          <dd>Stove Top</dd>
        </dl>
        <dl className="grid gap-1">
          <dt className="mb-1 font-bold uppercase">Weigth Watchers</dt>
          <dd>0 Blue Smartpoints</dd>
          <dd>1 Blue Smartpoints</dd>
          <dd>2 Blue Smartpoints</dd>
          <dd>3 Blue Smartpoints</dd>
          <dd>4 Blue Smartpoints</dd>
          <dd>5 Blue Smartpoints</dd>
          <dd>6 Blue Smartpoints</dd>
        </dl>
      </div>
    </nav>
  );
}
