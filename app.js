const TOKEN = '604298298:AAEttIlpVw_Pko6aKMyp91w1XXoVlN0EGjk'

var express = require('express');
var app = express();
var firebase = require('firebase');
var database = require('firebase/database');
  var config = {
    apiKey: "AIzaSyBZsHvLCSzHzC0dvyglfGgow1ytR1dlj6o",
    authDomain: "botside-f8594.firebaseapp.com",
    databaseURL: "https://botside-f8594.firebaseio.com",
    projectId: "botside-f8594",
    storageBucket: "",
    messagingSenderId: "521754962365"
  };
  firebase.initializeApp(config);
var admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});
var db = firebase.database();
var tasks = [];
function getTasks() {
  return db.ref('/tasks/').once('value').then(function(snapshot) {
  tasks.push(snapshot.val());
  console.log(snapshot.val());
  });
}
function addTask(task,date) {
  if(!date) {
    date = new Date();
    date = date.toString();
  }
  db.ref('/tasks/').set({
    task: task,
    date: date
    });
}
getTasks();
console.log(tasks);
function addTask() {}
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.render('index');
});
const Bot = require('node-telegram-bot-api');
const bot = new Bot(TOKEN, {polling: true});
var addingTask = false;

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});
addTask('holla',null);
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if(addingTask) {
    addTask(msg.text.toString(),null);
  } else if(msg.text !== '/add') {
    bot.sendMessage(chatId, 'Hello sir use /add to add a task');
  }
});
bot.onText(/\/add/,(msg) => {
  bot.sendMessage(msg.chat.id, "add your task...");
  addingTask = true;
});
console.log(db.ref('/tasks/'));


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
