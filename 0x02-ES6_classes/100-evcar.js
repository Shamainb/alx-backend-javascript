import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'number') {
      throw new TypeError('Range must be a number');
    }
    this._range = range;
  }

  // Getter for _range
  get range() {
    return this._range;
  }

  // Setter for _range
  set range(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Range must be a number');
    }
    this._range = value;
  }

  // Override the cloneCar method to return an instance of EVCar
  cloneCar() {
    return new EVCar(this._brand, this._motor, this._color, this._range);
  }
}
