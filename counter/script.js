class Counter {
  constructor(count = 0) {
    this.initial = count;
    this.count = this.initial;
  }

  decrease() {
    return --this.count;
  }
  increase() {
    return ++this.count;
  }
  reset() {
    return (this.count = this.initial);
  }
}

let counter = new Counter();
currentCount.textContent = counter.count;

btns.addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") return "";
  let target = e.target.dataset.task;

  switch (target) {
    case "decrease":
      console.log("decreased", counter.count);
      currentCount.textContent = counter.decrease();
      break;
    case "increase":
      currentCount.textContent = counter.increase();
      break;
    case "reset":
      currentCount.textContent = counter.reset();
      break;
    default:
      console.log("no operation found");
      break;
  }
});
