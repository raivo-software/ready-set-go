const numbers = [ 24, 13, 264, 23, 1, 2, 59, 0 ];
const sorted = numbers.sort((a,b) => a - b);

const binarySearch = (arr, number) => {
  const middleIndex = arr.length % 2 !== 0 ? (arr.length -1) / 2 : arr.length / 2;
  const middleValue = arr[middleIndex];
  if(middleValue === number)
    return true;
  const candidates = middleValue > number ? arr.filter((x,i) => i < middleIndex) : arr.filter((x,i) => i > middleIndex);
  if(candidates.length === 0)
    return false;
  return binarySearch(candidates, number);
}

const someNumbers = [ 24, 264, 3, 5, 9, 59 ];
someNumbers.forEach(x => console.log('is included in array: ' + x + ' - ' + binarySearch(sorted, x)));