import { useDeferredValue } from 'react';

const List = ({ items }: { items: string[] }) => {
  const deferredItems = useDeferredValue(items);
  return items !== deferredItems ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {deferredItems.map((item, i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
