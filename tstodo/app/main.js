var next_id = 1;
var Shopping = /** @class */ (function () {
    //public price: number;
    function Shopping(list) {
        this.list = list;
        next_id++;
    }
    Shopping.prototype.add = function (list) {
        this.list.push(list);
    };
    Shopping.prototype.display = function () {
        console.log("items " + this.list);
        return this.list;
    };
    return Shopping;
}());
var list = new Shopping([{ id: next_id, item: "make assignment", status: "active" }]);
function add(value) {
    list.add({ id: next_id, item: value, status: "active" });
    next_id++;
}
function display() {
    var items;
    items = list.display();
    return items;
}
function completeTodo(id) {
    list.list[id - 1].status = "complete";
}
function deleteTodo(id) {
    list.list[id - 1].status = "delete";
}
function editTodo(id, val) {
    list.list[id - 1].item = val;
}
