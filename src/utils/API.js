//api routes

var url = 'https://newsapi.org/v2/everything?q=cannabis&medicalmarijuana' +
          'q=Apple&' +
          'from=2019-01-09&' +
          'sortBy=popularity&' +
          'apiKey=b114b107ba8241c38278feb922319478';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
