// load in puppeteer
const puppeteer = require('puppeteer')
const fs = require('fs')

// this wrapper means immediately execute this code
async function getHtml(url) {
  // wrapper to catch errors
  try {
    // create a new browser instance
    const browser = await puppeteer.launch()

    // create a page inside the browser
    const page = await browser.newPage()

    // navigate to a website
    await page.goto(url)

    const pageHtml = await page.content()

    // // write html to file
    // fs.writeFile('./page_html.html', pageHtml, err => {
    //   console.log('TCL: getHtml -> err', err)
    // })

    // all done, close this browser
    await browser.close()

    return pageHtml
  } catch (error) {
    // if something goes wrong
    // display the error message in console
    console.log(error)
  }
}

module.exports = {
  getHtml
}
