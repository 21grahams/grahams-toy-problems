function LinkedListNode(data){
  this.next = null
  this.data = data
}

LinkedListNode.prototype.addNodeToEnd = function(data){
  var runner = this

  while(runner.next) {
      runner = runner.next
  }

  runner.next = new LinkedListNode(data)

  return this
}

LinkedListNode.prototype.traverse = function(accumulator){
  if(!this.next)
      return this.data

   var result = accumulator(this.next.traverse(accumulator), this.data)

  return result
}

// they dont have to chain
var list = new LinkedListNode(1)
.addNodeToEnd(2)
.addNodeToEnd(3)
.addNodeToEnd(4)
.addNodeToEnd(5)

// result is 15, we sum all the nodes!
var sum = list.traverse(function(accumulated, current){
  return accumulated + current
})

console.log(sum)