import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            items={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
