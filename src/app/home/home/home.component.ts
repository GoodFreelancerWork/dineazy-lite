import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tables: any[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://dineazyapi.elaachi.com/api/v1/inventory/626a39dc15a50977b63858ef/626addfc8d6f8d915a404355/Restaurant/10/0/undefined/undefined/undefined').subscribe((respose: any) =>{ this.tables = respose.data.record })
  }

}
