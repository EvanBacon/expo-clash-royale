export default class Currency {
  value = 1;
  id; // = 'GLD';
  name; // = 'Gold';

  constructor({ name, value, id }) {
    this.name = name;
    this.value = value;
    this.id = id;
  }
}

Currency.gold = new Currency({ id: 'GLD', name: 'Gold', value: 0.8 });
Currency.gems = new Currency({ id: 'GEM', name: 'Gems', value: 0.9 });
Currency.physical = new Currency({ id: 'PHY', name: 'Cash', value: 1.0 });
