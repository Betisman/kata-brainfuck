const expect = require('expect.js');
const { brainfuck } = require('./index');

describe('Unit tests', () => {
  let cells;
  let ptr;
  const initArray = (length) => Array.from({ length }, (_, i) => 0);
  
  const init = () => {
    cells = initArray(20);
    ptr = 0;
  }

  before(() => init());

  beforeEach(() => init());

  it('> goes to next cell', () => {
    const program = '>';
    const { value, pointer } = brainfuck(program, cells, 0);
    expect(pointer).to.eql(1);
  });

  it('< goes to previous cell', () => {
    const program = '<';
    const { value, pointer } = brainfuck(program, cells, 1);
    expect(pointer).to.eql(0);
  });
});