interface shoppinglist {
    id:number;
    item:string,
    status:string
    //price:number
}
var next_id=1;
class Shopping {
    public list: shoppinglist[];
    //public price: number;
    constructor(list:shoppinglist[])
    {this.list=list;
    next_id++;
    }
    add(list: shoppinglist)  //think of shoppinglist as a structure being imposed
    {
        this.list.push(list);
    }

    display()
    {console.log(`items ${this.list}`);
        return this.list;

    }
}

var list=new Shopping([{id:next_id,item:"make assignment",status:"active"}]);
function add(value:string)
{
    list.add({id:next_id,item: value,status:"active"});
    next_id++;
}
function display() {
    var items:shoppinglist[];
    items=list.display();
    return items;
}
function completeTodo(id:number)
{
    list.list[id-1].status="complete";
}
function deleteTodo(id:number)
{
    list.list[id-1].status="delete";
}
function editTodo(id:number, val:string)
{
    list.list[id-1].item=val;
}