printjson(db.people.aggregate([
	{$project:{"nationality":"$nationality","BMI":{$divide:[{$multiply:["$weight",10000]},{$multiply:["$height","$height"]}]}}}, 
	{$group:{"_id":"$nationality", max:{$max:"$BMI"}, min:{$min:"$BMI"}, avg:{$avg:"$BMI"} 
	}}]).toArray())
