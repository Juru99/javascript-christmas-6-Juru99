import Benefit from './Benefit';
import Order from './Order';

class Reservation {
  #visitDate;
  #menu;
  #order;
  #benefit;

  constructor() {
    this.#order = new Order();
    this.#benefit = new Benefit();
  }

  makeAReservation() {
    const totalAmount = this.#order.calculateTotalAmount(this.#menu);
    this.#benefit.calculateBenefit(totalAmount, this.#visitDate, this.#menu);
  }
}

export default Reservation;
