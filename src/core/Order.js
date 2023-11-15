import Utils from '../utils/Utils';
import OutputView from '../views/OutputView';
import { MENU } from '../constants/constants';

class Order {
  calculateTotalAmount(menu) {
    const menus = Utils.separateMenu(menu);
    const totalAmount = this.#calculateMenu(menus);

    OutputView.printMenu(menus);
    OutputView.printTotalAmount(totalAmount);

    return totalAmount;
  }

  #calculateMenu(menus) {
    let totalAmount = 0;
    const [menuNames, menuCounts] = Utils.separateMenuNameCount(menus);
    const menuPrices = menuNames.map((menuName) => {
      const menuItem = MENU.find((item) => item.name === menuName);
      return menuItem ? menuItem.price : null;
    });

    menuPrices.forEach((menuPrice, i) => {
      totalAmount += menuPrice * menuCounts[i];
    });

    if (Number.isNaN(Number(totalAmount))) totalAmount = 0;
    return totalAmount;
  }
}

export default Order;
