export function getVariables(exp) {
  return exp.split(/\W/g).filter(el => el !== "");
}

export function getExpression(event) {
  return event.target.value.replace(/\s/g, "");
}

export function getTableHeader(variables, exp) {
  return [...variables, exp];
}

export function getTableContent(numVariables, exp, variables) {
  const res = [];

  function evalExp(exp, perm, variables) {
    let tmp = exp;
    for (let i = 0; i < numVariables; i++) {
      let regex = new RegExp(variables[i], "g");
      tmp = tmp.replace(regex, perm[i]);
    }
    return eval(tmp);
  }

  for (let i = 2 ** numVariables - 1; i >= 0; i--) {
    let tmp = i
      .toString(2)
      .padStart(numVariables, "0")
      .split("");

    try {
      tmp.push(evalExp(exp, tmp, variables));
    } 
    catch (err) {}
    

    res.push(tmp);
  }

  return res;
}
