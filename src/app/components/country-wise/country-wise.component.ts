import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-wise',
  templateUrl: './country-wise.component.html',
  styleUrls: ['./country-wise.component.css']
})
export class CountryWiseComponent implements OnInit {

  totalConfirmed = 0;
  totalCritical = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  countries = []
  totalCountryData = []
  title = 'Browser market shares at a specific website, 2014';
  type = 'BarChart';
  typesecond = 'LineChart';
  typethird = 'ColumnChart';
  typefourth = 'PieChart';
  data = [ ];
  columnNames = ['Browser', 'Percentage'];
  options = {   
    hAxis: {
       title: 'Date'
    },
    vAxis:{
       title: 'Cases'
    },
 };
  width = 1500;
  height = 400;

  constructor(private dataService: CountryService) { }
  // ngOnInit() {
  //   this.dataService.getCountries().subscribe((data) => {
  //     this.totalCountryData = data;
  //     data.forEach((con)=>{
  //       this.countries = Object.keys(con)
  //     })
  //      console.log(this.totalCountryData);
  //   })

  // }

maindata = []
  
  ngOnInit() {
    this.dataService.getCountries().subscribe((data) => {
      this.totalCountryData = data['data'];
      this.totalCountryData.forEach((cs) => {
        let tst ={}
        tst['name'] = cs.name;
        tst['code'] = cs.code;
        this.countries.push(tst)
        if(cs.latest_data.confirmed > 5000){
        this.data.push([cs.updated_at.substring(0,10), cs.latest_data.confirmed]) 
        }
      })
      // console.log("coun",this.countries)
      this.updateValues( this.totalCountryData[0].name)
    })
  }
  updateValues(con) {
    console.log("con", con.target.value)
    // this.dataService.getCountriesDateWise(con).subscribe((dateWise)=>{
    //   console.log(dateWise);
    // })
    this.totalCountryData.forEach((cs)=>{
      if(cs.code == con.target.value){
        this.totalConfirmed = cs.latest_data.confirmed;
        this.totalCritical = cs.latest_data.critical;
        this.totalDeaths = cs.latest_data.deaths;
        this.totalRecovered = cs.latest_data.recovered;
      }
    })
  }
}
