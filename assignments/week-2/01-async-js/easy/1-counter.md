## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

## done

<!-- 
code base
function delay(ms){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res();
    },ms);
  });
}

let counter = 0;
async function counter_start(){
  while(true){
    await delay(1000);
    counter++;
    console.log(counter);
  }
}
counter_start();
 -->