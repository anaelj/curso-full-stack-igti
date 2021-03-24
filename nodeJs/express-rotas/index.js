import express from "express";

const app = express();
app.use(express.json());

app.all("/testAll", (req, res) => {
    res.send(req.method);
});

app.get("/teste?", (_req, res) => {
    res.send("/teste?");
})

app.get("/buzz+", (_req, res) => {
    res.send("/buzz+");
})

app.get("/one*Blue", (req, res) => {
    res.send(req.path);
})

app.get("/testParam/:id/:a?", (req, res) => {
    res.send(req.params.id + " " + req.params.a);
})

app.post("/test(ing)?", (req, res) => {
    res.send(req.path);
})

app.post("/testBody", (req, res) => {
    res.send(req.body);
})

// parametros via query

app.get("/testQuery", (req, res) => {
    res.send(req.query);
})
// next
app.get("/testMultipleHandlers", (req, res, next) => {
    console.log('01');
    next();
}, (req, res) => {
    console.log('02');
    res.end();
})

app.route("/testRoute")
    .get((req, res) => {
        res.send("testGet")
    })
    .post((req, res) => {
        res.send("testPost")
    })

app.listen(3000, () => {
    console.log("api started");
})