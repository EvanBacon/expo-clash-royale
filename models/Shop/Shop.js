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
          name: 'Fistful',
          priceValue: 1.0,
          productValue: 80,
        }),
        new GemCurrencyShopItem({
          name: 'Pouch',
          priceValue: 5.0,
          productValue: 500,
        }),
        new GemCurrencyShopItem({
          name: 'Bucket',
          priceValue: 10.0,
          productValue: 1200,
        }),
        new GemCurrencyShopItem({
          name: 'Barrel',
          priceValue: 20.0,
          productValue: 2500,
        }),
        new GemCurrencyShopItem({
          name: 'Wagon',
          priceValue: 50.0,
          productValue: 6500,
        }),
        new GemCurrencyShopItem({
          name: 'Mountain',
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
          name: 'Pouch',
          priceValue: 60.0,
          productValue: 1000,
        }),
        new GoldCurrencyShopItem({
          name: 'Bucket',
          priceValue: 500.0,
          productValue: 10000,
        }),
        new GoldCurrencyShopItem({
          name: 'Wagon',
          priceValue: 4500.0,
          productValue: 100000,
        }),
      ],
    }),
  ];
}

Shop.shared = new Shop();
