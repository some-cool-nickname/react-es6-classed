/**
 * Created by mikhail on 01.07.15.
 */
let isFunction = (obj) => {
  return typeof obj === 'function' || false;
};

let getAllMethods = (obj) => {
  return Object.getOwnPropertyNames(obj)
    .filter((key) => {
      return key !== 'constructor' && isFunction(obj[key]);
    });
};

export default {
  componentWillMount() {
    getAllMethods(this.constructor.prototype).forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
};