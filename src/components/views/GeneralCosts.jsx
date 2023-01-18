import { useRatesListContext } from "../../providers/RatesProviders";

const GeneralCosts = () => {
  const { rates } = useRatesListContext();

  const showISO = () => {
    console.log(rates);
  };

  return (
    <div>
      <h1>ISO code of currencies</h1>

      {rates.map((rate) => (
        <h2>{rate}</h2>
      ))}

      <button onClick={showISO}>show ISO</button>
    </div>
  );
};

export default GeneralCosts;
