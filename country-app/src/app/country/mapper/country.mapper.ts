import { ResCountry } from "../interfaces/country";
import { country } from "../interfaces/country.format";

export class CountryMapper {

    static mapCountry(item: ResCountry): country {
        return {
            caa2: item.cca2,
            flags: item.flags.svg,
            name: item.name.official,
            capital: item.capital[0],
            population: item.population.toLocaleString(),
            lenguajeEsp:item.translations['spa'].official ?? 'no traduccion'
        }
    }


    static mapCountryArray(item:ResCountry[]):country[]{
      return item.map(this.mapCountry)
    }
}