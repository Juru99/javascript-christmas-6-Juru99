class Utils {
  static calculateVisitDay(visitDate) {
    const date = new Date(`2023-12-${visitDate}`);

    return date.getDay();
  }

  static separateMenu(menus) {
    const orderMenu = [];

    String(menus)
      .split(',')
      .forEach((menu) => {
        orderMenu.push(menu.split('-'));
      });

    return orderMenu;
  }

  static separateMenuNameCount(orderMenu) {
    const menuNames = orderMenu.map((menuItem) => menuItem[0]);
    const menuCounts = Array.from(
      orderMenu.map((menuItem) => menuItem[1]),
      Number,
    );

    return [menuNames, menuCounts];
  }

  static separateThousand(amount) {
    return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default Utils;
