# Data-Structures

![](https://i.pinimg.com/originals/e0/dd/3b/e0dd3bf212283a91a392972aa59caf9c.jpg)

Data structures are a variety of containers and organized data storage systems. Data structures are data organization, management, and storage formats with different usages and efficiencies. 

*A data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.*

Different data structures are well suited for serving different functions.

## Arrays

Arrays are the most famous and widely used data type.

### Basic functions

 - Insert at a specific index
 - Get from a specific index
 - Delete from a specific index
 - Find length

### Advantages of arrays

- Arrays can store multiple data points of any type
- The ability to access information from any point in the array

### Disadvantages of arrays

- Inserting and deleting can be costly operations, as they require reindexing the other elements in the array.

## Stacks
Stacks, like arrays, are also a collection of similar data. In a stack though, data is only added or removed only from the top of the stack. A Stack is a Last In First Out (LIFO) data structure. 

![](https://cdn-media-1.freecodecamp.org/images/BP-lD2OxkMbIQI2iZD-jxgIPlANlsMTqwnLP)

### Basic functions

- Push - Enter data at the top of the stack
- Pop - Remove data from the top of the stack
- Check if the stack is empty
- Peek - Access the data at the top of the stack without removing it

### Advantages of stacks

- Stacks can store multiple data points of any type
- All stack operations take O(1) time complexity

### Disadvantages of stacks

- Can only access data from the top of the stack

### Uses of stacks

- Stacks are used for function calls
- Stacks are used for undo functions

## Queues
Queues are a similar structure to stacks, only with a First In First Out (FIFO) structure

![](https://cdn-media-1.freecodecamp.org/images/C2riLJTPBVpSI-3o5Cx9IrQ16LZi1kLrqYXo)

### Basic functions

- Enqueue — Inserts an element to the back of the queue
- Dequeue — Removes an element from the front of the queue
- Check if the queue is empty
- Peek - Access the data at the front of the queue without removing it

### Advantages of queues

- Stacks can store multiple data points of any type

### Disadvantages of queues

- Can only access data from the front of the queue

### Uses of queues

- Many types of waiting room scenarios
- A shared resource like an office printer

## Graphs
Graphs are non-linear systems of data points connected to each other. The data exists as a series of nodes, or vertices, connected to each other by edges.

![](https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png)

Graphs are often defined by the set of vertices and edges that they are comprised of.  In the example above, we would have a vertex list of:

`V = [0,1,2,3,4]`

and an edge list, or adjacency list, of 

`E = [[0,1], [1,2], [2,3], [3,4], [0,4], [1,4], [1,3]]`

You might also see them together, like this:

	{
	0:[1,4]
	1:[0,2,3,4],
	2:[1,3],
	3:[1,2,4],
	4:[0,1,3],
	}

### Basic functions

- Addition/Removal of a vertex
- Addition/Removal of an edge
- Access vertex

### Advantages of graphs

- Make it easy to understand complex networks
- Graphs can be used to find ideal paths between data
- Graphs can be used to understand relationships between data

### Disadvantages of graphs

- Can be time and space intensive to traverse and map graphs

### Uses of graphs

- Used to represent networks like phone systems
- Used to visualize connected on social media sites

## Trees
Trees are a data structure where data is organized and linked hierarchically. The nodes, or leaves, in a tree can be linked to more than 1 other node.  There are many types of trees, one of the most common is the binary search tree.

![](https://www.gatevidyalay.com/wp-content/uploads/2018/07/Binary-Search-Tree-Example.png)

In a binary search tree, the child node to the left of any node is less than the parent, and the node to the right is greater.

Each node in a tree has at least 3 properties:

- The value stored in the node
- The pointer to its left child node
- The pointer to its right child node

### Basic functions

- Insert - Insert a node into the tree
- Delete - Delete a node from the tree
- Search - Find a node in the tree

### Advantages of trees

- The time complexity for any of the basic operations in a balanced tree is O(log(n))

### Disadvantages of trees

- Trees can become unbalanced and lose their efficiency in searches
- In many types of trees, each node needs to be unique

### Uses of trees

- Used in many search applications where data is constantly entering and leaving.

## Heaps
Heaps are a special case of binary tree where each parent node has the same relationship with each of its child nodes.

Two of the most common are:

**Min-heap**

![](https://www.tutorialspoint.com/data_structures_algorithms/images/min_heap_example.jpg)

**Max-heap**

![](https://www.tutorialspoint.com/data_structures_algorithms/images/max_heap_example.jpg)

While heaps can be constructed using nodes, as we say for our binary tree, they are often made from arrays, as they can be easier to work with.

The max heap above can be written as

	[44,42,35,33,31,19,27,10,26,14]
	
in which each child node is at

	(i+1)*2 or (i+1)*2-1

where i is the index of the parent node.

Similarly, each parent node is at

	Math.floor((i-1)/2)
	
when i is the index of the child node.

### Basic functions

- Insert - Insert a node into the tree
- Delete - Delete a node from the tree
- Search - Find a node in the tree

### Advantages of heaps

- Inserting and remove nodes from a heap takes O(log(N)) time complexity

### Disadvantages of heaps

- Searching heaps can be costly
- Many heaps require unique node values

### Uses of heaps

- Used in heapsort
- Used for priority queues
