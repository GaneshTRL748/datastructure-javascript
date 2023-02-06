//queue using linked list
class Node{
    data;
    next;
    constructor(value)
    {
        this.data=value;
    }
}
class Queue{
    front ;
    rear;
    enqueue(value)
    {
            if(this.rear==null)
            {
                this.rear=new Node(value);
                this.front=this.rear;
                this.rear.next=null;
            }
            else{
                 let temp=new Node(value);
                 this.rear.next=temp;
                 this.rear=temp;
            }
    }
    dequeue()
    {
        if(this.front==null)
        {
            console.log("Queue is empty");
        }
        else  if(this.front==this.rear)
        {
            console.log("Queued element:"+this.front.data);
            this.front=null;
            this.rear=null;
        }
        else{
            console.log("Queued element:",+this.front.data);
            this.front=this.front.next;
        }
    }
    printqueue()
    {
        let temp=this.front;
        if(temp==null)
        {
            console.log("Oueue is empty");
        }
        else{
        while(temp!=null)
        {
            console.log(temp.data);
            temp=temp.next;
        }
    }
    }
}
let list= new Queue();
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.dequeue();
list.dequeue();
list.enqueue(2);
list.printqueue();

