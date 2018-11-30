const operations = {
  '>': (value, pointer) => ({ value, pointer: ++pointer }),
  '<': (value, pointer) => ({ value, pointer: --pointer }),
  '+': (value, pointer) => ({ value: ++value, pointer }),
  '-': (value, pointer) => ({ value: --value, pointer }),
}

const brainfuck = (program, cells, initPointer) => {
  const result = operations[program](cells[initPointer], initPointer);
  if (result.pointer < 0) throw new Error('Pointer out of bounds - below 0');
  return result;
}

module.exports = {
  brainfuck,
}
