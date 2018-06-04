import ShopItem from './ShopItem';

export default class CurrencyShopItem extends ShopItem {
  set name(value) {
    this._name = value;
  }
  get name() {
    return `${this._name} of ${this.denomination}`;
  }
  constructor({ denomination, ...props }) {
    super(props);
    this.denomination = denomination;
  }
}
