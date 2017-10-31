window.onload=function () {
    var inp = document.getElementById("task");
    var div = document.getElementById("tasks");
    var addButton = document.getElementById("b1");
    var dispButton = document.getElementById("b2");
    addButton.onclick = function () {
        var val = inp.value;
        add(val);
        displayList();
    };
    dispButton.onclick = displayList;

    function displayList() {
        //var alist=document.getElementById("alist");
        div.innerHTML = "";
        var arrItems = display();
        arrItems.forEach(function (item) {
            createItem(item);
            // alist.innerHTML+="<li>"+item.item+"</li>";
        })
    }

    function createItem(item) {
        if (item.status == "delete")
            return;
        var newItem = document.createElement("p");
        newItem.innerHTML += "<h2>" + item.item + "</h2>";
        div.appendChild(newItem);
        if (item.status == "active") {
            var cbtn = document.createElement("button");
            cbtn.innerHTML = "complete";
            newItem.appendChild(cbtn);
            cbtn.setAttribute("class", "btn btn-success");
            cbtn.onclick = function () {
                completeTodo(item.id);
                displayList();
            }
            newItem.setAttribute("class", "bg-info");
        }
        if (item.status == "complete" || item.status == "active") {
            var dbtn = document.createElement("button");
            dbtn.innerHTML = "delete";
            dbtn.setAttribute("class", "btn btn-danger");
            newItem.appendChild(dbtn);
            dbtn.onclick = function () {
                deleteTodo(item.id);
                displayList();
            }
        }
        if (item.status == "complete")
            newItem.setAttribute("class", "bg-success");

        var ebtn = document.createElement("button");
        ebtn.innerHTML = "<span class='glyphicon glyphicon-pencil'></span> Edit";
        ebtn.setAttribute("class", "btn btn-info");
        newItem.appendChild(ebtn);

        ebtn.onclick = function () {
            var val = window.prompt("enter the new value");
            console.log(val);
            editTodo(item.id, val);
            displayList();
        }

    }
}
