const template = args => {
  if (args === undefined) {
    throw new Error('The argument is missing. Provide ...');
  }
  if (typeof args !== 'number') {
    throw new Error(
      `The argument must be a number, but you provided a ${typeof args}`,
    );
  }
  return {};
};

export default template;
