import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }


  private globalDataUrl = "https://corona-api.com/countries"
  // let countries = [];
  // let latestData = [];
  // let dataObj = {}
  // let temp = (res['data'])
  // temp.forEach(cs => {
  //   dataObj[cs.name] = cs.latest_data;
  // });
  // countries.push(dataObj)
  // return countries;
  getCountries() {
    return this.http.get(this.globalDataUrl).pipe(
      map((res) => {
        return res
      })
    )

  }

  getCountriesDateWise(con){
    return this.http.get(this.globalDataUrl + "/" ).pipe(
      map((res) => {
        return res
      })
    )
  }



}
