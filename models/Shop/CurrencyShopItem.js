import ShopItem from './ShopItem';

export default class CurrencyShopItem extends ShopItem {
  constructor({ denomination, ...props }) {
    super(props);
    this._name = props.name;
    this.denomination = denomination;
    this.formatName = `${this.denomination} of ${props.name}`;
  }
}
