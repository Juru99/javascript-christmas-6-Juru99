import { Console } from '@woowacourse/mission-utils';
import Utils from '../utils/Utils';

const OutputView = {
  printEventPlanner() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printPreview(visitDate) {
    Console.print(
      `12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },

  printMenu(menus) {
    Console.print('<주문 메뉴>');

    menus.forEach((menu) => {
      if (menu[0] === undefined || menu[1] === undefined) {
        Console.print('없음');
        return;
      }
      Console.print(`${menu[0]} ${menu[1]}개`);
    });
  },

  printTotalAmount(totalAmount) {
    Console.print('<할인 전 총주문 금액>');
    if (Number.isNaN(totalAmount)) totalAmount = 0;
    Console.print(`${Utils.separateThousand(totalAmount)}원`);
  },

  printGiveawayMenu(totalAmount) {
    let giveawayMenu = '없음';
    if (totalAmount >= 120_000) giveawayMenu = '샴페인 1개';

    Console.print('<증정 메뉴>');
    Console.print(giveawayMenu);
  },

  printBenefitDetails(totalBenefit) {
    Console.print('<혜택 내역>');

    for (const [benefit, amount] of Object.entries(totalBenefit)) {
      Console.print(`${benefit}: -${Utils.separateThousand(amount)}원`);
    }
  },

  printTotalBenefit(totalBenefit) {
    Console.print('<총혜택 금액>');
    Console.print(`-${Utils.separateThousand(totalBenefit)}원`);
  },

  printExpectedPaymentAmount(expectedPaymentAmount) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${Utils.separateThousand(expectedPaymentAmount)}원`);
  },

  printEventBadge(totalBenefit) {
    let eventBadge = '없음';

    if (totalBenefit >= 20000) eventBadge = '산타';
    else if (totalBenefit >= 10000) eventBadge = '트리';
    else if (totalBenefit >= 5000) eventBadge = '별';

    Console.print('<12월 이벤트 배지>');
    Console.print(eventBadge);
  },

  printNoEvent(totalAmount) {
    Console.print('<증정 메뉴>');
    Console.print('없음');
    Console.print('<혜택 내역>');
    Console.print('없음');
    Console.print('<총혜택 금액>');
    Console.print('0원');
    Console.print(
      `<할인 후 예상 결제 금액>\n${Utils.separateThousand(totalAmount)}원`,
    );
    Console.print('<12월 이벤트 배지>');
    Console.print('없음');
  },
};

export default OutputView;
