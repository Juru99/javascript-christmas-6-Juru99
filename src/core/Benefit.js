import OutputView from '../views/OutputView';
import Discount from './Discount';

class Benefit {
  calculateBenefit(totalAmount, visitDate, menu) {
    const totalBenefit = new Discount().calculateDiscount(
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

    totalBenefit.forEach((benefit) => {
      totalDiscount += benefit[1];
    });

    return totalDiscount;
  }
}

export default Benefit;
