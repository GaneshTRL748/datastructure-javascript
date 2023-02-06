class node{
    data;
    next;
    constructor(data)
    {
        this.data=data;
    }
}
class createList{
      head=null;
      count=0;
    insertfirst(value)
    {
        let temp;
        if(this.head==null)
        {
            this.head=new node(value);
            this.head.next=null;
            this.count++;
        }
        else{
             temp=new node(value);
             temp.next=this.head;
             this.head=temp;
             this.count++;
        }
    }
    insertlast(value)
    {
       if(this.count==0)
       {
             this.head=new node(value);
             this.head.next=null;
             this.count++;
       }
       else{
              let temp2=0;
               let temp1=this.head;
            while(temp2<this.count-1)
             {
                 temp1=temp1.next;
                 temp2++;
            }
           temp1.next=new node(value);
           this.next=null;
           this.count++;
      }
    }
    insertatposition(value,index)
    {
          let temp1=this.head;
          let temp2=0
          while(temp2<index-1)    
          {
            temp1=temp1.next;
            temp2++;
          }
          let nextnode1=temp1.next;
          temp1.next=new node(value);
          temp1.next.next=nextnode1;
          this.count++;
    }
    printlists(){
        var printtemp = this.head;
        if(printtemp == null){
            console.log("Is empty!")
        }else{
        while(printtemp != null ){
            console.log(printtemp.data)
            printtemp = printtemp.next;
        }
    }
    }
    deletefirst()
    {
        if(this.count==0)
        {
            console.log("Empty list");
        }
        else{
            this.head=this.head.next;
            console.log(this.head.data);
            this.count--;
        }
    }
    deleteatpos(index)
    {
       let temp1=this.head;
       let temp2=0;
       while(temp2<index-1)
       {
        temp1=temp1.next;
        temp2++;
       }
       temp1.next=temp1.next.next;
       this.count--;
    }
    deletelast()
    {
        if(this.count==0)
        {
            console.log("Empty list");
        }
        else{
               let temp2=0;
               let temp1=this.head;
                 while(temp2<this.count-2)
                 {
                      temp1=temp1.next;
                      temp2++;
                 }
                 temp1.next=null;
                 this.count--;    
        }
    }
}
var list=new createList();
list.insertlast(1);
list.insertlast(2);
list.insertfirst(0);
list.insertfirst(0.5);
list.insertlast(3);
list.insertlast(4);
list.insertfirst(0.1);
list.insertatposition(1.5,4);
list.insertlast(5);
list.deletefirst();
console.log("head:"+list.head.data);
list.deletelast();
list.deleteatpos(3);
list.insertlast(6);
list.insertfirst(-1);
list.printlists();