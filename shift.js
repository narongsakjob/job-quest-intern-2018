const shift = (arr, type, amount) => {
	if( type === 'left') {
		arr = arr.concat(arr.splice(0,amount))
	}else {

	}
	console.log(arr)
}

shift( ['john', 'jane', 'sarah', 'alex'], "left", 2 )
