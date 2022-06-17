db.people.find().forEach( function (x) {
x.weight = parseFloat(x.weight);
x.height = parseFloat(x.height);
db.people.save(x);
});

printjson(db.people.aggregate([{$group:{_id:"$sex", height_avg: {$avg:"$height"}, weight_avg:{$avg:"$weight"}}}]).toArray())
