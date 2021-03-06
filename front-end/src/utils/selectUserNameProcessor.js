const userNameProcessor = (data) => {
  console.log(data);
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
        value: index.Username,
        label: index.Full_name
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
export default { userNameProcessor };
