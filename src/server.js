import express  from 'express';
import cookieParser from 'cookie-parser';
import React    from 'react';
import {getHeaders, initialize} from 'redux-oauth';
import {match, RouterContext} from 'react-router';

const app = express();

app.use(cookieParser());

app.use((req, res) => {
    return res.end(renderHTML());
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML() {
    return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
          <script type="application/javascript">
            window.REDUX_INITIAL_STATE = { };
          </script>
      </head>
      <body>
        <div id="react-view"><!-- root component --></div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on: http://127.0.0.1:${PORT}`);
});
