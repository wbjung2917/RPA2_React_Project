import { useEffect } from 'react';
import { useWord } from '../hooks/word-context';

export const Test = () => {
  const { checkedItems } = useWord();

  return <h1>this is testpage</h1>;
};
