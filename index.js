import express from "express";
import pg from "pg";

const app = express();
const db = new pg.Client({
    user:"postgres",
    host : "localhost", 
    database : "elysianbytes",
    password : "n0rthgang!",
    port: 5432
});

db.connect();

db.query("SELECT * FROM cakes", (err, res) => {
    if(err) {
        console.log("Error " + err.stack);
    }
    else {
        items = res.rows;
    }
    db.end();
})

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

let items = []


app.get("/", (req, res) => {
    res.render("index.ejs", {items : items});
})

app.post("/login", (req, res) => {
    if(req.body.username === "Ampi") {
        if(req.body.password === "Nabunturan") {
            console.log("Success");
        }
    }
})

app.listen(3000, () => {
    console.log("listening on port 3000");

})