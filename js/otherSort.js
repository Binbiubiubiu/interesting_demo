// 希尔排序（Shell Sort）
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}
// --------------------------------------------------
// 堆排序（Heap Sort）
// 堆排序须知：
// 堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：

// 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列
// 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列
var len; //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) {
  //建立大顶堆
  len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}

function heapify(arr, i) {
  //堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapSort(arr) {
  buildMaxHeap(arr);

  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
  return arr;
}
// -----------------------------------------------------
// 计数排序（Counting Sort）
// 计数排序须知：
// 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
// 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0;
  (arrLen = arr.length), (bucketLen = maxValue + 1);

  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}
// -------------------------------------------------------

// 桶排序（Bucket Sort）
// 桶排序须知：
// 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
// 为了使桶排序更加高效，我们需要做到这两点：

// 在额外空间充足的情况下，尽量增大桶的数量
// 使用的映射函数能够将输入的N个数据均匀的分配到K个桶中
// 同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。

// 什么时候最快（Best Cases）：
// 当输入的数据可以均匀的分配到每一个桶中

// 什么时候最慢（Worst Cases）：
// 当输入的数据被分配到了同一个桶中

// 桶排序JavaScript代码实现：
function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }

  var i;
  var minValue = arr[0];
  var maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]; //输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]; //输入数据的最大值
    }
  }

  //桶的初始化
  var DEFAULT_BUCKET_SIZE = 5; //设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]); //对每个桶进行排序，这里使用了插入排序
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }

  return arr;
}
// -----------------------------------------------------------
// 基数排序（Radix Sort）
// 基数排序须知：
// 基数排序有两种方法：

// MSD 从高位开始进行排序
// LSD 从低位开始进行排序
// 基数排序 vs 计数排序 vs 桶排序
// 这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：
// 基数排序：根据键值的每位数字来分配桶
// 计数排序：每个桶只存储单一键值
// 桶排序：每个桶存储一定范围的数值

// LSD基数排序动图演示：

// Radix Sort 动图演示 算法可视化来源：http://visualgo.net/
// 基数排序JavaScript代码实现：
//LSD Radix Sort
var counter = [];
function radixSort(arr, maxDigit) {
  var mod = 10;
  var dev = 1;
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}
