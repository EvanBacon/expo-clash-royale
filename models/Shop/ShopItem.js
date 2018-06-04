export default class ShopItem {
  color; // = 'blue';
  name; // = 'Victory Gold Boost';
  price; // = new Price(100, "GEM");
  product; //new Product(image, )

  constructor({ color, price, product, name }) {
    this.color = color;
    this.price = price;
    this.name = name;
    this.product = product;
  }
}
