Main Thread: The primary thread of execution in a program, responsible for executing the main program logic.

Function: A block of code that performs a specific task, can be called multiple times from different parts of the program.

Async Call: A function call that does not block the main thread, allowing the program to continue executing other tasks while the called function is being executed.

Background Thread/Worker: A separate thread of execution that runs in parallel with the main thread, used to execute tasks that do not require direct interaction with the main thread.

Blocking: When a function call prevents the main thread from executing other tasks until the called function completes.

Non-Blocking: When a function call does not prevent the main thread from executing other tasks, allowing the program to continue executing other logic while the called function is being executed.





Why is Async Js needed?


Async JavaScript is needed to handle tasks that take time to complete, such as:

* Network requests (e.g., fetching data from a server)
* Database queries
* File I/O operations
* Long-running computations

Without async JavaScript, these tasks would block the execution of other code, making the application unresponsive. Async JavaScript allows your code to continue executing while waiting for these tasks to complete, improving overall performance and user experience.

In other words, async JavaScript enables non-blocking I/O, allowing your code to do multiple things at the same time, rather than waiting for one task to finish before moving on to the next.





Which one is better?


**Sync is better for:**

* Simple, fast operations
* Small data processing
* Sequential task execution

**Async is better for:**

* Large data processing
* Network requests
* Improving application responsiveness






Here's a simple block diagram to illustrate the difference between synchronous and asynchronous call stacks:


**Synchronous Call Stack**
```
  +---------------+
  |  Main Thread  |
  +---------------+
           |
           |
           v
  +---------------+
  |  Function A  |
  +---------------+
           |
           |
           v
  +---------------+
  |  Function B  |
  +---------------+
           |
           |
           v
  +---------------+
  |  Function C  |
  +---------------+
```
**Asynchronous Call Stack**
```
  +---------------+
  |  Main Thread  |
  +---------------+
           |
           |
           v
  +---------------+
  |  Function A  |
  +---------------+
           |
           |  (async call)
           v
  +---------------+       +---------------+
  |  Function B  |       |  Background  |
  +---------------+       |  Thread/Worker|
           |               +---------------+
           |
           v
  +---------------+
  |  Function C  |
  +---------------+
```
In the synchronous call stack, each function blocks the main thread until it completes.

In the asynchronous call stack, Function B is executed in the background, allowing the main thread to continue executing Function C without blocking. 





**Promises**:


A promise is a result object that is used to handle asynchronous operations in JavaScript. It represents a value that may not be available yet, but will be resolved at some point in the future.


**When are promises used?**


Promises are used when you need to handle asynchronous operations, such as:

* Making API calls
* Reading files
* Handling network requests
* Performing database queries

Promises provide a way to handle the result of an asynchronous operation, whether it's successful or not. They allow you to write cleaner, more readable code, and make it easier to handle errors.

Here's a simple example:
```javascript
// Create a promise
const promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    resolve("Hello, World!"); // Resolve the promise with a value
  }, 2000);
});

// Use the promise
promise.then((value) => {
  console.log(value); // Output: "Hello, World!"
});
```
In this example, the promise i s created with a callback function that resolves the promise after 2 seconds. The `then` method is used to handle the resolved value.




**Why are promises needed?**


Promises are needed to handle the complexity of asynchronous programming in JavaScript. Here are some reasons why:


1. **Callbacks hell**: Without promises, asynchronous code can lead to "callback hell", where callbacks are nested inside each other, making the code hard to read and maintain.
2. **Error handling**: Promises provide a built-in way to handle errors, making it easier to catch and handle errors in asynchronous code.
3. **Code organization**: Promises help to organize asynchronous code in a more linear and readable way, making it easier to understand and maintain.
4. **Asynchronous operations**: Promises are designed to handle asynchronous operations, such as network requests, file I/O, and database queries, in a more efficient and scalable way.
5. **Simplified code**: Promises simplify asynchronous code by providing a straightforward way to handle the result of an asynchronous operation, whether it's successful or not.

Overall, promises provide a more elegant and efficient way to handle asynchronous programming in JavaScript, making it easier to write scalable and maintainable code.