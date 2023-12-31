export const MENU = [
  {
    name: '양송이수프',
    price: 6_000,
    category: '애피타이저',
  },
  {
    name: '타파스',
    price: 5_500,
    category: '애피타이저',
  },
  {
    name: '시저샐러드',
    price: 8_000,
    category: '애피타이저',
  },
  {
    name: '티본스테이크',
    price: 55_000,
    category: '메인',
  },
  {
    name: '바비큐립',
    price: 54_000,
    category: '메인',
  },
  {
    name: '해산물파스타',
    price: 35_000,
    category: '메인',
  },
  {
    name: '크리스마스파스타',
    price: 25_000,
    category: '메인',
  },
  {
    name: '초코케이크',
    price: 15_000,
    category: '디저트',
  },
  {
    name: '아이스크림',
    price: 5_000,
    category: '디저트',
  },
  {
    name: '제로콜라',
    price: 3_000,
    category: '음료',
  },
  {
    name: '레드와인',
    price: 60_000,
    category: '음료',
  },
  {
    name: '샴페인',
    price: 25_000,
    category: '음료',
  },
];

export const DATE = Object.freeze({
  weekday: [0, 1, 2, 3, 4],
  weekend: [5, 6],
  special: [3, 10, 17, 24, 25, 31],
  startDate: 1,
  endEvent: 25,
  endDate: 31,
});

export const PRICE = Object.freeze({
  minPrice: 10_000,
  christmasDDayStartDiscount: 1_000,
  christmasDDayDiscount: 100,
  week: 2_023,
  special: 1_000,
  payment: 120_000,
  freeGift: 25_000,
});

export const COUNT = Object.freeze({
  maxMenu: 20,
  minMenu: 1,
});

export const MESSAGE = Object.freeze({
  error: {
    visitDate: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    menu: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  },
});

export const NAME = Object.freeze({
  drink: '음료',
});
