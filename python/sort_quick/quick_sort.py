def quick_sort(arr, left=0, right=None):

    if right == None:
        right = len(arr) - 1

    if left < right:
        position = partition(arr, left, right)
        quick_sort(arr, left, (position - 1))
        quick_sort(arr, (position + 1), right)


def partition(arr, left, right):

    pivot = arr[right]
    low = left - 1

    for i in range(left, right):
        if arr[i] <= pivot:
            low += 1
            swap(arr, i, low)

    swap(arr, right, low + 1)
    return low + 1


def swap(arr, i, low):
    temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp
