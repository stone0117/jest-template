import {plus, increase, decrease, minus} from './count'

test('测试加法 3+7', () => {
  expect(plus(3, 7)).toBe(10)
})

test('测试对象内容相等', () => {
  const obj = { name: 'stone' }
  expect(obj).toEqual({ name: 'stone' })
})

test('toBeUndefined匹配器', () => {
  const obj = undefined
  expect(obj).toBeUndefined()
})

test('toBeNull匹配器', () => {
  const obj = null
  expect(obj).toBeNull()
})

test('toBeDefined匹配器', () => {
  {
    const obj = null
    expect(obj).toBeDefined()
  }

  {
    const obj = 1
    expect(obj).toBeDefined()
  }
})

test('toBeTruthy', () => {
  const a = 1
  expect(a).toBeTruthy()
})

test('toBeFalsy', () => {
  const a = 0
  expect(a).toBeFalsy()
})

test('not toBeTruthy', () => {
  const a = 0
  expect(a).not.toBeTruthy()
})

test('not toBeFalsy', () => {
  const a = 1
  expect(a).not.toBeFalsy()
})

test('toBeGreaterThan', () => {
  const a = 1
  expect(a).toBeGreaterThan(0)
})

test('toBeLessThan', () => {
  const a = 1
  expect(a).toBeLessThan(2)
})

test('toBeGreaterThanOrEqual', () => {
  const a = 1
  expect(a).toBeGreaterThanOrEqual(0)
})

test('toBeLessThanOrEqual', () => {
  const a = 1
  expect(a).toBeLessThanOrEqual(2)
})

test('toBeCloseTo', () => {
  const a = 0.1
  const b = 0.2
  expect(a + b).toBeCloseTo(0.3)
})

test('toMatch', () => {
  const str = 'https://www.baidu.com'
  expect(str).toMatch(/baidu/)
})

test('toContain', () => {
  const names = ['江户川柯南', '工藤新一', '毛利兰', '毛利小五郎', '阿笠博士', '灰原哀', '吉田步美', '圆谷光彦', '小岛元太', '铃木园子', '服部平次', '工藤优作', '工藤有希子', '怪盗基德']
  expect(names).toContain('工藤新一')

  const set = new Set(names)
  expect(set).toContain('工藤新一')
})

test('toThrow', () => {
  // expect().toBe(); // eoo eo
  function throwNewErrorFunc() {
    throw new Error('this is a new error')
  }
  expect(throwNewErrorFunc).toThrow('this is a new error') // 异常message 相匹配
})


