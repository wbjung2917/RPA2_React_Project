import { useWord } from '../hooks/word-context';

export const Test = () => {
  const { checkedItems } = useWord();

  console.log(checkedItems);
  return <h1>this is testpage</h1>;
};
