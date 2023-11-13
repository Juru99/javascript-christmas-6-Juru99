import Benefit from './Benefit';
import Order from './Order';
import Validator from './Validator';

class Reservation {
  #visitDate;
  #menu;
  #validator;
  #order;
  #benefit;

  constructor() {
    this.#validator = new Validator();
    this.#order = new Order();
    this.#benefit = new Benefit();
  }

  makeAReservation() {
    this.#validator.validateVisitDate(this.#visitDate);
    this.#validator.validateMenu(this.#menu);

    const totalAmount = this.#order.calculateTotalAmount(this.#menu);
    this.#benefit.calculateBenefit(totalAmount, this.#visitDate, this.#menu);
  }
}

export default Reservation;
