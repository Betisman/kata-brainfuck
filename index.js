const operations = {
  '>': (value, pointer) => ({ value, pointer: ++pointer }),
  '<': (value, pointer) => ({ value, pointer: --pointer }),
}

const brainfuck = (program, initValue, initPointer) => {
  return operations[program](initValue, initPointer);
}

module.exports = {
  brainfuck,
}
