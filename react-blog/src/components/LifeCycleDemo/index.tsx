import { useEffect, useState } from 'react';

export const LifecycleDemo = ({ name }: { name: string }) => {
  const [count, setCount] = useState(0);

  // 1. Рендер: тело функции выполняется при КАЖДОЙ отрисовке
  console.log('render', { name, count });

  // 2. Монтирование и размонтирование
  useEffect(() => {
    console.log('mount: компонент появился на странице');

    return () => {
      console.log('unmount: компонент убрали со страницы');
    };
  }, []);

  // 3. Обновление: срабатывает, когда изменился count
  useEffect(() => {
    console.log('update: count стал', count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{name}: {count}</button>;
};