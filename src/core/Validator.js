import Utils from '../utils/Utils';
import { COUNT, DATE, MENU, MESSAGE, NAME } from '../constants/constants';

class Validator {
  /**
   * 방문 날짜 검증 함수
   * @param {string} visitDate - 방문 날짜
   */
  validateVisitDate(visitDate) {
    this.#validateIsInteger(visitDate);
    this.#validateNotRange(visitDate);
  }

  /**
   * 메뉴 검증 함수
   * @param {string} menu - 메뉴
   */
  validateMenu(menu) {
    const orderMenu = Utils.separateMenu(menu);
    const [menuNames, menuCounts] = Utils.separateMenuNameCount(orderMenu);
    const allMenuName = MENU.map((item) => item.name);

    this.#validateNoMenu(menuNames, allMenuName);
    this.#validateLessThan1(menuNames, menuCounts);
    this.#validateDuplication(menuNames);
    this.#validateOnly(menuNames);
    this.#validateMenuCount(menuCounts);
  }

  /**
   * 입력값이 정수인지 검증하는 함수
   * @param {string} input - 입력값
   */
  #validateIsInteger(input) {
    if (!Number.isInteger(Number(input))) {
      throw new Error(MESSAGE.error.visitDate);
    }
  }

  /**
   * 월초부터 월말 사이의 날짜가 입력되었는지 검증하는 함수
   * @param {string} visitDate - 방문 날짜
   */
  #validateNotRange(visitDate) {
    if (
      Number(visitDate) < DATE.startDate ||
      Number(visitDate) > DATE.endDate
    ) {
      throw new Error(MESSAGE.error.visitDate);
    }
  }

  /**
   * 메뉴판에 없는 메뉴인지 검증하는 함수
   * @param {array} menuNames - 주문한 메뉴명들
   * @param {array} allmenuName - 모든 메뉴명
   */
  #validateNoMenu(menuNames, allMenuName) {
    menuNames.forEach((menuName) => {
      if (!allMenuName.includes(menuName)) {
        throw new Error(MESSAGE.error.menu);
      }
    });
  }

  /**
   * 메뉴당 최소 1개의 주문을 하였는지 검증하는 함수
   * @param {array} menuNames - 주문한 메뉴명들
   * @param {array} menuCounts - 주문한 메뉴 개수들
   */
  #validateLessThan1(menuNames, menuCounts) {
    menuCounts.forEach((menuCount) => {
      if (Number.isNaN(Number(menuCount)) || menuCount < COUNT.minMenu) {
        throw new Error(MESSAGE.error.menu);
      }
    });
    if (menuNames.length !== menuCounts.length) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  /**
   * 중복하여 주문했는지 검증하는 함수
   * @param {array} menuNames - 주문한 메뉴명들
   */
  #validateDuplication(menuNames) {
    if (menuNames.length !== new Set(menuNames).size) {
      throw new Error(MESSAGE.error.menu);
    }
  }

  /**
   * 음료만 주문하였는지 검증하는 함수
   * @param {array} menuNames - 주문한 메뉴명들
   */
  #validateOnly(menuNames) {
    const menus = MENU.filter((item) => item.category === NAME.drink).map(
      (item) => item.name
    );
    const noMenuNames = menuNames.filter(
      (menuName) => !menus.includes(menuName)
    );

    if (noMenuNames.length === 0)
      throw new Error(
        `[ERROR] ${NAME.drink}만 주문할 수 없습니다. 다시 입력해 주세요.`
      );
  }

  /**
   * 메뉴를 20개 초과 주문하였는지 검증하는 함수
   * @param {array} menuCounts - 주문한 메뉴 개수들
   */
  #validateMenuCount(menuCount) {
    const totalCount = menuCount.reduce((acc, cur) => acc + cur, 0);

    if (totalCount > COUNT.maxMenu)
      throw new Error(
        `[ERROR] 메뉴는 한 번에 최대 ${COUNT.maxMenu}개까지 주문이 가능합니다. 다시 입력해 주세요.`
      );
  }
}

export default Validator;
