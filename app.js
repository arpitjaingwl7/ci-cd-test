const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello! My CI/CD pipeline is working!');
});

// We export it so we can test it
module.exports = app; 

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}