function checkOptions({ input, output, shift, action }) {
  if (!checkShiftArg(shift)) {
    throw {
      name: 'CommandLineArgs Error',
      message: 'Required argument --shift is missing or wrong.',
      exitCode: 1
    };
  }
  if (!checkActionArg(action)) {
    throw {
      name: 'CommandLineArgs Error',
      message: 'Required argument --action is missing or wrong.',
      exitCode: 1
    };
  }

  function checkShiftArg(shiftValue) {
    return !Number.isNaN(shiftValue);
  }

  function checkActionArg(actionValue) {
    return actionValue === 'encode' || action === 'decode';
  }

  return {
    shift,
    input,
    output,
    action
  };
}

module.exports = checkOptions;
