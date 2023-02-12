# better-xml-formatter
Hi. This is a library that can be used to automaticaly format XML files.

## Usage

First install the package

```
$ npm install better-xml-formatter
```

Then import the main function into your code:

```
import formatXMLString from 'better-xml-formatter';

const { formatted, message } = formatXMLString(``, 4, 120);
if (formatted) {
  console.log(formatted);
}
```

The first argument is the string you want to format. The second one is
the amount of spaces you want to use at each indentation level. The third
one is the maximum line size you want.

The function returns the formatted text inside an object.