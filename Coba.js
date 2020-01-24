const eventA = "scrollPer3";
const eventB = "countDown";

let typeEventActive = eventA;

const runEvent = (currntScroll, timeLeft, eventA, eventB) => {
  const scrollHeight = 43;
  if (typeEventActive === eventA && scrollHeight >= currntScroll) {
    console.log("ini");
    typeEventActive = eventB;
    return eventA;
  }

  if (typeEventActive === eventB && timeLeft === 0) {
    typeEventActive = eventA;
    return eventB;
  }
};

console.log(runEvent(43, 0, eventA, eventB));
console.log(runEvent(43, 0, eventA, eventB));
