import { createContext, useState, useContext } from "react";

const RatesContext = createContext();

const ISOcodes = ["USD", "GBP", "BRL", "EUR"];

const RatesProvider = ({ children }) => {
  const [rates, setRate] = useState(ISOcodes);

  return (
    <RatesContext.Provider value={{ rates }}>{children}</RatesContext.Provider>
  );
};

export const useRatesListContext = () => useContext(RatesContext);

export default RatesProvider;
