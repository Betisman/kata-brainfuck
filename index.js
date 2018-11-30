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
  // program.split('').reduce(
  //     (acc, val) => {
  //       const { value, pointer } = operations[val](cells[acc.pointer], acc.pointer);
  //       cells[pointer] = value;
  //     }
  //     { value: 0, pointer: 0 }
  //   );
  const result = operations[program](cells, initPointer);
  console.log(result)
  if (result.pointer < 0) throw new Error('Pointer out of bounds - below 0');
  return { value: result.cells[result.pointer], pointer: result.pointer };
}

module.exports = {
  brainfuck,
}
