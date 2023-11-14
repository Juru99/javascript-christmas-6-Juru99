import { MENU } from '../constants/constants';
import Utils from '../utils/Utils';

class Validator {
  validateVisitDate(visitDate) {
    this.#validateIsInteger(visitDate);
    this.#validateNotRange(visitDate);
  }

  validateMenu(menu) {
    const orderMenu = Utils.separateMenu(menu);
    const menuNames = orderMenu.map((menuItem) => menuItem[0]);
    const menuCount = Array.from(
      orderMenu.map((menuItem) => menuItem[1]),
      Number,
    );
    const allMenuName = MENU.map((item) => item.name);

    this.#validateNoMenu(menuNames, allMenuName);
    this.#validateLessThan1(menuCount);
    this.#validateDuplication(menuNames);
    this.#validateOnlyDrink(menuNames);
    this.#validateMenuCount(menuCount);
  }

  #validateIsInteger(input) {
    if (!Number.isInteger(Number(input)))
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  }

  #validateNotRange(input) {
    if (Number(input) < 1 || Number(input) > 31)
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  }

  #validateNoMenu(menuNames, allMenuName) {
    menuNames.forEach((menuName) => {
      if (!allMenuName.includes(menuName)) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );
      }
    });
  }

  #validateLessThan1(menuCount) {
    menuCount.forEach((v) => {
      if (Number.isNaN(Number(v)) || v < 1)
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );
    });
  }

  #validateDuplication(menuNames) {
    if (menuNames.length !== new Set(menuNames).size)
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  }

  #validateOnlyDrink(menuNames) {
    const drink = MENU.filter((item) => item.category === '음료').map(
      (item) => item.name,
    );
    const noDrinkMenuNames = menuNames.filter(
      (value) => !drink.includes(value),
    );

    if (noDrinkMenuNames.length === 0)
      throw new Error('[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.');
  }

  #validateMenuCount(menuCount) {
    const totalCount = menuCount.reduce((acc, cur) => acc + cur, 0);

    if (totalCount > 20)
      throw new Error(
        '[ERROR] 메뉴는 한 번에 최대 20개까지 주문이 가능합니다. 다시 입력해 주세요.',
      );
  }
}

export default Validator;
