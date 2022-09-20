const { GetStreamClient } = require('../../services/GetStream')

const validateGetStreamRequests = (req, res, next) => {
  // const valid = GetStreamClient.verifyWebhook(req.rawBody, req.headers['x-signature'])

  // console.log('GetStreamClient => ', Object.keys(GetStreamClient))

  // if(!valid){
  //     throw Error('Invalid stream requests')
  // }

  return next()
}

module.exports = { validateGetStreamRequests }
