const operations = {
  '>': (cells, pointer) => ({ cells, pointer: ++pointer }),
  '<': (cells, pointer) => ({ cells, pointer: --pointer }),
  '+': (cells, pointer) => ({ cells: computeMemory(cells, pointer, ++cells[pointer]), pointer }),
  '-': (cells, pointer) => ({ cells: computeMemory(cells, pointer, --cells[pointer]), pointer }),
}

const computeMemory = (cells, pointer, value) => {
  cells[pointer] = value;
  return cells;
}


const brainfuck = (program, cells, initPointer) => {
  const reducer = (acc, val) => operations[val](acc.cells, acc.pointer);
  const result = program.split('').reduce(reducer, { cells, pointer: initPointer });
  if (result.pointer < 0) throw new Error('Pointer out of bounds - below 0');
  return { value: result.cells[result.pointer], pointer: result.pointer };
}

module.exports = {
  brainfuck,
}
