// const refs = {
//   days: document.querySelector(`#timer-1 [data-value="days"]`),
//   hours: document.querySelector(`#timer-1 [data-value="hours"]`),
//   mins: document.querySelector(`#timer-1 [data-value="mins"]`),
//   secs: document.querySelector(`#timer-1 [data-value="secs"]`),
// };

// const targetTime = new Date("2022-08-07 12:00");

// const countdown = () => {
//   const nowTime = Date.now();
//   const time = targetTime - nowTime;

//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);

//   return { days, hours, mins, secs };
// };

// const writeTimeDown = () => {
//   const { days, hours, mins, secs } = countdown();

//   refs.days.textContent = days;
//   refs.hours.textContent = hours.toString().padStart(2, 0);
//   refs.mins.textContent = String(mins).padStart(2, 0);
//   refs.secs.textContent = secs.toString().padStart(2, 0);
// };

// writeTimeDown();

// setInterval(writeTimeDown, 1000);

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  refs = {
    days: document.querySelector(`[data-value="hours"]`),
    hours: document.querySelector(`[data-value="hours"]`),
    mins: document.querySelector(`[data-value="mins"]`),
    secs: document.querySelector(`[data-value="secs"]`),
  };

  countdown() {
    const nowTime = Date.now();
    const time = this.targetDate - nowTime;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  writeTimeDown() {
    const { days, hours, mins, secs } = this.countdown();

    this.refs.days.textContent = days.toString().padStart(2, 0);
    this.refs.hours.textContent = hours.toString().padStart(2, 0);
    this.refs.mins.textContent = String(mins).padStart(2, 0);
    this.refs.secs.textContent = secs.toString().padStart(2, 0);
  }

  markUpTime() {
    this.writeTimeDown();
    setInterval(this.writeTimeDown.bind(this), 1000);
  }
}

const countDown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022"),
});

countDown.markUpTime();
