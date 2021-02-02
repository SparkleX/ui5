const Koa = require("koa");
const KoaLogger = require("koa-logger");
const KoaMount = require("koa-mount");
const KoaStatic  = require("koa-static");
const app = new Koa();
app.use(KoaLogger());
app.use(KoaMount("/", KoaStatic("src")));
const port = process.env.PORT || 3000;
app.listen(port);