# DevTools - Part 2: Debugging

### 1. What was the bug?
*Answer:*  
The bug is that the inputs are being stored as a string so when you add them they concatenate together instead of adding which results in the incorrect sum.
---
### 2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.
*Answer:*  
I would fix this by converting the inputs from strings to numbers before passing them to calculateSum(). I did this by using Number() like shown in [fix.png](../../expand/screenshots/fix.png)
---
