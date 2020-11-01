const request = require('supertest')
const app = require('../server')
import "babel-polyfill"

describe("Base Test", () => {
	it("should test that tests are working", () => {
		expect(true).toBe(true)
	})
});

describe('Get Endpoints', () => {
  it('should get 10 random trivia questions', async () => {
    const res = await request(app)
      .get('/trivia')
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(10)
  })
})

describe('Get Score', () => {
  it('should get scores', async () => {
    const res = await request(app)
      .get('/score')
    expect(res.statusCode).toEqual(200)
  })
})
