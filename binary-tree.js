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
		// var isFound = false;
		// var temp = this.root;
		// var parent = null;
		// while(!isFound && temp) {
		// 	if(data < temp.data) {
		// 		parent = temp;
		// 		temp = temp.left;
		// 	} 
		// 	else if (data > temp.data) {
		// 		parent = temp;
		// 		temp = temp.right;
		// 	}
		// 	else isFound = true;
		// }
		// if(isFound) {

		// }
		// else {

		// }
	}

	size() {

	}

	isEmpty() {
		return !this.root;
	}
}
