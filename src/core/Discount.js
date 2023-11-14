import { DATE, MENU, PRICE } from '../constants/constants';
import Utils from '../utils/Utils';
import OutputView from '../views/OutputView';

class Discount {
  #totalBenefit = [];

  calculateDiscount(totalAmount, visitDate, menu) {
    OutputView.printGiveawayMenu(totalAmount);
    const visitDay = Utils.calculateVisitDay(visitDate);

    if (visitDate >= DATE.eventStart && visitDate <= DATE.eventEnd) {
      this.#christmasDDayDiscount(visitDate);
    }
    DATE.weekday.includes(visitDay) && this.#weekdayDiscount(menu);
    DATE.weekend.includes(visitDay) && this.#weekendDiscount(menu);
    DATE.special.includes(visitDate) && this.#specialDiscount();
    totalAmount >= PRICE.payment && this.#giveawayEventDiscount();

    OutputView.printBenefitDetails(this.#totalBenefit);

    return this.#totalBenefit;
  }

  #christmasDDayDiscount(visitDate) {
    let discount = PRICE.christmasDDayStartDiscount;
    discount += (Number(visitDate) - 1) * 100;

    this.#totalBenefit.push(['크리스마스 디데이 할인', discount]);
  }

  #weekdayDiscount(menu) {
    let discount = 0;
    const dessert = [];
    MENU.map((item) => item.category === '디저트' && dessert.push(item.name));

    Utils.separateMenu(menu).forEach((item) => {
      if (dessert.includes(item[0])) {
        discount += PRICE.week * Number(item[1]);
      }
    });

    discount !== 0 && this.#totalBenefit.push(['평일 할인', discount]);
  }

  #weekendDiscount(menu) {
    let discount = 0;
    const main = [];

    MENU.map((item) => item.category === '메인' && main.push(item.name));

    Utils.separateMenu(menu).forEach((item) => {
      if (main.includes(item[0])) {
        discount += PRICE.week * Number(item[1]);
      }
    });

    discount !== 0 && this.#totalBenefit.push(['주말 할인', discount]);
  }

  #specialDiscount() {
    this.#totalBenefit.push(['특별 할인', PRICE.special]);
  }

  #giveawayEventDiscount() {
    this.#totalBenefit.push(['증정 이벤트', PRICE.freeGift]);
  }
}

export default Discount;
