export class BaseComponent {
  protected $element: any;
  protected _highlightColor: string;

  constructor($element: any) {
    this.$element = $element;
  }

  doAction($event: any) {
    console.log($event);
  }

  highlightComponent() {
    this.$element[0].animate([
      { background: '#ffffff', offset: 0 },
      { background: this._highlightColor, offset: 0.5 },
      { background: '#ffffff', offset: 1 }
    ], {
      duration: 2000,
      direction: 'alternate'
    });
    console.log('Checking', (<any>this.constructor).name);
  }

  doSomeComputation() {
    return 'done';// this.fibonacci(25);
  }

  fibonacci(num: number): number {
    if (num <= 1) return 1;

    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
}
