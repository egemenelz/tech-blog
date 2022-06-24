const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

const PORT = process.env.PORT || 3001;

// Session object for creating session cookies
const s = {
  secret: 'SecretSuperSecret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(s));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

// CONNECTION TO DATABASE AND SERVER
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`==> ${PORT} listening on the SERVER`));
});

