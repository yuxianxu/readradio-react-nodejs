const express = require("express")
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoute = require("./routes/auth");
const passportSetup = require("./passport");
const app = express();
const cors = require("cors")

app.use(
    cookieSession({ name: "session", keys: ["ReadRadio"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);

const myNotesRoute = require("./routes/mynotes")

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())

app.use('/mynotes', myNotesRoute);

app.get('/', (req, res) => {
    res.send('Welcome home')
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
