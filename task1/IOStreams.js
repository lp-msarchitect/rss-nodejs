const fs = require('fs');

async function inputStream(filePath) {
  if (filePath === undefined) {
    return process.stdin;
  }
  try {
    await fs.promises.access(filePath);
  } catch (error) {
    let message = '';
    if (error.code === 'ENOENT') {
      message += `File ${filePath} is missing.`;
    } else {
      message += `File ${filePath} can't be accessed.`;
    }
    throw {
      name: 'Input File Error',
      message,
      exitCode: 2
    };
  }
  try {
    return fs.createReadStream(filePath);
  } catch (error) {
    throw {
      name: 'InputStream Error',
      message: `File ${filePath} can't be processed properly.`,
      exitCode: 2
    };
  }
}

async function outputStream(filePath) {
  if (filePath === undefined) {
    return process.stdout;
  }
  try {
    await fs.promises.access(filePath);
  } catch (error) {
    let message = '';
    if (error.code === 'ENOENT') {
      message += `File ${filePath} is missing.`;
    } else {
      message += `File ${filePath} can't be accessed.`;
    }
    throw {
      name: 'Output File Error',
      message,
      exitCode: 2
    };
  }
  try {
    return fs.createWriteStream(filePath, { flags: 'a+' });
  } catch (error) {
    throw {
      name: 'OutputStream Error',
      message: `File ${filePath} can't be processed properly.`,
      exitCode: 2
    };
  }
}

module.exports = { inputStream, outputStream };
