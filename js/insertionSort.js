function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
 

//插入排序
//假定当前元素之前的元素已经排好序，先把自己的位置空出来，
//然后前面比自己大的元素依次向后移，直到空出一个"坑"，
//然后把目标元素插入"坑"中
function insertSort(arr){
    // 从第二个元素开始，因为要留出一个坑
    for(var i=1;i<arr.length;i++){
        var x=arr[i]; 
        for(var j=i-1;arr[j]>x;j--){  //后挪空出位置 .
            arr[j+1]=arr[j];
        }
        if(arr[j+1]!=x){
            arr[j+1]=x;
        }
    }
    return arr;
}
var arr=[2,3,6,4,2,1,90,100,20,5];
console.log(insertSort(arr,2)); // [1, 2, 2, 3, 4, 5, 6, 20, 90, 100]xw