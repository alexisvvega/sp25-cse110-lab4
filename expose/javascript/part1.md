# Part 1: A Quick Introduction...
### Question 1  
**What is printed by line 9? If the code returns an error, explain why.**  
*Answer:*  
It would print out `values added: 20` because var can be changed and reassigned. So while we initialized it to 0, right after we made result = num1 + num2 which would make result = 20.

---

### Question 2  
**What is printed by line 13? If the code returns an error, explain why.**  
*Answer:*  
It would print out `final result: 20`. This works because var declarations are function-scoped, not block-scoped, so the result variable declared inside the if block is still accessible in the rest of the function

---
### Question 3  
**Why should you not use `var`? Explain why.**  
*Answer:*  
You should avoid using var because it is function-scoped, not block-scoped. This can lead to bugs where a variable is accessible or modified in unexpected places. var also allows redeclaration within the same scope, which can cause naming conflicts.

---
### Question 4  
**What is printed by line 9? If the code returns an error, explain why.**  
*Answer:*  
It would print out `values added: 20`. This is because the result variable is declared with let inside the if (add) block, and we are reassigning it within the same block. Since we're still in scope, there's no issue updating or accessing its value here.
---

### Question 5  
**What is printed by line 13? If the code returns an error, explain why.**  
*Answer:*  
It would result in an  `error`. This is because let is block scope which means we can only access it within the block (in our case inside the if).

---
### Question 6  
**What is printed by line 9? If the code returns an error, explain why.**  
*Answer:*  
This would result in an `error`. This is because result is declared with const and cannot be reassigned. The line result = num1 + num2 tries to update its value from 0 to 20, which causes the error. Nothing is printed to the console.

---

### Question 7  
**What is printed by line 13? If the code returns an error, explain why.**  
*Answer:*  
This would result in an `error`. This is because const is also block scoped which means we can only access it within the block (in our case inside the if)

---