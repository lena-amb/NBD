var map = function(){
	emit(this.sex, {height: this.height, weight:this.weight, count:1})
};

var reduce = function (key, values) {
	var n = {weight:0, height:0, count:0};
	for (var i=0; i<values.length; i++) {
		n.weight += values[i].weight;
		n.height += values[i].height;
		n.count += values[i].count;
	};

	return  {height_avg:n.height/n.count, weight_avg:n.weight/n.count};
};

printjson(db.people.mapReduce(map, reduce, {out: "results"}))
printjson(db.results.find().toArray())
