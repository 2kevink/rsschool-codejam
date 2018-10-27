function sumOfOther(arr){
  let res = [];
  let summ = 0;
  for(let i=0;i<arr.length;i++){
    summ+=arr[i];
  }
  for(let i=0;i<arr.length;i++){
    res[i] = summ-arr[i];
  }
  return res;
}
