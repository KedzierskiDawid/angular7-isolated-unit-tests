import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;

  beforeEach(() => {
    component = new ItemComponent();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should be initialized successfully', () => {
    expect(component['isInitialized']).toEqual(null);

    component.ngOnInit();

    expect(component['isInitialized']).toEqual(true);
  });
});
