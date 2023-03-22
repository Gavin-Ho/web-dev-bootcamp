//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');

const itemsSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model('Item', itemsSchema);

const buyFood = new Item({
  name: "Welcome to your todolist!",
});

const eatFood = new Item({
  name: "Hit the + button to add a new item",
});

const Food = new Item({
  name: "<-- Hit the checkbox to delete an item",
});

const defaultItems = [buyFood, eatFood, Food];

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model('List', listSchema);

app.get("/", function (req, res) {

  Item.find().then(function (foundItems) {

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems);
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }

  });


});

app.get('/:customListName', function (req, res) {

  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName }).then(function (foundList) {
    if (!foundList) {
      const list = new List({
        name: customListName,
        items: defaultItems,
      });

      list.save();
      res.redirect('/' + customListName);
    } else {
      res.render('list', { listTitle: foundList.name, newListItems: foundList.items })
    };
  });


});


app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const inputItem = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    inputItem.save();
    res.redirect('/');
  } else {
    List.findOne({ name: listName }).then(function (foundList) {
      foundList.items.push(inputItem);
      foundList.save();
      res.redirect('/' + listName);
    });
  }
});

app.post("/delete", function (req, res) {

  const checkedItemID = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemID).then(function () {
      res.redirect('/');
    });
  } else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemID } } }).then(function (foundList) {
      res.redirect('/' + listName);
    });

  }


});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
