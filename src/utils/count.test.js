import {plus, increase, decrease, minus} from './count'

test('测试加法 3+7', () => {
  expect(plus(3, 7)).toBe(10)
})

test('测试减法 7-3', () => {
  expect(minus(7, 3)).toBe(4)
})

test('测试加法 递增', () => {
  expect(increase(5)).toBe(6)
})

test('测试减法 递减', () => {
  expect(decrease(5)).toBe(4)
})
