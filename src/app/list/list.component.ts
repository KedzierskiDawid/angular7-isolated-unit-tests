import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  public items: Array<Item> = [];

  private itemsSub: Subscription;

  constructor(
    private appService: AppService,
  ) { }

  public ngOnInit(): void {
    this.itemsSub = this.appService.getItems().subscribe((items: Array<Item>) => {
      this.items = items;
    });
  }

  public ngOnDestroy(): void {
    if (this.itemsSub) {
      this.itemsSub.unsubscribe();
    }
  }

  public getItemsCount(): number {
    return this.items.length;
  }
}
