/**
 * A Lambda function that returns a static string
 */
exports.handler = (event, context, callback) => {
  // If you change this message, you will need to change hello-from-lambda.test.js
  const message = 'Hello from Lambda!';

  // All log statements are written to CloudWatch
  console.log(`${message}`);

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: message
  })
}
