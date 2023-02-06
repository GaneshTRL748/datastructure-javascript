//stack using linked list
class Node{
    data;
    previous;
    constructor(value)
    {
        this.data=value;
    }
}
class Stack{
    top;
    push(value)
    {
           if(this.top==null)
           {
              this.top=new Node(value);
              this.top.previous=null;
           }
           else{
              let temp=new Node(value);
              temp.previous=this.top;
              this.top=temp;
           }
    }
    pop()
    {
        if(this.top==null)
        {
               console.log("Stack is empty");
        }
        else{
            console.log("Poped element:"+this.top.data);
            this.top=this.top.previous;
        }
    }
    printstack()
    {
        if(this.top==null)
        {
            console.log("Empty stack!!!");
        }
        else{
            console.log("Stack elements are:");
         let temp=this.top;
         while(temp!=null)
         {
            console.log(temp.data);
            temp=temp.previous;
         }
        }
    }
}
let list = new Stack();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();
list.push(4);
list.pop();
list.printstack();
