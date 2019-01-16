import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Item } from './interfaces/item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private items: Array<Item> = [
    { key: 'Key 1', value: 1 },
    { key: 'Key 2', value: 2 },
    { key: 'Key 3', value: 3 },
    { key: 'Key 4', value: 4 },
  ];

  constructor(
    private appService: AppService,
  ) {}

  public ngOnInit(): void {
    this.appService.setItems(this.items);
  }
}
