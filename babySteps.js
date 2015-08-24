var items = process.argv.length;

var total = 0;

for (i = 2; i < items; i++){
	
	total += +process.argv[i];
};

console.log(total);


