// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// exports.handler = async (event, context) => {
//   try {
//     const subject = event.queryStringParameters.name || 'World'
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Hello ${subject}` })
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (err) {
//     return { statusCode: 500, body: err.toString() }
//   }
// }

const chromium = require('chrome-aws-lambda')

exports.handler = async (event, context) => {
  try {
    let browser = await chromium.puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    
    await page.setViewport({ width: 1024, height: 620 });
    await page.goto("https://wirdstpkulturhauptstadt2024.grooovinger.com");
    let s = await page.screenshot({ path: 'buddy-screenshot.png', type: 'png' });
    
    return {
      statusCode: 200,
      headers: {
        'Content-type': 'image/jpeg'
      },
      body: s.toString('base64'),
      isBase64Encoded: true
    }
    
    browser.close();
    console.log('Done!');
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
