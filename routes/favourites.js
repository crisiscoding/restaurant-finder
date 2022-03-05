//copied from my own clothes route

var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", async (req, res) => {
  console.log("we are in get");
  try {
    let results = await db("SELECT * FROM favourites ORDER BY id ASC;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* router.get("/:id", async (req, res, next) => {
  
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM favourites WHERE  id = ${id}`);
    if (result.data.length === 1) {
      res.send(result.data);
    } else {
      res.status(404).send({ error: err.message });
    }
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
}); */

router.post("/", async (req, res) => {
  let { name, website, cuisine, notes } = req.body;

  let sql = `
  INSERT INTO favourites ( name, website, cuisine, notes) 
    VALUES ('${name}','${website}','${cuisine}','${notes}');
  `;

  try {
    await db(sql);

    let result = await db("SELECT * FROM favourites");

    res.send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message }, "***on catch");
  }
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM  WHERE favourites id = ${id}`);
    if (result.data.length === 1) {
      let { name, website, cuisine, notes } = req.body;

      let sql = `UPDATE clothes 
      SET name= '${name}', website= '${website}', cuisine= '${cuisine}', notes= '${notes}' 
      WHERE id = ${id} 
      `;

      await db(sql);
      result = await db("SELECT * FROM favourites");
      res.send(result.data);
    } else {
      res.status(404).send("*****else in put", { error: err.message });
    }
  } catch (err) {
    res.status(404).send("*****catch in put", { error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM favourites WHERE  id = ${id}`);

    if (result.data.length === 1) {
      await db(`DELETE FROM favourites WHERE id = ${id}`);
      result = await db("SELECT * FROM favourites");
      res.send(result.data);
    } else {
      res
        .status(404)
        .send({ error: "Item not found, there is nothing with that id" });
    }
  } catch (err) {
    res.status(500).send("catch error on delete", { error: err.message });
  }
});

module.exports = router;
