const prefix = 'prop';
let i = 0;

const obj2 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
}

console.log(obj2) // {prop-1: 1, prop-2: 2, prop-3: 3}