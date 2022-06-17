var map = function m(){
    for(var i in this.credit) {     
         emit(this.credit[i].currency,
          this.credit[i].balance)
 }}

var reduce = function (key, values) {
        return Array.sum(values);
};

printjson(db.people.mapReduce(map, reduce, {out: "results"}))
printjson(db.results.find().toArray())
