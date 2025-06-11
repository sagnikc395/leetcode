package main

func binarySearch(nums []int, low, high, target int) int {
	if low > high {
		return -1
	}

	mid := (low + high) / 2
	if nums[mid] == target {
		return mid
	} else if target > nums[mid] {
		return binarySearch(nums, mid+1, high, target)
	} else {
		return binarySearch(nums, low, mid-1, target)
	}

}

func search(nums []int, target int) int {
	return binarySearch(nums, 0, len(nums)-1, target)
}

func main() {

}
