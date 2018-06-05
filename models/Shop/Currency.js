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

Currency.ice = new Currency({ id: 'ICE', name: 'Ice', value: 0.8 });
Currency.guap = new Currency({ id: 'GWP', name: 'Guap', value: 0.9 });
Currency.physical = new Currency({ id: 'PHY', name: 'Cash', value: 1.0 });
