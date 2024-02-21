
// product of array itself self 

function productExceptSelf(nums: number[]): number[] {
   // get the product of every value before the element and the produt after the element 
   // after it and multiply them 
   // and put them in a prefix array and 
   // the other in a postfix array. 
   const array: Array<number> = [];
   let product: number = 1;

   for(let idx=0;idx<nums.length;idx++){
    array[idx] = product;
    product *= nums[idx];
   }

   product =1;

   for(let idx=nums.length-1;idx>=0;idx--){
    array[idx] *= product;
    product *= nums[idx];
   }
   return array;
}