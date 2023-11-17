import Validator from '../core/Validator';
import { Console } from '@woowacourse/mission-utils';

const InputView = {
  /**
   * 방문 날짜를 입력받는 함수
   */
  async readDate() {
    const visitDate = await Console.readLineAsync(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)'
    );

    try {
      new Validator().validateVisitDate(visitDate);
    } catch (error) {
      Console.print(error.message);
    }
  },

  /**
   * 메뉴를 입력받는 함수
   */
  async readMenu() {
    const menu = await Console.readLineAsync(
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)'
    );

    try {
      new Validator().validateMenu(menu);
    } catch (error) {
      Console.print(error.message);
    }
  },
};

export default InputView;
