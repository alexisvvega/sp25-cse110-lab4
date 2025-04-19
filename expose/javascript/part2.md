# Part 2: A Little More of a Challenge...
### Question 1  
**What will happen at line 12 and why? If the code causes an error, explain why.**  
*Answer:*  
It will print `3` because the loop stopped running when i ==3. It would print out because the variable i is declared inside the for loop and is still accessible outside the loop.

---
### Question 2
**What will happen at line 13 and why? If the code causes an error, explain why.**  
*Answer:*  
It would print `150`. This is because it will print the last value assigned to discountedPrice, which is the discounted version of the last item in the array.

---
### Question 3  
**What will happen at line 14 and why? If the code causes an error, explain why.**  
*Answer:*  
It would print out `150`. This is because the final value of finalPrice is the discounted and rounded price of the last item in the array. The variable is updated during each loop iteration, so by the time the it finishes, it holds the discounted value of the last item.

---
### Question 4  
**What will this function return? Give a brief explanation why. If the code causes an error, explain why.**  
*Answer:*  
The function would return `[50,100,150]`. This is because we initialized an empty array and going inside the loop we are pushing the final price each iteration.

---
### Question 5  
**What will happen at line 12 and why?  If the code causes an error, explain why.**  
*Answer:*  
This would result in an `error`. This is because i is declared with let, which is block-scoped and i only exists inside the for loop block and cant be accesed outside of it.

---
### Question 6 
**What will happen at line 13 and why? If the code causes an error, explain why.**  
*Answer:*  
This would result in an `error`. The variable discountedPrice is declared using let inside the for loop, inside the block scope, and when trying to access it outside the scope it will result in an error

---
### Question 7  
**What will happen at line 14 and why? If the code causes an error, explain why.**  
*Answer:*  
It will return `150`. This is because the variable finalPrice was defined outside the for loop which makes it accesible throughout the entire function. In the loop, finalPrice is upated each time and in the last time it was calculated it held the value 150 which is what it will return.

---
### Question 8  
**What will this function return? Give a brief explanation. If the code causes an error, explain why.**  
*Answer:*  
This would return `[50,100,150]`. This is because discounted was defined outside the for loop which makes it accesible throughout the entire function. In the loop, the finalPrice is being pushed into discounted so at the end it will return the array: [50,100,150].

---
### Question 9
**What will happen at line 11 and why? If the code causes an error, explain why.**  
*Answer:*  
This would result in an `error`. This is because i is declared with let, which is block-scoped and i only exists inside the for loop block and cant be accesed outside of it.

---
### Question 10
**What will happen at line 12 and why? If the code causes an error, explain why.**  
*Answer:*  
It will print `3` because length is declared using const and assigned the value of prices.length, which is 3. Since it is declared in the function scope, it is accessible at line 12. Although const means the variable cannot be reassigned, it can still be read and used throughout the function.

---
### Question 11
**What will this function return? Give a brief explanation. If the code causes an error, explain why.**  
*Answer:*  
Const means you can't reassign the variable itself, but you can modify the contents of things like arrays and objects. So at the end it will return `[50,100,150]` since in the for loop each result is pushed into the discounted array.

---
### Question 12
**Given the above Object, write the notation for:**  
**A) Accessing the value of the name property in the student object**
*Answer:*  
`student.name`
**B) Accessing the value of the Grad Year property in the student object**
*Answer:*  
`major["Grad Year"]`
**C) Calling the function for the greeting property in the student object**
*Answer:*  
`student.greeting()`
**D) Accessing the name property of the object in the Favorite Teacher property in student**
*Answer:* 
`student["Favorite Teacher"].name`
**E) Access index zero in the array of the courseLoad property of the student object**
*Answer:*  
`student.name`
student.courseLoad[0]
---
### Question 13
**Arithmetic**  
**A) '3' + 2**
*Answer:*  `32` because the + operator is used for string concatenation when at least one operand is a string. From left to right since 3 is a string it turns 2 into a string and concatenates them together with the + operator.
**B) '3' - 2**
*Answer:* `1` because the - operator converts both operands to be numbers. 
**C) 3 + null**
*Answer:* `3` because following the numeric conversion rules, null becomes 0 so we are doing 3+0 which is 3.
**D) '3' + null**
*Answer:* `3null` because since 3 is a string, the + operator will convert the other operand into a string as well.
**E) true + 3**
*Answer:* `4` because following the numeric conversion rules, true becomes 1 so we are doing 1+3 which is 4.
**F) false + null**
*Answer:* `0` because false and null are both 0 following the numeric conversion rules. So 0+0=0.
**G) '3' + undefined**
*Answer:* `3undefined` because since 3 is a string, the + operator will convert the other operand into a string as well.
**H) '3' - undefined**
*Answer:* `NaN` because undefined cant be converted to a number so while 3 is converted to a number undefined cant so the result is NaN.
---
### Question 14
**Comparison**  
**A) '2' > 1**
*Answer:*  `true` because the string 2 is converted to a number so its comparing 2>1 which is true.
**B) '2' < '12'**
*Answer:* `false` because this is a string comparison and since 2 is greater than 1 when comparing character by character so 2 < 12 is false.
**C) 2 == '2'**
*Answer:*`true` because 2 as a string is converted to a number and 2 is equal to 2 is true.
**D) 2 === '2'**
*Answer:* `false` because the === checks both value and type and while they are both 2, one is a string and one is a number so it will be false.
**E) true == 2**
*Answer:* `false` because true is equal to 1 and 1 does not equal 2 so its false.
**F) true === Boolean(2)**
*Answer:* `true` because  Boolean(2) is true since any non-zero number is truthy. This makes both sides true and of boolean type so it will be true.
---
### Question 15
**Explain the difference between the == and === operators.**  
*Answer:*
The `==` operator checks for equality of values but allows type coercion, meaning it will convert one or both values to the same type before comparing.
The `===` operator checks for both value and type equality, so no type conversion happens. The values must be exactly the same and of the same type to be considered equal.
---
### Question 17
**If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result?**  
*Answer:*
The result would be `[2,4,6]`. This is because we're calling modifyArray with an array = [1,2,3] and a callback = doSomething. Inside modifyArray we are creating an empty array and for every element in array we are calling callback on it and pushing that into the empty array. By doing this function call within the function what we are doing is for every element in array we are multiplying it by 2:
    - `doSomething(1)` → `2`
    - `doSomething(2)` → `4`
    - `doSomething(3)` → `6`
and then doSomething will be done getting called and we would go back to modifyArray where we push the result uinto the empty array and then return the array with all the updated elements.
---
### Question 19
**What is the output of the above code?**  
*Answer:*
It will output 
1
4
3
2
It will print 1 immediatly, 2 after 1 second, 3 after 0ms, and 4 immediatly. It will therefore log 1 then 4 then after current stack is empty it will log 3 then 2 after 1 second delay.

