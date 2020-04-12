
export const map = fn => array => array.map(fn)
export const mult = x => y => x * y
export const pluck = key => object => object[key]
export const jsonify = res => res.json()
export const log = res => console.log(res)
export const compose = (...fns) => (args) => 
  fns.reverse().reduceRight((arg, fn) => fn(arg), args)
export const once = (fn) => {
  var done = false;
  
  return function () {
    return done ? void 0 : ((done = true), fn.apply(this, arguments))
  }
}