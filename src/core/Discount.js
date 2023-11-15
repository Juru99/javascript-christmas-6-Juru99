import Utils from '../utils/Utils';
import OutputView from '../views/OutputView';
import { DATE, MENU, PRICE } from '../constants/constants';

class Discount {
  #totalBenefit = [];

  /*
   * @param {number} totalAmount - 할인 전 총주문 금액
   * @param {number} visitDate - 방문 날짜
   * @param {string} menu - 메뉴
   * @returns {array} this.#totalBenefit - 혜택 내역
   */
  calculateDiscount(totalAmount, visitDate, menu) {
    const visitDay = Utils.calculateVisitDay(visitDate);

    if (visitDate >= DATE.startDate && visitDate <= DATE.endEvent) {
      this.#christmasDDayDiscount(visitDate);
    }

    this.#weekDiscount(menu, visitDay);
    DATE.special.includes(visitDate) && this.#specialDiscount();
    totalAmount >= PRICE.payment && this.#giveawayEventDiscount();

    OutputView.printGiveawayMenu(totalAmount);
    OutputView.printBenefitDetails(this.#totalBenefit);

    return this.#totalBenefit;
  }

  /*
   * @param {number} visitDate - 방문 날짜
   */
  #christmasDDayDiscount(visitDate) {
    let discount = PRICE.christmasDDayStartDiscount;
    discount += (Number(visitDate) - 1) * PRICE.christmasDDayDiscount;

    this.#totalBenefit.push(['크리스마스 디데이 할인', discount]);
  }

  /*
   * @param {string} menu - 메뉴
   * @param {number} visitDay - 방문 요일
   */
  #weekDiscount(menu, visitDay) {
    const menus = Utils.separateMenu(menu);
    let categoryName = '';
    let benefitName = '';

    if (DATE.weekday.includes(visitDay)) {
      categoryName = '디저트';
      benefitName = '평일 할인';
    }

    if (DATE.weekend.includes(visitDay)) {
      categoryName = '메인';
      benefitName = '주말 할인';
    }

    this.#weekBenefit(menus, categoryName, benefitName);
  }

  /*
   * @param {array} menus - 메뉴
   * @param {string} categoryName - 카테고리명
   * @param {string} benefitName - 혜택명
   */
  #weekBenefit(menus, categoryName, benefitName) {
    let discount = 0;
    const category = [];

    MENU.map(
      (item) => item.category === categoryName && category.push(item.name)
    );

    menus.forEach((menu) => {
      if (category.includes(menu[0])) {
        discount += PRICE.week * Number(menu[1]);
      }
    });

    discount !== 0 && this.#totalBenefit.push([benefitName, discount]);
  }

  #specialDiscount() {
    this.#totalBenefit.push(['특별 할인', PRICE.special]);
  }

  #giveawayEventDiscount() {
    this.#totalBenefit.push(['증정 이벤트', PRICE.freeGift]);
  }
}

export default Discount;
