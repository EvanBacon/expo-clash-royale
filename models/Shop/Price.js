export default class Price {
  value = 0;
  currency; // = "GLD"

  constructor({ value, currency }) {
    this.value = value;
    this.currency = currency;
  }
}
