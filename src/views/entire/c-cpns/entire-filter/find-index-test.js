var arr = ['a', 'b', 'c', 'd', 'c']
var flag = arr.findIndex((item) => {
  return item === 'c'
})
console.log(flag) // 得到： 2
