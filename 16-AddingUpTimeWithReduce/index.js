//convert nodelist into array to use array functions could use Array.from or spread it into a new array
//[...document.querySelectorAll('[data-time]')]

const timeNodes =Array.from(document.querySelectorAll('[data-time]'))  ;
console.log(timeNodes);
const seconds = timeNodes
  .map(node =>node.dataset.time)
  .map(timeCode =>{
    const [mins,secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    console.log(mins,secs);
  })
  .reduce((total, vidSeconds) =>total +vidSeconds);

  let secondsLeft = seconds;
  //how many seconds in an hour
  const hours = Math.floor(secondsLeft/3600);
  secondsLeft =secondsLeft % 3600;
 //how many seconds in a minute
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours ,mins , secondsLeft);

  const totalTime =document.querySelector('h1');
  totalTime.innerHTML =`<span>Total time taken <b> ${hours}</b> : <b> ${mins}</b> : <b> ${secondsLeft}</b></span>`