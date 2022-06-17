db.people.find({
   "credit":{"$exists":true}}).forEach(function(x){
    for(var i=0;i<x.credit.length;i++) {
      db.people.update(
         { 
             "_id": x._id, 
             "credit.number": x.credit[i].number
         },
         {
             "$set": {
               "credit.$.balance":
                   parseFloat(x.credit[i].balance)
             }
         }
      );
  }
})

printjson(db.people.aggregate([{$unwind:"$credit"}, {$group:{_id:"$credit.currency", balance_sum:{$sum:"$credit.balance"}}}]).toArray())
