class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Getter for _size
  get size() {
    return this._size;
  }

  // Setter for _size
  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  // Getter for _location
  get location() {
    return this._location;
  }

  // Setter for _location
  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  // Override to convert the class to a number
  valueOf() {
    return this._size;
  }

  // Override to convert the class to a string
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
