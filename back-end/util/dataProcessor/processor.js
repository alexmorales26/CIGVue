const dataProcessor = (data) => {
    if (data.length <= 1 || data === null) {
        return {
            data: [],
            columnHeaders: []
        } // return empty object 
    }
    else {
        // take the 0 index of the data, as it will be the keys for the rest of the objects
        let headers = data[0];
        let rows = [];
        // Create a new array to remove the 0th index 
        for (var x = 1; x < data.length; x++) {
            rows.push(data[x]);
        }
        let dat = [];
        // Create an object variable that will allow the conversion of the array of keys into an object template
        let object = {};
        headers.map((i) => {
            object[String(i).replace(/ /g,"_")] = '';
        })
        // Inserting  objects into an array of objects containing the proper keys and values for each object
        for (let i = 0; i < rows.length; i++) {
            // create a deep empty object everytime
            let temp = Object.assign({}, object); 
            // get the keys out of the object to allow iteration of keys when inserting values into object
            let keys = Object.keys(temp);
            // iterate through the array of keys and map the values to their appropiate key in the object
            for (let x = 0; x < Object.keys(temp).length; x++) {
                temp[keys[x]] = rows[i][x];
            }
            // Add the object into the array before iterating into next row of information
            dat.push(temp);
        }

        return {
            data:dat,
            columnHeaders: Object.keys(object)
        }

    }

}
module.exports = dataProcessor;