// this is my array test bed class
//

function Carray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	this.bubbleSort = bubbleSort;
	this.insertionSort = insertionSort;
	this.selectionSort = selectionSort;
	this.setGaps = setGaps;
	this.shellSort = shellSort;
	this.gaps = [5,3,1];
	this.shellSort2 = shellSort2;
	this.mergeSort = mergeSort;

	for (var i = 0; i < numElements; ++i) {
		this.dataStore[i] = i;
	}
}
function setGaps(arr) {
	this.gaps = arr;
}

function setData() {
   for (var i = 0;i < numElements; ++i) {
	this.dataStore[i] = Math.floor(Math.random() *
				(this.numElements+1));
	}
}

function clear() {
	for (var i = 0; i < this.dataStore.length; ++i) {
		this.dataStore[i] = 0;
	}
}

function insert(element) {
	this.dataStore[this.pos++] = element;
}

function toString() {
	var retstr = "";
	for (var i =0; i < this.dataStore.length; ++i) {
		retstr += this.dataStore[i] + " ";
		if ( i > 0 && i % 10 == 0) {
			retstr += "\n";
		}
	}
	return retstr;
}

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function bubbleSort() {
	var numElements = this.dataStore.length;
	var temp;
	for (var outer = numElements; outer >= 2; --outer) {
		for (var inner = 0; inner <= outer-1; ++inner) {
			if (this.dataStore[inner] > this.dataStore[inner+1]) {
				swap(this.dataStore, inner, inner+1);
			}
		}
		//print(this.toString());
	}
}

function insertionSort() {
	var temp, inner;
	for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
		temp = this.dataStore[outer];
		inner = outer;
		while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
			this.dataStore[inner] = this.dataStore[inner-1];
			--inner;
		}
		this.dataStore[inner] = temp;
		//print(this.toString());
	}
}

function selectionSort() {
	var min,temp;
	for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
		min = outer;
		for (var inner = outer + 1;
				inner <= this.dataStore.length-1; ++inner) {
					if (this.dataStore[inner] < this.dataStore[min]) {
						min = inner;
					}
				}
		swap(this.dataStore, outer, min);
		//print(this.toString());
	}
}



