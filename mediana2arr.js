function mergeArrays(nums1, nums2) {
  const arr = [];

  let item1 = nums1.shift();
  let item2 = nums2.shift();
  while (item1 !== undefined && item2 !== undefined) {
    if (item1 > item2) {
      arr.push(item2);
      item2 = nums2.shift();
    } else if (item1 < item2) {
      arr.push(item1);
      item1 = nums1.shift();
    } else if (item1 === item2) {
      arr.push(item1);
      arr.push(item2);
      item1 = nums1.shift();
      item2 = nums2.shift();
    }
  }

  if (item1) arr.push(item1);
  if (item2) arr.push(item2);

  return arr.concat(nums1, nums2);
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = mergeArrays(nums1, nums2);
  console.log(arr);
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];

  if (arr.length % 2 === 1) return arr[Math.floor(arr.length / 2)];

  const point1 = arr[arr.length / 2 - 1];
  console.log(point1);
  const point2 = arr[arr.length / 2];
  return (point1 + point2) / 2;
};

console.log(
  findMedianSortedArrays(
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
    ],
    [0, 6]
  )
);
