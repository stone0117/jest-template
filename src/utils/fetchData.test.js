import {fetchData} from './fetchData'

// test('fetchData', (done) => {
//   fetchData((data) => {
//     // console.log(`data.length  = `, data.length)
//     expect(data.length).toBe(100)
//     done()
//   })
// })

test('fetchData', async () => {
  const res = await fetchData()

  // expect(res.length).toBe(99);
  expect(res.length).toBe(100);

})
