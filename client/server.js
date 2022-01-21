const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5050;

app.use(express.static(path.resolve(__dirname, './build')));
app.get('/.well-known/acme-challenge/aR8pzSmsDD5-u4rbd_GiDLb47XOz3JCeYGvs2b3fFwA', (req, res) => {
    res.send('aR8pzSmsDD5-u4rbd_GiDLb47XOz3JCeYGvs2b3fFwA.vHLn0LStE7CnyM_FasQhpmNRI9rK8uiwpFN6TcUF3Ck');
})

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => {
    console.error(`Node server: listening on port ${PORT}`);
});