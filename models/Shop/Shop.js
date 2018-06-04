import ShopIsle from './ShopIsle';
import GemCurrencyShopItem from './GemCurrencyShopItem';
import GoldCurrencyShopItem from './GoldCurrencyShopItem';

export default class Shop {
  isles = [
    new ShopIsle({
      title: 'Gems',
      key: 'GEM',
      data: [
        new GemCurrencyShopItem({
          denomination: 'Fistful',
          priceValue: 1.0,
          productValue: 80,
        }),
        new GemCurrencyShopItem({
          denomination: 'Pouch',
          priceValue: 5.0,
          productValue: 500,
        }),
        new GemCurrencyShopItem({
          denomination: 'Bucket',
          priceValue: 10.0,
          productValue: 1200,
        }),
        new GemCurrencyShopItem({
          denomination: 'Barrel',
          priceValue: 20.0,
          productValue: 2500,
        }),
        new GemCurrencyShopItem({
          denomination: 'Wagon',
          priceValue: 50.0,
          productValue: 6500,
        }),
        new GemCurrencyShopItem({
          denomination: 'Mountain',
          priceValue: 100.0,
          productValue: 14000,
        }),
      ],
    }),
    new ShopIsle({
      title: 'Gold',
      key: 'GLD',
      data: [
        new GoldCurrencyShopItem({
          denomination: 'Pouch',
          priceValue: 60.0,
          productValue: 1000,
        }),
        new GoldCurrencyShopItem({
          denomination: 'Bucket',
          priceValue: 500.0,
          productValue: 10000,
        }),
        new GoldCurrencyShopItem({
          denomination: 'Wagon',
          priceValue: 4500.0,
          productValue: 100000,
        }),
      ],
    }),
  ];
}

Shop.shared = new Shop();
