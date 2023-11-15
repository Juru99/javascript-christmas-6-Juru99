import InputView from '../views/InputView';
import OutputView from '../views/OutputView';
import Benefit from './Benefit';
import Order from './Order';
import { PRICE } from '../constants/constants';

class Reservation {
  async makeAReservation() {
    const visitDate = await InputView.readDate();
    const menu = await InputView.readMenu();

    const totalAmount = new Order().calculateTotalAmount(menu);

    if (totalAmount >= PRICE.minPrice) {
      new Benefit().calculateBenefit(totalAmount, Number(visitDate), menu);
      return;
    }

    OutputView.printNoEvent(totalAmount);
  }
}

export default Reservation;
