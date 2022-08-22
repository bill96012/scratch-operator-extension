class ScratchAdvancedOperators {
  constructor() {}
  
  getInfo() {
    return {
      id: 'advancedOperators',
      name: 'Advanced Operators',
      
      menuIconURI: '',
      blockIconURI: '',
      
      docsURI: '',

      blocks: [
        {
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[BASE] ^ [EXPONENT]',
          arguments: {
            BASE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            EXPONENT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        },
        '---',
        {
          opcode: 'conditional',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [CONDITION] then [IF_TRUE] else [IF_FALSE]',
          arguments: {
            CONDITION: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            IF_TRUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            IF_FALSE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            }
          }
        },
        '---',
        {
          opcode: 'greaterThan',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '(case sensitive) [INPUT_1] > [INPUT_2]',
          arguments: {
            INPUT_1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            },
            INPUT_2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },
        {
          opcode: 'lessThan',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '(case sensitive) [INPUT_1] < [INPUT_2]',
          arguments: {
            INPUT_1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            },
            INPUT_2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },
        {
          opcode: 'equals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '(case sensitive) [INPUT_1] = [INPUT_2]',
          arguments: {
            INPUT_1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            },
            INPUT_2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },
        '---',
        {
          opcode: 'boolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Boolean [INPUT]',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'boolean'
            }
          }
        },
        {
          opcode: 'isNumber',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT] is number?',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            }
          }
        },
        {
          opcode: 'characterIsEnglishAlphabet',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'character [INPUT] is an English alphabet?',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'a'
            }
          }
        },
        {
          opcode: 'characterIsUpperCase',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'character [INPUT] is uppercase?',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'A'
            }
          }
        },
        {
          opcode: 'characterIsLowerCase',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'character [INPUT] is lowercase?',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'a'
            }
          }
        },
        '---',
        {
          opcode: 'slice',
          blockType: Scratch.BlockType.REPORTER,
          text: 'letters [INDEX_BEGIN] to [INDEX_END] of [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            INDEX_BEGIN: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            INDEX_END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'replace',
          blockType: Scratch.BlockType.REPORTER,
          text: 'replace [INDEX] of [PATTERN] in [STRING] with [REPLACEMENT]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana and banana'
            },
            INDEX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            PATTERN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            REPLACEMENT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'repeat',
          blockType: Scratch.BlockType.REPORTER,
          text: 'repeat [STRING] [COUNT] times',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            COUNT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        },
        {
          opcode: 'reverse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'reverse [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'toUpperCase',
          blockType: Scratch.BlockType.REPORTER,
          text: '[STRING] to upper case',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Apple'
            }
          }
        },
        {
          opcode: 'toLowerCase',
          blockType: Scratch.BlockType.REPORTER,
          text: '[STRING] to lower case',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Apple'
            }
          }
        },
        {
          opcode: 'capitalize',
          blockType: Scratch.BlockType.REPORTER,
          text: 'capitalize [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'count',
          blockType: Scratch.BlockType.REPORTER,
          text: 'count [PATTERN] in [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            PATTERN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'a'
            }
          }
        },
        {
          opcode: 'includes',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '(case sensitive) [STRING] contains [PATTERN] ?',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            PATTERN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'a'
            }
          }
        },
        '---',
        {
          opcode: 'getLine',
          blockType: Scratch.BlockType.REPORTER,
          text: 'line [LINE_NUMBER] of [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple\nbanana'
            },
            LINE_NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'capitalizeLine',
          blockType: Scratch.BlockType.REPORTER,
          text: 'capitalize every line in [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple\nbanana'
            }
          }
        },
        {
          opcode: 'newLine',
          blockType: Scratch.BlockType.REPORTER,
          text: 'new line',
          disableMonitor: true
        },
        '---',
        {
          opcode: 'min_max',
          blockType: Scratch.BlockType.REPORTER,
          text: '[MIN_MAX] of [NUMBER_1] and [NUMBER_2]',
          arguments: {
            MIN_MAX: {
              type: Scratch.ArgumentType.STRING,
              menu: 'min_max'
            },
            NUMBER_1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            NUMBER_2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '50'
            }
          }
        }
      ],
      menus: {
        boolean: {
          items: [
            'true',
            'false'
          ],
          acceptReporters: true
        },
        min_max: {
          items: [
            'minimum',
            'maximum'
          ]
        }
      }
    };
  }

  power({BASE, EXPONENT}) {
    return Math.pow(BASE, EXPONENT)
  }

  conditional({CONDITION, IF_TRUE, IF_FALSE}) {
    return Boolean(CONDITION) ? IF_TRUE : IF_FALSE;
  }
  
  greaterThan({INPUT_1, INPUT_2}) {
    return INPUT_1 > INPUT_2;
  }
  
  lessThan({INPUT_1, INPUT_2}) {
    return INPUT_1 < INPUT_2;
  }
  
  equals({INPUT_1, INPUT_2}) {
    return INPUT_1 == INPUT_2;
  }
  
  boolean({INPUT}) {
    return (INPUT == 'true' || INPUT == true) ? true : false;
  }
  
  isNumber({INPUT}) {
    return !(isNaN(INPUT) || INPUT === '');
  }

  characterIsEnglishAlphabet({INPUT}) {
    INPUT = String(INPUT);
    if(INPUT === '') return false;
    return /([A-Z]|[a-z])+/g.test(INPUT[0]);
  }

  characterIsUpperCase({INPUT}) {
    if(this.characterIsEnglishAlphabet({INPUT: INPUT})) {
      INPUT = String(INPUT);
    } else {
      return false;
    }
    return (INPUT[0].toUpperCase() === INPUT[0] && INPUT[0] !== INPUT.toLowerCase());
  }

  characterIsLowerCase({INPUT}) {
    if(this.characterIsEnglishAlphabet({INPUT: INPUT})) {
      INPUT = String(INPUT);
    } else {
      return false;
    }
    return (INPUT[0].toLowerCase() === INPUT[0] && INPUT[0] !== INPUT.toUpperCase());
  }

  slice({STRING, INDEX_BEGIN, INDEX_END}) {
    STRING = String(STRING);
    if(INDEX_BEGIN === 0 || INDEX_BEGIN === '') return STRING;
    return INDEX_END === '' || (INDEX_END < 0 && INDEX_END + 1 === 0) ? STRING.slice(INDEX_BEGIN < 0 ? INDEX_BEGIN : INDEX_BEGIN - 1) : STRING.slice(INDEX_BEGIN < 0 ? INDEX_BEGIN : INDEX_BEGIN - 1, INDEX_END < 0 ? INDEX_END + 1 : INDEX_END);
  }

  replace({STRING, INDEX, PATTERN, REPLACEMENT}) {
    STRING = String(STRING);
    if(STRING === '' || PATTERN === '' || REPLACEMENT === PATTERN) return STRING;
    if(INDEX === '') {
      INDEX = 0;
    } else if(!(Number.isInteger(INDEX))) {
      INDEX = Math.floor(INDEX);
    };
    if(INDEX != 0) {
      let result = STRING.split(PATTERN);
      if(result.length == 1 || Math.abs(INDEX) >= result.length) return STRING;
      result.splice((INDEX < 0 ? result.length + INDEX : INDEX) - 1, 2, `${result[(INDEX < 0 ? result.length + INDEX : INDEX) - 1]}${REPLACEMENT}${result[INDEX < 0 ? result.length + INDEX : INDEX]}`)
      return result.length > 1 ? result.join(PATTERN) : result[0];
    } else {
      return STRING.replaceAll(PATTERN, REPLACEMENT);
    }
  }

  repeat({STRING, COUNT}) {
    STRING = String(STRING);
    return STRING.repeat(COUNT);
  }

  reverse({STRING}) {
    STRING = String(STRING);
    return STRING.split('').reverse().join('');
  }
  
  toUpperCase({STRING}) {
    STRING = String(STRING);
    return STRING.toUpperCase();
  }
  
  toLowerCase({STRING}) {
    STRING = String(STRING);
    return STRING.toLowerCase();
  }
  
  capitalize({STRING}) {
    STRING = String(STRING);
    if(STRING === '') return STRING;
    return `${STRING[0].toUpperCase()}${STRING.slice(1)}`;
  }
  
  count({STRING, PATTERN}) {
    STRING = String(STRING);
    if(STRING === '') return 0;
    return STRING.split(PATTERN).length - 1;
  }
  
  includes({STRING, PATTERN}) {
    STRING = String(STRING);
    return STRING.includes(PATTERN);
  }
  
  getLine({STRING, LINE_NUMBER}) {
    STRING = String(STRING);
    if(STRING === '' || LINE_NUMBER === '' || LINE_NUMBER == 0) return STRING;
    let result = STRING.split('\n');
    if(Math.abs(LINE_NUMBER) >= result.length) return '';
    return result[LINE_NUMBER < 0 ? result.length + LINE_NUMBER : LINE_NUMBER - 1];
  }
  
  capitalizeLine({STRING}) {
    STRING = String(STRING);
    if(STRING === '') return STRING;
    return STRING
      .split('\n')
      .map((line) => {
        if(!(line === '')) return `${line[0].toUpperCase()}${line.slice(1)}`
      })
      .join('\n');
  }

  newLine() {
    return '\n';
  }
  
  min_max({MIN_MAX, NUMBER_1, NUMBER_2}) {
    if(MIN_MAX === 'minimum') {
      return Math.min(NUMBER_1, NUMBER_2);
    } else if(MIN_MAX === 'maximum') {
      return Math.max(NUMBER_1, NUMBER_2);
    }
  }
}

Scratch.extensions.register(new ScratchAdvancedOperators())