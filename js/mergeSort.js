/* 排序并合并*/
function merge(left, right) {
    var re = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
 　　　　　　// 如果左边的数据小于右边的数据，将左边的数据取出，放到新数组那里
            re.push(left.shift());
        } else {
            re.push(right.shift());
        }
    }
    /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
    return re.concat(left).concat(right);
 }
  
 function mergeSort(arr) {
    if(arr.length == 1){
       return arr;
    }
    /* 首先将无序数组划分为两个数组 */
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    /* 递归分别对左右两部分数组进行排序合并 */
    return merge(mergeSort(left), mergeSort(right));
 }
  
 var arr=[2,3,6,4,2,1,90,100,20,5];
 console.log(mergeSort(arr)); // [1, 2, 2, 3, 4, 5, 6, 20, 90, 100]