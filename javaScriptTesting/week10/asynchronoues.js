// #Understanding Asynchronous JavaScript
/**
 * blocking => synchronoues => operations performed (low)
 * without blocking => asynchronoues operations performed (high)
 *
 * bullet points :
 * 1.With a single call stack, everything below the top item waits, which is why a long task freezes the page.
 * 2.The slow work is handed away and the result is dealt with later, so the page is never blocked.
 * 3.eg : JavaScript does not wait for the timer. It carries on to the next line and runs the callback once the two seconds are over.
 * 4.syncronous code which does not allow its after ward code to executr even if it is ready and blocks then , unlike async
 *
 */

// How Asynchronous Operations Come from the Browser
/**
 *  console.log from browser but is synchronous
 *   eventLoop(watchman)
 *
 *
 * browser -->console  //sync
 *         --->timinf funcion ->settimeout//only onces
 *                            ->setinterval
 *     ----> network api -> fetch //dusre page se data lana
 *
 * bullet points :
 * 1.The engine contains only the memory heap and the call stack. Timers, fetch, the DOM and localStorage are all supplied by the browser.
 */

/**
 * Event Loop – Execution of Asynchronous Code
 * bullet points :
 * 1.The event loop watches the call stack and delivers waiting callbacks only once the stack has nothing on it.
 * 2.This single rule explains why asynchronous callbacks always run after the current synchronous code.
 * 3.The browser finishes the timer and places the callback in the queue, where it waits for the event loop.
 * 4.If the call stack is still busy when the timer finishes, the callback waits longer than the delay you set.
 * 5.Clicks, scrolling and animations all need their callbacks pushed onto the stack, and that cannot happen while the stack is occupied.It keeps the call stack busy, so no other callback can be delivered
 */

/**===========================================
 * #      Promises- Resolve and reject
 * ===========================================
 *
 * promise is a syncronous code , object in js
 * 0th state pending
 * resolve => success(pending to fullfilled )
 * reject => ERROR(pending to rejected )
 *
 * promise states :=> resolve -> success resolve
 *
 *
 * # promise handlers +> reject ke karan error ata he use handle karo bhai
 * =>//promise act as a placeholder till the value is not getting ,or it is getting time,upcoming data ke liye
 * bullet points :
 * 1.A promise is a placeholder for the result of an asynchronous task, with a guarantee that you will be told when it settles.
 * 2.A promise begins as pending and then settles as either fulfilled or rejected.
 * 3.resolve moves the promise to fulfilled and passes the value along. reject moves it to rejected with a reason.
 * 4.Once a promise is fulfilled or rejected it is settled forever, and any later call to resolve or reject is ignored.
 * 5.Nested callbacks drifted further right with every step and needed error handling repeated at each level. Promises allow a flat chain instead.(Deeply nested callbacks, known as callback hell)
 *
 *
 *
 *
 *
 * #promise handlers :
 * es6 -> promise handlers  : async and await
 * before .then and .catch
 */

let data = new Promise((res, rej) => {
  setTimeout(() => {
    let party = true;

    if (party) {
      return res("resolved by piyush ");
    }
    rej("failed to resolve ");
  }, 2000);
});

data;
//now we have somthig in data -> we have to handle if errror occurs

// =>using .then and .catch

data.then((value) => {
  console.log("resolve ko catch kar diya .", value);
}).catch((error)=>{
    console.log("error handling ",error)
})


//async and await 
/**
 * function ke sath kam karte he and modern way to handle promises 
 * 
 * asyn functon -> then ye function asynchronous behave karega and priority queue me chala jayega 
 * ****
 * *async function ke pehle and await promise(vsriable jisme promise stored hoga ) ke pehle 
 * await variable ko roke rakhata he jabtak promise return nahi karvata 
 * 
 * one problem => async and await me error handlers nahi hote , then we use try and catch block
 * try{resolve me cahlega }catch(){reject pe chalega error}
 * 
 * async await browser se ate he 
 * try and catch core js ke block he 
 */

let resolver = async ()=>{
    try{
        let response = await data;
        console.log("resolved the promise .");
    }catch(error){
        console.log("error => ",error);
    }
}
resolver();

/**
 * bullet points 
 * 
 * 1.then receives the value that was passed to resolve. catch handles rejection
 * 2.catch runs on rejection, and it also catches an error thrown by any earlier then in the chain.
 * 3.finally always runs after the promise settles, which makes it ideal for hiding a loading spinner.
 * 4.Using await in a normal function is a syntax error. Modern modules also allow it at the top level of a file.
 * 5.await lets you use ordinary error handling, so try and catch replaces the .catch handler.
 * 
 */


/**
 * Event Loop Working with Promises
 * 
 * call stack      callback queue(macro task)     priority queue 
 * 
 * bullet points :
 * 1.then, catch, finally and the code after an await are all microtasks.
 * 2.The event loop empties the whole microtask queue before taking a single task from the callback queue.
 * 3.Promise callbacks are microtasks and always run before timers, no matter which was scheduled first.
 * 4.The synchronous lines print first, then the microtask, and the timer callback comes last.
 * 5.Everything before the first await runs synchronously, and the rest is queued as a microtask.
 * 
 * 
 * 
 */