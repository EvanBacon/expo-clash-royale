export default class Product {
  image; // = Assets.images.icons['coin.png'];
  // name; // = 'Victory Gold';
  value; // = new Price(300, "GLD");

  constructor({ image, value }) {
    this.value = value;
    this.image = image;
    // this.name = name;
  }
}
