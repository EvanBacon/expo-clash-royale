import CurrencyShopItem from './CurrencyShopItem';
import Price from './Price';
import Product from './Product';
import Assets from '../../Assets';
import Currency from './Currency';
import Colors from '../../Colors';

export default class GuapCurrencyShopItem extends CurrencyShopItem {
  constructor({ productValue, priceValue, ...props }) {
    super({
      name: 'Guap',
      color: Colors.green,
      price: new Price({ value: priceValue, currency: Currency.physical }),
      product: new Product({
        image: Assets.images.icons['coin.png'],
        value: new Price({ value: productValue, currency: Currency.guap }),
      }),
      ...props,
    });
  }
}
