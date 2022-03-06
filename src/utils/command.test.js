import {plus, increase, decrease, minus} from './count'

test('测试加法 3+7', () => {
  expect(plus(3, 7)).toBe(10)
})

// 使用 终端 f 选项
test('toThrow', () => {
  function throwNewErrorFunc() {
    throw new Error('this is a new error')
  }
  expect(throwNewErrorFunc).toThrow('this is a new error') // 异常message 相匹配
})


