class Utils {
  static calculateVisitDay(visitDate) {
    const date = new Date(`2023-12-${visitDate}`);

    return date.getDay();
  }

  static separateMenu(menu) {
    const orderMenu = [];

    String(menu)
      .split(',')
      .forEach((v) => {
        orderMenu.push(v.split('-'));
      });

    return orderMenu;
  }

  static separateThousand(amount) {
    return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default Utils;
