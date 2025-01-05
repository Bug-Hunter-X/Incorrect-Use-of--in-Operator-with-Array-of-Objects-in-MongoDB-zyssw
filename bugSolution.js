```javascript
// Correct approach using $elemMatch to query objects within an array
db.collection.find( { field: { $elemMatch: { subfield: 'value1' } } } );

//Or to match any of the values
db.collection.find( { field: { $in: ['value1', 'value2'] } } ); 
```