import Utils from '../utils/Utils';
import { Console } from '@woowacourse/mission-utils';
import { PRICE } from '../constants/constants';

const OutputView = {
  printEventPlanner() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  /*
   * @param {number} visitDate - 방문 날짜
   */
  printPreview(visitDate) {
    Console.print(
      `12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },

  /*
   * @param {array} menus - 주문 메뉴
   */
  printMenu(menus) {
    Console.print('<주문 메뉴>');
    const menuNames = menus.map((menuItem) => menuItem[0]);
    const menuCounts = menus.map((menuItem) => menuItem[1]);

    if (menuNames.includes('undefined')) {
      Console.print('없음');
      return;
    }

    menuNames.forEach((menuName, i) => {
      Console.print(`${menuName} ${menuCounts[i]}개`);
    });
  },

  /*
   * @param {number} totalAmount - 할인 전 총주문 금액
   */
  printTotalAmount(totalAmount) {
    Console.print('<할인 전 총주문 금액>');

    if (Number.isNaN(totalAmount)) totalAmount = 0;
    Console.print(`${Utils.separateThousand(totalAmount)}원`);
  },

  /*
   * @param {number} totalAmount - 할인 전 총주문 금액
   */
  printGiveawayMenu(totalAmount) {
    let giveawayMenu = '없음';
    if (totalAmount >= PRICE.payment) giveawayMenu = '샴페인 1개';

    Console.print('<증정 메뉴>');
    Console.print(giveawayMenu);
  },

  /*
   * @param {array} totalBenefit - 혜택 내역
   */
  printBenefitDetails(totalBenefit) {
    Console.print('<혜택 내역>');

    totalBenefit.forEach((benefit) => {
      Console.print(`${benefit[0]}: -${Utils.separateThousand(benefit[1])}원`);
    });
  },

  /*
   * @param {number} totalBenefit - 총혜택 금액
   */
  printTotalBenefit(totalBenefit) {
    Console.print('<총혜택 금액>');
    Console.print(`-${Utils.separateThousand(totalBenefit)}원`);
  },

  /*
   * @param {number} expectedPaymentAmount - 할인 후 예상 결제 금액
   */
  printExpectedPaymentAmount(expectedPaymentAmount) {
    Console.print('<할인 후 예상 결제 금액>');
    if (Number.isNaN(Number(expectedPaymentAmount))) expectedPaymentAmount = 0;
    Console.print(`${Utils.separateThousand(expectedPaymentAmount)}원`);
  },

  /*
   * @param {number} totalBenefit - 총혜택 금액
   */
  printEventBadge(totalBenefit) {
    let eventBadge = '없음';

    if (totalBenefit >= 20000) eventBadge = '산타';
    else if (totalBenefit >= 10000) eventBadge = '트리';
    else if (totalBenefit >= 5000) eventBadge = '별';

    Console.print('<12월 이벤트 배지>');
    Console.print(eventBadge);
  },

  /*
   * @param {number} totalAmount - 총주문 금액
   */
  printNoEvent(totalAmount) {
    Console.print('<증정 메뉴>');
    Console.print('없음');
    Console.print('<혜택 내역>');
    Console.print('없음');
    Console.print('<총혜택 금액>');
    Console.print('0원');
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${Utils.separateThousand(totalAmount)}원`);
    Console.print('<12월 이벤트 배지>');
    Console.print('없음');
  },
};

export default OutputView;
