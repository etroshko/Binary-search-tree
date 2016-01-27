'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if(!this.root) {
			this.root = new Node(data);
		}
		else {
			var temp = this.root;
			while(true) {
				if(data < temp.data) {
					if(!temp.left) {
						temp.left = new Node(data);
						break;
					}
					else temp = temp.left;
				} else if(data > temp.data) {
					if(!temp.right) {
						temp.right = new Node(data);
						break;
					}
					else temp = temp.right;
				}
				else break;
			}
		}
	}

	contains(data) {
		var isFound = false;
		var temp = this.root;
		while(!isFound && temp) {
			if(data < temp.data) {
				temp = temp.left;
			} 
			else if (data > temp.data) {
				temp = temp.right;
			}
			else isFound = true;
		}
		return isFound;
	}


	remove(data) {
		this.root = removeNode(this.root, data);
		function removeNode(node, data) {
			if(!node) return null;
			if(data == node.data) {
				if(!node.left && !node.right)
					return null;
				if(!node.left) 
					return node.right;
				if(!node.right)
					return node.left;
				var temp = node.right;
				while (temp.left)
					temp = temp.left;
				node.data = temp.data;
				node.right = removeNode(node.right, temp.data);
				return node;
			}
			else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			}
			else if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			}
		}
	}

	size() {
		return 0;
	}

	isEmpty() {
		return !this.root;
	}
}
