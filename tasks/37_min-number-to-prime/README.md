### Minimum Number to Prime
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

#### Notes
List size is at least 2 .
List's numbers will only positives (n > 0) .
Repetition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .

#### Examples
`minNumberToPrime([3, 1, 2]) ==> return 1`


#### Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .

`minNumberToPrime([2, 12, 8, 4, 6]) ==> return 5`
Explanation:
Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
