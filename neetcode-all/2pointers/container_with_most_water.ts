// using the heights, we want to see what is the most area
// we can cover using a left height and a right height

// we can check every left right combination :- NC2 and compare the area
//left pointer is our bottleneck.
//O(N^2)

const maxAreaBF = (height: number[]): number => {
  let res: number = 0;
  for (let l = 0; l < height.length; l++) {
    for (let r = l + 1; r < height.length; r++) {
      // height is the min height as that is the bottlenect
      let area = (r - l) * Math.min(height[r], height[l]);
      //set result to max area
      res = Math.max(res, area);
    }
  }
  return res;
};

// doing a lienar time solution using 2 pointers
// init left pointer all the way to left
// init right pointer all the way to right
//O(N)
const maxAreaOptimal = (height: number[]): number => {
  // if height(left) < height(right), then move the left pointer
  //
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    res = Math.max(res, area);
    if (height[left] < height[right]) {
      left += 1;
    } else if (height[left] > height[right]) {
      right -= 1;
    } else {
      // increament either left or decrement right
      right -= 1;
    }
  }
  return res;
};
