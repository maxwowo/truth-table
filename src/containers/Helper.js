const OPERATORS = "&|!"

export function getVars(exp) {
  return exp.split(/\W/g).filter(el => el !== "");
}

export function getExp(event) {
  return event.target.value.replace(/\s/g, "");
}

export function getTableHead(vars, exp) {
  return [...vars, exp];
}

export function validKey(key) {
  function isAlpha(key) {
    return key.length == 1 && key.match(/^[A-Z]+$/i);
  }
  
  return OPERATORS.includes(key) || isAlpha(key);
}

function evalExp(exp, truthValues, vars) {
  let res = exp;
  for (let i = 0; i < vars.length; i++) {
    let regex = new RegExp(vars[i], "g");
    res = res.replace(regex, truthValues[i]);
  }
  return eval(res);
}

function bin(dec, nVars) {
  return dec.toString(2).padStart(nVars, "0");
}

export function getTableContent(nVars, exp, vars) {
  const res = [];

  for (let i = 2 ** nVars - 1; i >= 0; i--) {
    let binStr = bin(i, nVars);

    try {
      binStr += evalExp(exp, binStr, vars);
    } catch (err) {}

    res.push(binStr);
  }

  return res.map(el =>
    el
      .replace(/(1|true)/g, "T")
      .replace(/(0|false)/g, "F")
      .split("")
  );
}
