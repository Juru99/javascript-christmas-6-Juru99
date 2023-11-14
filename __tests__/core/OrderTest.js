import Order from '../../src/core/Order';

describe('총주문 금액 계산', () => {
  test('할인 전 총주문 금액 테스트', () => {
    expect(
      new Order().calculateTotalAmount(
        '티본스테이크-3,타파스-2,아이스크림-2,시저샐러드-1,크리스마스파스타-1,샴페인-1',
      ),
    ).toBe(244000);
  });
});
