import { useEffect, useState } from "react";
import { quotes } from "../constant";

const Quotations: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState<number>(0);
  useEffect(() => {
    returnRandom(quotes);
  }, []);

  const returnRandom = (quotes: string[]): void => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
  };

  return (
    <div>
      <h1>{quotes[quoteIndex]}</h1>
    </div>
  );
};

export default Quotations;
