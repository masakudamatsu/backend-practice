import cases from 'jest-in-case';

import template from './template';

cases(
  'returns the correct outputs:',
  options => {
    expect(template(options.inputs)).toEqual(options.outputs);
  },
  {
    'Input example 1': {
      inputs: 1,
      outputs: {},
    },
  },
);

cases(
  'returns an error with an invalid input',
  options => {
    expect(() => {
      template(options.inputs);
    }).toThrow(options.outputs);
  },
  {
    missing: {
      inputs: undefined,
      outputs: 'The argument is missing. Provide ...',
    },
    string: {
      inputs: '16',
      outputs: 'The argument must be a number, but you provided a string',
    },
  },
);
