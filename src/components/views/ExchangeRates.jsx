const ExchangeRates = () => {
  let url = "https://api.exchangeratesapi.io/v1";

  const params = (paramsObj) => {
    return new URLSearchParams({
      access_key: "3642e881604265ca717424903fd6b5ae",
      ...paramsObj,
    });
  };

  const getLatest = (options) => {
    fetch(`${url}/latest?${params(options)}`)
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      <button onClick={getLatest}>see the data</button>
    </div>
  );
};

export default ExchangeRates;
