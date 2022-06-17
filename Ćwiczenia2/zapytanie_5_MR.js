
   
var map = function () {
	for (var i=0; i<this.credit.length; i++){
		var key = this.credit[i].currency;
		var value = this.credit[i].balance;
		emit(key, {balance:value, count:1});
	};
	
};

var reduce = function (key, values) {
	var n = {balance:0, count:0};
	for (var i=0;i<values.length;i++){
		n.balance += values[i].balance;
		n.count += values[i].count;
	};
	return {sum_balance: n.balance, avg_balance: n.balance/n.count}
};


printjson(db.people.mapReduce(map, reduce, {query:{$and:[{"sex":"Female"}, {"nationality":"Poland"}]}, out: "results"}));

printjson(db.results.find().toArray());

