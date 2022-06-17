var map = function(){
	emit(this.nationality, {height: this.height, weight:this.weight, count:1})
};

var reduce = function (key, values) {
	var n = [];
	for (var i=0; i<values.length; i++) {
	    var bmi = 10000*values[i].weight/(values[i].height*values[i].height);
		n.push(bmi);
	};
	
	var bmi = {max: Math.max(...n), min: Math.min(...n), avg: Array.sum(n)/n.length}

	return  bmi;
};

printjson(db.people.mapReduce(map, reduce, {out: "results"}));
printjson(db.results.find().toArray())
