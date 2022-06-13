function formarPalabras(inputs){
  if(inputs === null){
    return "null"
  }else if(inputs.length === 0){
    return "vacio"
  }else{
    let filtering = inputs.filter((e, i) => {
      if(i % 2 === 0){
        return e
      }
    })
    if((inputs.length - 1)%2 !== 0){
      let last = inputs.slice(-1)
      return filtering.concat(last).join('')
    }else{
      return filtering.join('')
    }
  }
}

module.exports = formarPalabras;
