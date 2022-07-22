interface Currency {
    name: string,
};

interface Currencies {
    currencies: Currency[],
    latestRates: Array<any>,
    baseCurrency: string,
};

export default Currencies;