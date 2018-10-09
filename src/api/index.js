const API_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/';

export const fetchCurrencyData = async (code, date) => {
    const result = await fetch(`${API_URL}exchange?valcode=${code}&date=${date}&json`);
    return result.json();
}