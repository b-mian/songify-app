// requiring these modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');
// use express
const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
// port number
const port = process.env.PORT || 4000;

// Your Spotify developer client id
let client_id = process.env.client_id; 
let client_secret = process.env.client_secret;
// Where to re-direct after login
let redirect_uri = process.env.redirect_uri; 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.post('/refresh', (req, res) => {
  //CHANGE REDIRECT_URI BACK AFTER
  let credentials = {
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: redirect_uri
  };
  const spotifyAPI = new SpotifyWebApi(credentials);
  spotifyAPI.refreshAccessToken().then(
    (data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in
      })
      
    }
  ).catch(() => {
    res.sendStatus(400);
  })

})

app.post('/login', (req, res) => {
  const code = req.body.code;
  let credentials = {
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: redirect_uri
  };
  const spotifyAPI = new SpotifyWebApi(credentials);
  spotifyAPI
  .authorizationCodeGrant(code)
  .then(data => {
    res.json({
      // Set the access token on the API object to use it in later calls
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
  })
  .catch(() => {
    res.sendStatus(400);
  })
  })
})

// port on which app is running
app.listen(process.env.PORT || 4000, () => {
  console.log(`Example app listening at port ${port}`);
});

