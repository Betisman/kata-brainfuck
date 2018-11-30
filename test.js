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

  it.skip('< fails if underflow', () => {
    const program = '<';
    expect(brainfuck(program, cells, 0)).to.throwException();
  });

  it('+ increments', () => {
    const program = '+';
    const { value, pointer } = brainfuck(program, cells, 0);
    expect(value).to.eql(1);
  });

  it('- decrements', () => {
    const program = '-';
    cells[0] = 1;
    const { value, pointer } = brainfuck(program, cells, 0);
    expect(value).to.eql(0);
  });

  it('++ increments 2', () => {
    const program = '++';
    const { value, pointer } = brainfuck(program, cells, 0);
    expect(value).to.eql(2);
    expect(pointer).to.eql(0);
  });

  it('>++++ increments 2', () => {
    const program = '>++++';
    const { value, pointer } = brainfuck(program, cells, 0);
    expect(value).to.eql(4);
    expect(pointer).to.eql(1);
  });

});