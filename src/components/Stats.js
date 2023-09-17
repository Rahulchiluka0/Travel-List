export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your Packing List..🚀</em>
      </p>
    );
  }
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to Go..🛩️"
          : `💝 You have ${numItem} items in your list, and you already packed ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
