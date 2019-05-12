const selectPieData = (data) => {
    console.log(data);
    let options = [];
    let item = {
      Team_Name: "",
      Hours: ""
    }
    if (data.length === 0 || data === undefined) {
      return []
    }
    else {
      data.map((index) => {
        var x = Object.assign({}, item, {
        Team_Name: index.Project_Name,
        Hours: index.Project_Name
        })
        options.push(x);
      })
      const seen = new Set();
      return options.filter(el => {
        if (el.value !== undefined) {
          const duplicate = seen.has(el.value);
          seen.add(el.value);
          return !duplicate;
        }
      });
  
    }
  }
  export default { selectPieData };
  