import { useState, useTransition } from 'react';
import { LIST_SIZE } from '../constant';

const UseTransitionExample = () => {
  const [count, setCount] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: any) => {
    setCount(e.target.value);

    startTransition(() => {
      setItems(
        Array(LIST_SIZE)
          .fill(1)
          .map((_, i) => e.target.value),
      );
    });
  };

  return (
    <div className="use-tr__list">
      <input className="use-tr__button" value={count} onChange={handleChange} />
      {/* {isPending ? (
        <p>loading ...</p>
      ) : ( */}
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* // )} */}
    </div>
  );
};

export default UseTransitionExample;
