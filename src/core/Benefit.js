import OutputView from '../views/OutputView';
import Discount from './Discount';

class Benefit {
  #discount;

  constructor() {
    this.#discount = new Discount();
  }

  calculateBenefit(totalAmount, visitDate, menu) {
    const totalBenefit = this.#discount.calculateDiscount(
      totalAmount,
      visitDate,
      menu,
    );

    const totalDiscount = this.#calculateTotalDiscount(totalBenefit);
    OutputView.printExpectedPaymentAmount(totalAmount - totalDiscount);
    OutputView.printEventBadge(totalDiscount);
  }

  #calculateTotalDiscount(totalBenefit) {
    let totalDiscount = 0;
    totalBenefit.forEach((item) => {
      totalDiscount += item[1];
    });

    return totalDiscount;
  }
}

export default Benefit;
