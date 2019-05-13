const extractInformation = (data) => {
    let list = [];
    let tmpHours = null;
    let item = {
        name: "",
        full_name: "",
        Hours: "",
        count: 1
    }
    data.map((index) => {
        tmpHours = parseFloat(index.Hours);
        var tmp = Object.assign({}, item, {
            name: index.Project_Name,
            full_name: index.Full_name,
            Hours: tmpHours
        });
        tmpHours = null;
        list.push(tmp);
    });
    return list;
}
const uniqueSet = (data,obj) => {
    const seen = new Set();
    return data.filter(indx => {
        if (indx[obj]!== undefined) {
          const duplicate = seen.has(indx[obj]);
          seen.add(indx[obj]);
          return !duplicate;
        }
      });
}
const extractNames = (data) => {

}
const calculateInformation = (data) => {

    let sortedData = data.sort();
    let uniqItems = uniqueSet(sortedData,'full_name');

    

    uniqItems.map(indx => {
        sortedData.map(elmnt => {
            if(indx.full_name === elmnt.full_name && indx.name === elmnt.name){
                indx.Hours += elmnt.Hours;
                indx.count += elmnt.count;
            }
        });
       
    })
   let  tmp = []
    sortedData.find( indx => {
        if(uniqItems.indexOf(indx) === -1){
            tmp.push(indx)
        }
    })


    let counter = 0;
    uniqItems.map(indx => {
        counter += indx.count
    })
    //console.log(counter)
   // console.log(uniqItems);
  

}
const TeamBarPlotProcessor = (data) => {
    let list = null
    if (data.length === 0 || data === undefined) {
        return []
    }
    else {
        list = extractInformation(data);
        return calculateInformation(list);

    }
}
module.exports = { TeamBarPlotProcessor }