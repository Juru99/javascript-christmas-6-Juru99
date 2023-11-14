import InputView from '../views/InputView';
import OutputView from '../views/OutputView';
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

  async makeAReservation() {
    this.#visitDate = await InputView.readDate();
    this.#menu = await InputView.readMenu();

    let totalAmount = this.#order.calculateTotalAmount(this.#menu);
    if (totalAmount >= 10000) {
      this.#benefit.calculateBenefit(totalAmount, this.#visitDate, this.#menu);
    } else {
      OutputView.printNoEvent(totalAmount);
    }
  }
}

export default Reservation;
