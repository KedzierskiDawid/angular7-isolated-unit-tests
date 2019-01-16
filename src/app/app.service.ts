import { Injectable } from '@angular/core';
import { Item } from './interfaces/item.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private items: BehaviorSubject<Array<Item>> = new BehaviorSubject(null);

  public getItems(): Observable<Array<Item>> {
    return this.items.asObservable().pipe(filter((item) => item !== null));
  }

  public setItems(items: Array<Item>): void {
    this.items.next(items);
  }
}
