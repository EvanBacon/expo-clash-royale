import CurrencyShopItem from './CurrencyShopItem';
import Price from './Price';
import Product from './Product';
import Assets from '../../Assets';
import Currency from './Currency';

export default class IceCurrencyShopItem extends CurrencyShopItem {
  constructor({ productValue, priceValue, ...props }) {
    super({
      name: 'Ice',
      color: 'cyan',
      price: new Price({ value: priceValue, currency: Currency.guap }),
      product: new Product({
        image: Assets.images.icons['coin.png'],
        value: new Price({ value: productValue, currency: Currency.ice }),
      }),
      ...props,
    });
  }
}
