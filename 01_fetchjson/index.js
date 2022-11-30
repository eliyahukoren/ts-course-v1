"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
var logTodo = function (id, title, completed) {
    console.log("\n\t\tThe todo with id: ".concat(id, ",\n\t\thas a title of: ").concat(title, "\n\t\tis it finished: ").concat(completed, "\n\t"));
};
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logTodo(id, title, completed);
});
