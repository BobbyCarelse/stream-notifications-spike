const GetStream = require('getstream')

const GetStreamClient = GetStream.connect(
  process.env.GET_STREAM_API_KEY,
  process.env.GET_STREAM_API_SECRET,
  process.env.GET_STREAM_APP_ID
)

const updateApp = async () => {}

module.exports = { GetStreamClient }
