import { ListComponent } from './list.component';
import { AppService } from '../app.service';
import { from, Observable } from 'rxjs';
import { Item } from '../interfaces/item.interface';

describe('ListComponent', () => {
  let component: ListComponent;

  describe('First example of AppService', () => {
    beforeEach(() => {
      component = new ListComponent({} as AppService);
    });

    it('should create component', () => {
      expect(component).toBeDefined();
    });

    // should return error: this.appService.getItems is not a function
    xit('should be initialized successfully', () => {
      component.ngOnInit();
    });
  });

  describe('Second example of AppService', () => {
    const appServiceMock = {
      getItems: () => {},
    } as AppService;

    beforeEach(() => {
      component = new ListComponent(appServiceMock);
    });

    it('should create component', () => {
      expect(component).toBeDefined();
    });

    // should return error: cannot read property 'subscribe' of undefined
    xit('should be initialized successfully', () => {
      component.ngOnInit();
    });
  });

  describe('Third example of AppService', () => {
    const itemsMock: Array<Item> = [
      { key: 'Key 1', value: 1 },
      { key: 'Key 2', value: 2 },
      { key: 'Key 3', value: 3 },
      { key: 'Key 4', value: 4 },
    ];

    const appServiceMock = {
      getItems: (): Observable<Array<Item>> => {
        return from([itemsMock]);
      },
    } as AppService;

    beforeEach(() => {
      component = new ListComponent(appServiceMock);
    });

    it('should create component', () => {
      expect(component).toBeDefined();
    });

    // it works only on fast browsers
    xit('should be initialized successfully', () => {
      expect(component.items.length).toEqual(0);

      component.ngOnInit();

      expect(component.items.length).toEqual(4);
    });
  });

  describe('Fourth example of AppService', () => {
    const itemsMock: Array<Item> = [
      { key: 'Key 1', value: 1 },
      { key: 'Key 2', value: 2 },
      { key: 'Key 3', value: 3 },
      { key: 'Key 4', value: 4 },
    ];

    const appService = new AppService();

    beforeEach(() => {
      spyOn(appService, 'getItems').and.returnValue(from([itemsMock]));
      component = new ListComponent(appService);
    });

    it('should create component', () => {
      expect(component).toBeDefined();
    });

    it('should be initialized successfully', () => {
      expect(component.items.length).toEqual(0);

      component.ngOnInit();

      expect(appService.getItems).toHaveBeenCalled();
      expect(component.items.length).toEqual(4);
    });

    it('should return length of items array', () => {
      component.items = itemsMock;

      expect(component.getItemsCount()).toEqual(4);
    });
  });
});
