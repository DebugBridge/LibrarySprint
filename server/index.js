const app = require('./app');
const PORT = process.env.PORT ||  8080;



app.listen(PORT , () => {
  console.log(`We are currently up on: ${PORT}`)
})