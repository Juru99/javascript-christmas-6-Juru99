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
  }
}

export default Benefit;
