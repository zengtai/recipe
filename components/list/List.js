import ListItem from "./ListItem";

export default function List({ items }) {
  return (
    <ul className="grid grid-cols-2 gap-4 xl:grid-cols-5">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
