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
const port = process.env.PORT || 3001;

// Your Spotify developer client id
let client_id = '4362dfe6f5c244dbbc69cff0883518c4'; 
// Where to re-direct after login
let redirect_uri = 'http://localhost:3000'; 

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  let credentials = {
    clientId: client_id,
    clientSecret: '1b0d43167e72418ab2e44ff384357c16',
    redirectUri: redirect_uri,
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
  console.log(code);
  let credentials = {
    clientId: client_id,
    clientSecret: '1b0d43167e72418ab2e44ff384357c16',
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

// port on which app is running locally
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})