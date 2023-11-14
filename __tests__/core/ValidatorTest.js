import Validator from '../../src/core/Validator';

describe('방문 날짜 테스트', () => {
  const validator = new Validator();
  test.each([3.14, -5, 3 / 5, 'true', '', NaN, '이십오'])(
    '정수가 아닌 경우',
    (visitDate) => {
      expect(() => validator.validateVisitDate(visitDate)).toThrow(
        '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
      );
    },
  );
  test.each([0, 32])('1 이상 31 이하의 숫자가 아닌 경우', (visitDate) => {
    expect(() => validator.validateVisitDate(visitDate)).toThrow(
      '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    );
  });
});

describe('메뉴 테스트', () => {
  const validator = new Validator();
  test('고객이 메뉴판에 없는 메뉴를 입력하는 경우', () => {
    expect(() =>
      validator.validateMenu('양송이수프-1,치킨-2,초코케이크-1,레드와인-1'),
    ).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('메뉴의 개수가 1 이상의 숫자가 아닌 경우', () => {
    expect(() =>
      validator.validateMenu('양송이수프-0,초코케이크--1,레드와인-1'),
    ).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('메뉴 형식이 예시와 다른 경우', () => {
    expect(() =>
      validator.validateMenu('양송이 수프-1,초코 케이크-1,레드 와인-1'),
    ).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('중복 메뉴를 입력한 경우', () => {
    expect(() =>
      validator.validateMenu(
        '양송이수프-1,초코케이크-1,레드와인-1,양송이수프-1',
      ),
    ).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('음료만 주문한 경우', () => {
    expect(() => validator.validateMenu('제로콜라-4')).toThrow(
      '[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.',
    );
  });

  test.each([
    '해산물파스타-21',
    '양송이수프-4,초코케이크-4,레드와인-2,제로콜라-4,시저샐러드-2,바비큐립-4,타파스-3',
  ])('20개 초과 메뉴를 주문한 경우', (menu) => {
    expect(() => validator.validateMenu(menu)).toThrow(
      '[ERROR] 메뉴는 한 번에 최대 20개까지 주문이 가능합니다. 다시 입력해 주세요.',
    );
  });
});
