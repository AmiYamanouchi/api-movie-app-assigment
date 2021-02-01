// async function moveX(){

// }

// const moveX = async () => {
//     await hello()
// }

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

const btn = document.querySelector("button");

//then/catch method
// moveX(btn, 100, 1000)
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .catch(({bodyBoundary}) => {
//         console.log(`Canot Move!!! Stuck at Body: ${bodyBoundary}`)
//     })

//async method....
async function animateRight(el, amt) {
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
}
animateRight(btn, 100);
