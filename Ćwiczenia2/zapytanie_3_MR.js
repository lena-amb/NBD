var map = function () {
	emit(this.job, null);
};

var reduce = function (key, values) {
	return key;
};



printjson(db.people.mapReduce(map, reduce, {out: "results"}));

printjson(db.results.find().sort( { "_id": 1 }).toArray());
