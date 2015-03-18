load('arrayClass.js');
var numElements = 100;
var nums = new Carray(numElements);

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


