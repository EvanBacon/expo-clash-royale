import ShopIsle from './ShopIsle';
import GuapCurrencyShopItem from './GuapCurrencyShopItem';
import IceCurrencyShopItem from './IceCurrencyShopItem';

export default class Shop {
  isles = [
    new ShopIsle({
      title: 'Gems',
      key: 'GEM',
      data: [
        new GuapCurrencyShopItem({
          denomination: 'Clips',
          priceValue: 1.0,
          productValue: 80,
        }),
        new GuapCurrencyShopItem({
          denomination: 'Wads',
          priceValue: 5.0,
          productValue: 500,
        }),
        new GuapCurrencyShopItem({
          denomination: 'Stacks',
          priceValue: 10.0,
          productValue: 1200,
        }),
        new GuapCurrencyShopItem({
          denomination: 'Cases',
          priceValue: 20.0,
          productValue: 2500,
        }),
        new GuapCurrencyShopItem({
          denomination: 'Maybach',
          priceValue: 50.0,
          productValue: 6500,
        }),
        new GuapCurrencyShopItem({
          denomination: 'Maybach',
          priceValue: 100.0,
          productValue: 14000,
        }),
      ],
    }),
    new ShopIsle({
      title: 'Ice',
      key: 'ICE',
      data: [
        new IceCurrencyShopItem({
          denomination: 'Chains',
          priceValue: 60.0,
          productValue: 1000,
        }),
        new IceCurrencyShopItem({
          denomination: 'Freezers',
          priceValue: 500.0,
          productValue: 10000,
        }),
        new IceCurrencyShopItem({
          denomination: 'Glaciers',
          priceValue: 4500.0,
          productValue: 100000,
        }),
      ],
    }),
  ];
}

Shop.shared = new Shop();
