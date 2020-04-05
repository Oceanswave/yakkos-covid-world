import axios from 'axios';
import cheerio from 'cheerio';
import { CountryCovidData } from './CountryCovidData';

const worldoMetersUrl = "https://www.worldometers.info/coronavirus/#countries";

export class WorldoMeters {
    static async getLatestCountryData(): Promise<{ [countryName: string]: CountryCovidData }> {

        const result = await axios.get(worldoMetersUrl);
        const $ = cheerio.load(result.data);
        const tableRows = $('#main_table_countries_today tr');
        const countryData: { [countryName: string]: CountryCovidData } = {};

        tableRows.each((_ix, el) => {
            const countryName = $(el).children('td:nth-child(1)').text();
            const data = {
                totalCases: $(el).children('td:nth-child(2)').text(),
                newCases: $(el).children('td:nth-child(3)').text(),
                totalDeaths: $(el).children('td:nth-child(4)').text(),
                newDeaths: $(el).children('td:nth-child(5)').text(),
                totalRecovered: $(el).children('td:nth-child(6)').text(),
                activeCases: $(el).children('td:nth-child(7)').text(),
                seriousCritical: $(el).children('td:nth-child(8)').text(),
                totalTests: $(el).children('td:nth-child(11)').text(),
            }
            countryData[countryName] = data;
        });

        return countryData;
    }
}