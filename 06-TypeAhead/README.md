###type ahead
- filters the text when we are still typing
- We are basically accessing  a json file and inserting it into an array to perform operations on it 
### fetch
- the browser has a built in library called fetch for ajax requests.
- fetch returns back a promise i.e. something will eventually come back and finish.
- the data returned from our fetch is like a blob of data as it does not know what kind of data it is. 
```
fetch(endpoint)
  .then(blob => blob.json()).then()
```
- the blob has to be converted from the raw data to json.it has a method within it called json which returns another promise and we pass it over to another then(we can't use Json.parse on this)

- We  can use the spread operator to copy the cities into the cities array

### regex
- const regex = new RegExp(wordToMatch,'gi');
- g matches globally i insensitive to character sensitivity

##change event
- the change event only fires when we go off the input ie. it is not focused
- the map will return an array when we just want a string so we use .join() ,which turns it from an array of multiple items into one big string