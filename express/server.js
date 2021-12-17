const express = require('express');
const PORT = process.env.PORT || 3001;

//connect the models see what they console

const app = express();
app.get('/', (req, res) => {
  console.log();
  res.send('Pokemon is cool!');
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
