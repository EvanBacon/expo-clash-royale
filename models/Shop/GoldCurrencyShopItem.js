import CurrencyShopItem from './CurrencyShopItem';
import Price from './Price';
import Product from './Product';
import Assets from '../../Assets';
import Currency from './Currency';

export default class GoldCurrencyShopItem extends CurrencyShopItem {
  constructor({ productValue, priceValue, props }) {
    super({
      name: 'Gold',
      color: 'yellow',
      price: new Price({ value: priceValue, currency: Currency.gems }),
      product: new Product({
        image: Assets.images.icons['coin.png'],
        value: new Price({ value: productValue, currency: Currency.gold }),
      }),
      ...props,
    });
  }
}
