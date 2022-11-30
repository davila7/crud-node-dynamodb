
const axios = require('axios');
require('dotenv').config()

const url = process.env.URL
test("products success", async () => {
    const res = await axios.get(`${url}/products`)
    expect(res.status).toEqual(200)
})