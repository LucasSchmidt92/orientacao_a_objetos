export class Node<T>{
    protected value:T;
    protected children: Node<T>[]=[];

    constructor(valueConst:T){
        this.value = valueConst
    }
    addChildren(NodeT:Node<T>){
        this.children.push(NodeT);
    }

    getChildren():Node<T>[]{
        return this.children
    }

}

const rootNode = new Node ("A");
const rootNodeB = new Node ("B");
const rootNodeC = new Node ("C");

rootNode.addChildren(rootNodeB);
rootNode.addChildren(rootNodeC);

console.log(rootNode.getChildren());
console.log(rootNodeB.getChildren())