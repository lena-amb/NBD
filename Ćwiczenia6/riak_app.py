from riak import RiakClient


myClient=RiakClient(protocol='http', host='127.0.0.1', http_port=8098)

print("Start of Riak Application")
print("Creating a new bucket")
myBucket = myClient.bucket('s17293')
print(myBucket)

#Create a document
print("Creating a document")
val = "Content of the Document"
key = myBucket.new('Document', data=val)
key.store()
if myBucket.get('Document').exists:
	status = "OK"
print("Status: ", status)

#Fetch the data
print("Fetching the data")
fetched = myBucket.get('Document')
print("Value fetched: ", fetched.data)

#Modify the data
print("Modifying the data")
val_modified = "MODIFIED content of the Document"
fetched.data = val_modified
fetched.store()
if myBucket.get('Document').exists:
	status_m = "OK"
print("Modify status: ", status_m)


#Fetch the modified data
print("Fetching the modified data")
fetched_modified = myBucket.get('Document')
print("Value fetched: ", fetched_modified.data)

#Delete the data
print("Removing the document")
fetched_modified.delete()
if myBucket.get('Document').exists == False:
	status_d = "OK"
print("Delete status: ", status_d)
fetched_deleted = myBucket.get('Document')
print("Value fetched: ", fetched_modified.data)

print("End of Riak App")



