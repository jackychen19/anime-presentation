// const basicAnimation = anime({
//   targets: '.basic',
//   translateX: 250,
// })

const multipleAnimation = anime({
  targets: '.js-box',
  translateX: (elm, index, t) => index * 50,
  scale: 2,
  easing: 'easeInOutSine',
  delay: (elm, index, t) => index * 20,
  duration: 1200,
  loop: true,
  direction: 'alternate',
})

// const boxesAnimation = anime({
//   targets: '.js-box',
//   translateY: [150, 50],
//   backgroundColor: (el, i, t) => {
//     const r = 58 + (i * 12);
//     const g = 35 + (i * 12);
//     const b = 220;
//     const color = `rgb(${r}, ${g}, ${b})`;
//     return color;
//   },
//   duration: 900,
//   easing: 'easeOutElastic',
//   elasticity: 500,
//   delay: (el, i, t) => i * 20,
//   loop: true,
//   direction: 'alternate',
// });