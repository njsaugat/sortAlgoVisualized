import { useState } from "react";
import PropTypes from "prop-types";

function bubbleSort(arr) {
  const n = arr.length;
  const saugatSortedArr = [...arr];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (saugatSortedArr[j] > saugatSortedArr[j + 1]) {
        // Swap saugatSortedArr[j] and saugatSortedArr[j+1]
        let temp = saugatSortedArr[j];
        saugatSortedArr[j] = saugatSortedArr[j + 1];
        saugatSortedArr[j + 1] = temp;
      }
    }
  }
  return saugatSortedArr;
}

function selectionSort(arr) {
  const n = arr.length;
  const poudelSortedArr = [...arr];
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (poudelSortedArr[j] < poudelSortedArr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap poudelSortedArr[i] and poudelSortedArr[minIndex]
    if (minIndex !== i) {
      let temp = poudelSortedArr[i];
      poudelSortedArr[i] = poudelSortedArr[minIndex];
      poudelSortedArr[minIndex] = temp;
    }
  }
  return poudelSortedArr;
}

function insertionSort(arr) {
  const n = arr.length;
  const saugatPoudelSortedArr = [...arr];
  for (let i = 1; i < n; i++) {
    let key = saugatPoudelSortedArr[i];
    let j = i - 1;
    while (j >= 0 && saugatPoudelSortedArr[j] > key) {
      saugatPoudelSortedArr[j + 1] = saugatPoudelSortedArr[j];
      j--;
    }
    saugatPoudelSortedArr[j + 1] = key;
  }
  return saugatPoudelSortedArr;
}

function mergeSort(arr) {
  const n = arr.length;
  const saugatPoudelSortedArr = [...arr];
  // Create a temporary array for merging
  const tempArray = new Array(n);

  // Merge subarrays of size 1, then of size 2, 4, 8, ...
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

      merge(saugatPoudelSortedArr, tempArray, leftStart, mid, rightEnd);
    }
  }

  return saugatPoudelSortedArr;
}

function merge(arr, tempArray, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;

  // Merge the two sorted subarrays into tempArray
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      tempArray[k] = arr[i];
      i++;
    } else {
      tempArray[k] = arr[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements from the first subarray, if any
  while (i <= mid) {
    tempArray[k] = arr[i];
    i++;
    k++;
  }

  // Copy the remaining elements from the second subarray, if any
  while (j <= right) {
    tempArray[k] = arr[j];
    j++;
    k++;
  }

  // Copy back the merged elements to the original array
  for (let m = left; m <= right; m++) {
    arr[m] = tempArray[m];
  }
}

function quickSort(saugatArr) {
  if (saugatArr.length <= 1) {
    return saugatArr;
  }

  const pivot = saugatArr[Math.floor(Math.random() * saugatArr.length)];
  const left = [];
  const right = [];

  for (let element of saugatArr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Sort.propTypes = {
//   name: PropTypes.string.isRequired
// }
// const unsortedArray = ['ram', 'hari', 'syam', 'krishna', 'sita'];
const Sort = ({ unsortedArray }) => {
  const [array, setSortArray] = useState(unsortedArray);
  return (
    <>
      <div className="array">
        {array.map((ele, index) => {
          return <h2 key={index}>{ele}</h2>;
        })}
      </div>
      <button
        onClick={() => {
          const sortedArray = bubbleSort(array);
          setSortArray(sortedArray);
        }}
      >
        Bubble Sort Array
      </button>
      <button
        onClick={() => {
          const sortedArray = selectionSort(array);
          setSortArray(sortedArray);
        }}
      >
        Selection Sort Array
      </button>
      <button
        onClick={() => {
          const sortedArray = insertionSort(array);
          setSortArray(sortedArray);
        }}
      >
        Insertion Sort Array
      </button>
      <button
        onClick={() => {
          const sortedArray = mergeSort(array);
          setSortArray(sortedArray);
        }}
      >
        Merge Sort Array
      </button>
      <button
        onClick={() => {
          const sortedArray = quickSort(array);
          setSortArray(sortedArray);
        }}
      >
        Quick Sort Array
      </button>
      <button
        onClick={() => {
          setSortArray(unsortedArray);
        }}
      >
        Reset Array
      </button>
    </>
  );
};
Sort.propTypes = {
  unsortedArray: PropTypes.array.isRequired, // Define the unsortedArray prop
};

export default Sort;
