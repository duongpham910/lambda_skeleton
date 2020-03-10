const { myPromise } = require('./services/myPromise')

exports.handler = async (event, context, callback) => {
  try {
    let result = await myPromise()

    let response = {
      statusCode: 200,
      body: JSON.stringify({
        message: result
      })
    }

    callback(null, response)
  } catch (err) {
    console.log(err)
    return err
  }
}
