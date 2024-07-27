export class HolbertonClass {
  constructor(year, location) {
    if (typeof year !== 'number') {
      throw new TypeError('Year must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._year;
  }

  toString() {
    return this._location;
  }
}
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    if (typeof firstName !== 'string') {
      throw new TypeError('First name must be a string');
    }
    if (typeof lastName !== 'string') {
      throw new TypeError('Last name must be a string');
    }
    if (!(holbertonClass instanceof HolbertonClass)) {
      throw new TypeError('holbertonClass must be an instance of HolbertonClass');
    }
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }
}
