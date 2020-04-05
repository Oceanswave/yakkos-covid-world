import axios from 'axios';
import cheerio from 'cheerio';
import { CountryCovidData } from './CountryCovidData';

const worldoMetersUrl = "https://www.worldometers.info/coronavirus/#countries";
const worldoMetersUSUrl = "https://www.worldometers.info/coronavirus/country/us/";

export class WorldoMeters {
    static async getLatestCountryData(): Promise<{ [countryName: string]: CountryCovidData }> {
        const countryData: { [countryName: string]: CountryCovidData } = {};

        const countryResult = await axios.get(worldoMetersUrl);
        let $ = cheerio.load(countryResult.data);
        const countryTableRows = $('#main_table_countries_today tr');
        
        countryTableRows.each((_ix, el) => {
            const countryName = $(el).children('td:nth-child(1)').text().trim();
            const data = {
                totalCases: $(el).children('td:nth-child(2)').text().trim(),
                newCases: $(el).children('td:nth-child(3)').text().trim(),
                totalDeaths: $(el).children('td:nth-child(4)').text(),
                newDeaths: $(el).children('td:nth-child(5)').text(),
                totalRecovered: $(el).children('td:nth-child(6)').text(),
                activeCases: $(el).children('td:nth-child(7)').text(),
                seriousCritical: $(el).children('td:nth-child(8)').text(),
                totalTests: $(el).children('td:nth-child(11)').text(),
            }
            countryData[countryName] = data;
        });

        // Now for US State data.
        const stateResult = await axios.get(worldoMetersUSUrl);
        $ = cheerio.load(stateResult.data);
        const stateTableRows = $(`#usa_table_countries_today tr`);
        stateTableRows.each((_ix, el) => {
            const stateName = $(el).children('td:nth-child(1)').text().trim();
            const data = {
                totalCases: $(el).children('td:nth-child(2)').text().trim(),
                newCases: $(el).children('td:nth-child(3)').text().trim(),
                totalDeaths: $(el).children('td:nth-child(4)').text(),
                newDeaths: $(el).children('td:nth-child(5)').text(),
                activeCases: $(el).children('td:nth-child(6)').text(),
            }
            countryData[stateName] = data;
        });

        console.dir(countryData);
        return countryData;
    }
}