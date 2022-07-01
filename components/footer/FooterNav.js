import Link from "next/link";

export default function FooterNav(params) {
  const navItems = [
    {
      title: `Course`,
      type: `category`,
      list: [
        { title: `Burgers`, slug: `burgers` },
        // { title: `Casseroles`, slug: `casseroles` },
        { title: `Pasta`, slug: `pasta` },
        { title: `Pizza`, slug: `pizza-crust` },
        { title: `Salads`, slug: `salads` },
        { title: `Sandwiches`, slug: `sandwiches` },
        { title: `Tacos`, slug: `tacos` },
      ],
    },
    {
      title: `Cuisine`,
      type: `set`,
      list: [
        { title: `Asian`, slug: `asian-recipes` },
        { title: `Cuban`, slug: `cuban-recipes` },
        { title: `Greek`, slug: `greek-recipes` },
        { title: `Indian`, slug: `indian-recipes` },
        { title: `Mexican`, slug: `mexican-recipes` },
        { title: `Middle Eastern`, slug: `middle-eastern-recipes` },
        { title: `Thai`, slug: `thai-recipes` },
      ],
    },
    {
      title: `Dietary`,
      type: `set`,
      list: [
        { title: `Dairy Free`, slug: `dairy-free` },
        { title: `Egg Free`, slug: `egg-free` },
        { title: `Gluten Free`, slug: `gluten-free` },
        { title: `Low Carb`, slug: `low-carb` },
        { title: `Nut Free`, slug: `nut-Free` },
        { title: `Paleo`, slug: `paleo` },
        { title: `Vegan`, slug: `vegan-recipes` },
        { title: `Vegetarian`, slug: `vegetarian` },
      ],
    },
    {
      title: `Method`,
      type: `set`,
      list: [
        { title: `Baking`, slug: `baking` },
        { title: `Grilling`, slug: `grilling` },
        { title: `Instant Pot`, slug: `instant-pot` },
        { title: `No-Bake`, slug: `no-bake` },
        { title: `Slow Cooker`, slug: `slow-cooker` },
        { title: `Stove Top`, slug: `stove-top` },
      ],
    },
    {
      title: `Weigth Watchers`,
      type: `set`,
      list: [
        { title: `0 Blue Smartpoints`, slug: `0-blue-smartpoints` },
        { title: `1 Blue Smartpoints`, slug: `1-blue-smartpoints` },
        { title: `2 Blue Smartpoints`, slug: `2-blue-smartpoints` },
        { title: `3 Blue Smartpoints`, slug: `3-blue-smartpoints` },
        { title: `4 Blue Smartpoints`, slug: `4-blue-smartpoints` },
        { title: `5 Blue Smartpoints`, slug: `5-blue-smartpoints` },
      ],
    },
  ];

  return (
    <nav className="flex w-full justify-center bg-[#439C9C] py-4">
      <div className="container grid grid-cols-1 gap-4 xl:grid-cols-5">
        {navItems.map((item) => (
          <div className="mx-4" key={item.title}>
            <h3 className="mb-4 font-bold uppercase">{item.title}</h3>
            <ul className="grid grid-cols-3 gap-3 xl:grid-cols-1">
              {item.list.map((subItem) => (
                <li key={subItem.slug}>
                  <Link href={`/${item.type}/${subItem.slug}`}>
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* <dl className="grid gap-1">
          <dt className="mb-1 font-bold uppercase">Course</dt>
          <dd>
            <Link href={`/category/burgers`}>Burgers</Link>
          </dd>
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
        </dl> */}
      </div>
    </nav>
  );
}
