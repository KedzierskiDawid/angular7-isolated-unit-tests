import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public item: Item;

  private isInitialized: boolean = null;

  public ngOnInit(): void {
    this.isInitialized = true;
  }
}
