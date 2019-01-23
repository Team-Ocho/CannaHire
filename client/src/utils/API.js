//api routes

var url = 'https://newsapi.org/v2/everything?q=+cannabis&' +
          'from=2019-01-09&' +
          'sortBy=popularity&' +
          'language=en&' +
          'apiKey=b114b107ba8241c38278feb922319478';

var req = new Request(url);

function getData (cb) {
    return fetch(req)
}

module.exports = getData
