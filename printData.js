load('arrayClass.js');
load('shellsort.js');
var numElements = 10;
var nums = new Carray(numElements);

nums.setData();
print('Before: \n');
print(nums.toString());
print('\nDuring: \n');
nums.shellSort();
print('\nAfter: \n');
print(nums.toString());


/*
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print('Elapsed time for the bubble sort on ' + numElements + ' element is: ' + elapsed + ' milliseconds.');


nums.setData();
var start = new Date().getTime();
nums.selectionSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print('Elapsed time for the selection sort on ' + numElements + ' element is: ' + elapsed + ' milliseconds.');


nums.setData();
var start = new Date().getTime();
nums.insertionSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print('Elapsed time for the insertion sort on ' + numElements + ' element is: ' + elapsed + ' milliseconds.');
*/

