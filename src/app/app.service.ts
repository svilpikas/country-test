import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Country } from "./model";
import data from '../__mocks__/response.json'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public getCountries(filterKey: string): Observable<Partial<Country>[]> {
    const countriesList = data?.content?.filter(({
                                                   country,
                                                   code
                                                 }) => code.toLowerCase() === filterKey.toLowerCase() || country.toLowerCase().includes(filterKey.toLowerCase()))
    return new Observable((subscriber) => {
      subscriber.next(countriesList.map(({country, code}) => ({country, code})))
    })
  }
}
