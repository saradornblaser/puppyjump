const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.log(err)
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
