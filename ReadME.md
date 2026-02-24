### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is used for get an unic element, getElementByClassName is used for get all tag thats are similar className, querySelector is used fot get all type data but when containing multi tag by one classname it take the first one Onthe other hand querySelectorAll is used to get all types of tag using id/class and only tages without id/classname.

### 2. How do you create and insert a new element into the DOM?
document.createElement() = create element
appendChild() = insert into DOM

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is when an event start with its targeted items and goes to upwards to its parent element in DOM.

how its works: when it clicked ontargeted element the event start. then it moves to its parent element and then moves to parent's parent element and it goes running till reach to top of DOM.


### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation : when we add an event listener  to a parent element than we clicked anychild under that parent,  parent can handle event by event bubble

why it is usefull: as parent can handle many child's listening so it's a memory saver, cleaner and shorter code.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() can't stop bubbling but stopPropagation() can do it.