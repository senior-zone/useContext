import { useState } from 'react';
import List from './List';
import { LIST_SIZE } from '../constant';

const UseTransitionExample = () => {
  const [count, setCount] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleChange = (e: any) => {
    setCount(e.target.value);

    setItems(
      Array(LIST_SIZE)
        .fill(1)
        .map((_, i) => e.target.value),
    );
  };

  return (
    <div className="use-tr__list">
      <input className="use-tr__button" value={count} onChange={handleChange} />
      <List items={items} />
    </div>
  );
};

export default UseTransitionExample;
