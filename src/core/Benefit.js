import OutputView from '../views/OutputView';
import Discount from './Discount';

class Benefit {
  /*
   * @param {number} totalAmount - 할인 전 총주문 금액
   * @param {number} visitDate - 방문 날짜
   * @param {string} menu - 메뉴
   */
  calculateBenefit(totalAmount, visitDate, menu) {
    const totalBenefit = new Discount().calculateDiscount(
      totalAmount,
      visitDate,
      menu
    );

    const totalDiscount = this.#calculateTotalDiscount(totalBenefit);

    OutputView.printExpectedPaymentAmount(totalAmount - totalDiscount);
    OutputView.printEventBadge(totalDiscount);
  }

  /*
   * @param {array} totalBenefit - 혜택 내역
   * @returns {number} totalDiscount - 총혜택 금액
   */
  #calculateTotalDiscount(totalBenefit) {
    let totalDiscount = 0;

    totalBenefit.forEach((benefit) => {
      totalDiscount += benefit[1];
    });

    return totalDiscount;
  }
}

export default Benefit;
