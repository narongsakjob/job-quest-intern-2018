const shift = (arr, type, amount) => (
	arr = (type === 'left' ?  left(arr, amount) : right(arr, amount))
)
const left = (arr, amount) => (
	arr.concat(arr.splice(0,amount))
)
const right = (arr, amount) => (
	arr.concat(arr.splice(0, arr.length - amount))
)

console.log(shift( ['john', 'jane', 'sarah', 'alex'], "left", 2 ) )
console.log(shift( [1, 2, 3, 4 ,5], 'right', 3 ))