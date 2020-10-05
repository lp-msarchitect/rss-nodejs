# TASK1 Caesar cipher CLI tool

**The repository contains CLI tool which encode or decode a text by Caesar Cipher**

**Start Usage**

For installing necessary modules and their dependencies run the following command in the terminal (from the directory containing this README):
```bash
> cd task1
> npm install
```

**Start Usage**

For starting to work with CLI need to run next command in the terminal (from the root repository directory):
```bash 
$ node task1 -s 2 -a encode
```

**Possible Options:**
1.  **-s, --shift \<shift>**: required number, shift on how many characters will happen
2.  **-a, --action \<action>**: required string, type of an action - encode or decode
3.  **-i, --input \<input>**: optional string, an input file path
4.  **-o, --output \<output>**: optional string, an output file path

**Details:**
1. If action or shift options aren't provided, error message will be showed
2. If the input file is missed - text may be entered by terminal
3. If the output file is missed - encoded/decoded text will be provided into terminal
4. If the input and/or output file is given but doesn't exist or can't be readable, error will be provided in the terminal
5. Only English alphabet is encoding/decoding, all other characters are kept untouched

**Usage examples:**
- Encode by terminal
```bash
$ node task1 -a encode -s 1
```
> terminal input:
> `Hello World!`

> terminal output:
> `Gdkkn Vnqkc!`

- Decode by terminal
```bash
$ node task1 -a decode -s 1
```
> terminal input:
> `Gdkkn Vnqkc!`

> terminal output:
> `Hello World!`

- Encode by files
```bash
$ node task1 -a encode -s 1 -i ./input.txt -o ./output.txt
```
> ./input.txt
> `Hello World!`

> ./output.txt
> `Gdkkn Vnqkc!`

# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
