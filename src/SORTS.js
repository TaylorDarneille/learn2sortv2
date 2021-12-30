const SORTS = {
    sorts: [
      {
        "index": "0",
        "title": "BUBBLE",
        "description": "This sorting algorithm gets it's name from the way the values 'bubble up', one at a time, to their proper position. The largest value finds it's place first, then the second largest, and so on. This will result in a sorted sublist accumulating from right to left. To begin, iterate through the list and compare adjacent elements. If they are incorrectly positioned- that is, if the element on the left is larger than the element on the right - swap them. Otherwise, do nothing and move on to the next pair. Note that you will only need to compare pairs of unsorted elements.",
        "video": "https://www.youtube.com/embed/lyZQPjUT5B4?rel=0&amp;start=45",
        "repl": "https://repl.it/@tmdarneille/Learn2Bubble?lite=true",
        "steps": ["Let i keep track of the index of the rightmost unsorted element in the list.", "You'll need to iterate through the unsorted list, comparing adjacent elements. Do this once for each element in the list. Write a loop to keep track of these iterations using i. Make sure the loops ends once the entire list is sorted.", "Let a and b be the indices of the pair of elements you compare.", "Write a loop that moves a and b through the unsorted sublist.", "Fill inside the loop, compare the values at indicies a and b. Swap them, if necessary.", "Need to see a solution? Open the repl in a new window to get access to the additional solution file."]
      },
      {
        "index": "1",
        "title": "INSERTION",
        "description": "Insertion sort builds a sorted sublist from left to right by inserting values from the unsorted sublist into the sorted sublist. To begin, the first element in the array is considered sorted. Then, the first element of the unsorted sublist is stored in a variable and compared to each element to it's left. Each element that is found to be larger than the current unsorted element gets shifted to the right to make room for the unsorted element to be placed in it's proper locaiton.",
        "video": "https://www.youtube.com/embed/ROalU379l3U",
        "repl": "https://repl.it/@tmdarneille/Learn2Insert?lite=true",
        "steps": ["Every element in the list, aside from the 0th element, will need to be sorted. Write a loop that uses i to keep track of the location of the unsorted element in the unsorted sublist. ", "Store the first unsorted element in a variable, first_unsorted.", "Now you'll need to iterate (right to left) through the sorted sublist. Write a loop that uses j to keep track of the index of the value you'll compare to first_unsorted. The loop should end if you find an element less than first_unsorted, or if you reach the beginning of the list.", "Inside the loop, move the value at j to the right, and increment j.", "Outside of the loop, insert first_unsorted, accounting for the fact that j was been incremented down before the loop ended.", "Need to see a solution? Open the repl in a new window to get access to the additional solution file."]
      },
      {
        "index": "2",
        "title": "SELECTION",
        "description": "Selection sort accumulates a sorted sublist from left to right. This algorithm repeatedly selects the smallest element from the unsorted portion of the list and places it at the end of the sorted sublist. It finds the smallest element from the unsorted sublist by storing the location of the first unsorted element in variable. Then it iterates through the rest of the sublist, comparing the assumed minimum value with the current value, and overriding the assumed minimum value with the current value if it is the smaller of the two.",
        "video": "https://www.youtube.com/embed/Ns4TPTC8whw",
        "repl": "https://repl.it/@tmdarneille/Learn2Select?lite=true",
        "steps": ["Write a loop that uses i to keep track of the index of the first unsorted element.", "Inside the loop, initialize min_index to be the index of the first unsorted element.", "Write a loop that uses j to iterate through the rest of the unsorted sublist.", "Compare the value at min_index to to the value at j, reassigning min_index if the value at j is smaller.", "Need to see a solution? Open the repl in a new window to get access to the additional solution file."]
      },
      {
        "index": "3",
        "title": "MERGE",
        "description": "Merge sort is a recursive method that uses a helper function. The helper function takes two sorted lists and merges them, returning a single sorted list. The idea behind the main merge sort function is to exploit the fact that a list containing a single value is automatically a 'sorted' list, and the helper function can merge two of these 'sorted' lists. There are two cases that need to be covered in the main function, which uses recursion to repeatedly split the list in half until there are two single-value sublists that can be merged using the helper function. The basecase code simply returns the list if it has length 1. The recursive case splits the input list in half, calling the main function on each of the resultant sublists and passing them into the helper function. The recursive case code essentially says 'merge sort both of these sublists and then merge them together'.",
        "video": "https://www.youtube.com/embed/XaqR3G_NVoo",
        "repl": "https://repl.it/@tmdarneille/Learn2Merge?lite=true",
        "steps": ["Write the helper function first! Start by initializing an empty list called 'result'.", "You'll want to repeatedly compare the first elements in each list to see which is smaller, so write a loop that terminates when you no longer have two corresponding elements to look at.", "Inside the loop, determine which of the two 0th elements is smaller, then remove that element from it's original list and append it to the result list.", "The loop should end when one of the lists is empty, so make sure to add any remaining elements from the non-empty list to the result (if there are any).", "Return the result!", "Now begin the main merge_sort function. Start with the basecase: return the list if it only contains one value.", "If the list has length greater than 1, use integer division to split it in half and store each sublist in the variables 'left_half' and 'right_half'.", "Now you have two lists you can pass into the helper merge function, but don't forget that the merge function only takes pairs of sorted lists! Call merge_sort on left_half and right_half.", "Return the result of merging the recursively sorted left_half and right_half.", "Need to see a solution? Open the repl in a new window to get access to the additional solution file."]
      },
      {
        "index": "4",
        "title": "QUICK",
        "description": "Quick sort, like merge sort, recursively sorts two lists. First, a pivot element is selected and removed from the list, then two new lists are created - one that stores all the remaining list elements that are less than the pivot, and one that stores the remaining list elements that are greater than the pivot. The recursive step returns a sorted list by concatonating quick-sorted versions of these two lists along with the pivot.",
        "video": "https://www.youtube.com/embed/ywWBy6J5gz8",
        "repl": "https://repl.it/@tmdarneille/Learn2Quick?lite=true",
        "steps": ["Take care of the basecase first. If the list has length one or zero, then it is already sorted so just return it!", "Move onto the recursive case. Pick a pivot! It doesn't matter which element is the pivot, but you'll want to remove it from the list, so try popping an element and storing it in a variable.", "Create a new list called 'left' and use list comprehension to fill it with the elements of the original list that are less than the value of the pivot. Do the same for a list called 'right', which should hold all the elements of the orignal list that are greater than the pivot.", "Now comes the recursive step. quick_sort on your left and right lists, then return a concatonation of the sorted left, the pivot, and the sorted right.", "Need to see a solution? Open the repl in a new window to get access to the additional solution file."]
      }
    ]
  }
  
  export default SORTS;
  