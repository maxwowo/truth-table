function treatInput(input) {
  return input
    .replace(/\s/g, "")
    .replace(/&/g, "&&")
    .replace(/\|/g, "||");
}

export default treatInput;
