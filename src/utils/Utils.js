class Utils {
  /*
   * @param {number} visitDate - 방문 날짜
   * @returns {number} date.getDay() - 방문 요일
   */
  static calculateVisitDay(visitDate) {
    const date = new Date(`2023-12-${visitDate}`);

    return date.getDay();
  }

  /*
   * @param {string} menus - 주문 메뉴
   * @returns {array} orderMenu - 주문 메뉴명과 개수를 분리한 배열
   */
  static separateMenu(menus) {
    const orderMenu = [];

    String(menus)
      .split(',')
      .forEach((menu) => {
        orderMenu.push(menu.split('-'));
      });

    return orderMenu;
  }

  /*
   * @param {array} orderMenu - 주문 메뉴명과 개수를 분리한 배열
   * @returns {array} [menuNames, menuCounts] - 주문 메뉴명 배열과 주문 개수 배열
   */
  static separateMenuNameCount(orderMenu) {
    const menuNames = orderMenu.map((menuItem) => menuItem[0]);
    const menuCounts = Array.from(
      orderMenu.map((menuItem) => menuItem[1]),
      Number
    );

    return [menuNames, menuCounts];
  }

  /*
   * @param {number} amount - 금액
   * @returns {string} String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',') - 천 단위 금액 문자열
   */
  static separateThousand(amount) {
    return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default Utils;
