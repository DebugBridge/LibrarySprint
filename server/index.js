const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`We are currently up on: ${PORT}`);
});
