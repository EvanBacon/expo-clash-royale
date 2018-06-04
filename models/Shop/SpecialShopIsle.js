import ShopIsle from './ShopIsle';

export default class SpecialShopIsle extends ShopIsle {
  endDate; //Date
  constructor({ endDate, ...shopIsle }) {
    super(shopIsle);
    this.endDate = endDate;
  }
}
