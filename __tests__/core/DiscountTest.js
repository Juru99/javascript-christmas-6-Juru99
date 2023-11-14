import Discount from '../../src/core/Discount';

describe('할인 계산 테스트', () => {
  test('크리스마스 디데이 할인', () => {
    expect(
      new Discount().calculateDiscount(15_000, 15, '양송이수프-2,제로콜라-1'),
    ).toEqual([['크리스마스 디데이 할인', 2_400]]);
  });

  test('평일 할인', () => {
    expect(
      new Discount().calculateDiscount(75_000, 28, '아이스크림-3,레드와인-1'),
    ).toEqual([['평일 할인', 6_069]]);
  });

  test('주말 할인', () => {
    expect(
      new Discount().calculateDiscount(
        116_000,
        29,
        '티본스테이크-2,제로콜라-2',
      ),
    ).toEqual([['주말 할인', 4_046]]);
  });

  test('특별 할인', () => {
    expect(
      new Discount().calculateDiscount(
        101_000,
        31,
        '타파스-4,바비큐립-1,샴페인-1',
      ),
    ).toEqual([['특별 할인', 1_000]]);
  });

  test('증정 이벤트', () => {
    expect(
      new Discount().calculateDiscount(
        264_000,
        26,
        '시저샐러드-3,해산물파스타-2,크리스마스파스타-2,레드와인-2',
      ),
    ).toEqual([['증정 이벤트', 25_000]]);
  });

  test('크리스마스 디데이 할인 + 평일 할인 + 특별 할인 + 증정 이벤트', () => {
    expect(
      new Discount().calculateDiscount(
        187_000,
        25,
        '양송이수프-2,바비큐립-1,크리스마스파스타-1,초코케이크-2,제로콜라-2,레드와인-1',
      ),
    ).toEqual([
      ['크리스마스 디데이 할인', 3_400],
      ['평일 할인', 4_046],
      ['특별 할인', 1_000],
      ['증정 이벤트', 25_000],
    ]);
  });
});
