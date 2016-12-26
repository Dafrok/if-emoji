# if-emoji

Check a character if it is a correctly supported emoji.

## Install

```
$ npm i if-emoji
```

## Usage

```js
import ifEmoji from 'if-emoji'

ifEmoji('蛤') // => false
ifEmoji('🐸') // => If your system / browser supports this emoji character correctly, the returned value will be true.
```