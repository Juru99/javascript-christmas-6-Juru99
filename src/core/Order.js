import { MENU } from '../constants/constants';
import Utils from '../utils/Utils';
import OutputView from '../views/OutputView';

class Order {
  #menus;
  #totalAmount;

  constructor() {
    this.#totalAmount = 0;
  }

  calculateTotalAmount(menu) {
    this.#orderMenu(menu);
    this.#calculateMenu();
    OutputView.printTotalAmount(this.#totalAmount);

    return this.#totalAmount;
  }

  #orderMenu(menu) {
    this.#menus = Utils.separateMenu(menu);
    OutputView.printMenu(this.#menus);
  }

  #calculateMenu() {
    const menuNames = this.#menus.map((manuItem) => manuItem[0]);
    const menuCount = Array.from(
      this.#menus.map((manuItem) => manuItem[1]),
      Number,
    );
    const menuPrice = menuNames.map((menuName) => {
      const menuItem = MENU.find((item) => item.name === menuName);
      return menuItem ? menuItem.price : null;
    });

    menuPrice.forEach((item, i) => {
      this.#totalAmount += item * menuCount[i];
    });
  }
}

export default Order;
