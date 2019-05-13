const teamNameProcessor = (data) => {
  //console.log(data);
  let options = [];
  let item = {
    value: "",
    label: ""
  }
  if (data.length === 0 || data === undefined) {
    return []
  }
  else {
    data.map((index) => {
      var x = Object.assign({}, item, {
        value: index.Hours,
        label: index.Project_Name
      })
      options.push(x);
    })
    const seen = new Set();
    return options.filter(el => {
      if (el.label !== undefined) {
        const duplicate = seen.has(el.label);
        seen.add(el.label);
        return !duplicate;
      }
    });

  }
}
export default { teamNameProcessor };
