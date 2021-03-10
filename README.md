leacli
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/leacli.svg)](https://npmjs.org/package/leacli)
[![Downloads/week](https://img.shields.io/npm/dw/leacli.svg)](https://npmjs.org/package/leacli)
[![License](https://img.shields.io/npm/l/leacli.svg)](https://github.com/leannecornish-ft/leacli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g leacli
$ leacli COMMAND
running command...
$ leacli (-v|--version|version)
leacli/0.0.0 darwin-x64 node-v14.16.0
$ leacli --help [COMMAND]
USAGE
  $ leacli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`leacli hello [FILE]`](#leacli-hello-file)
* [`leacli help [COMMAND]`](#leacli-help-command)

## `leacli hello [FILE]`

describe the command here

```
USAGE
  $ leacli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ leacli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/leannecornish-ft/leacli/blob/v0.0.0/src/commands/hello.ts)_

## `leacli help [COMMAND]`

display help for leacli

```
USAGE
  $ leacli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
