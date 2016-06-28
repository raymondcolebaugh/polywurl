# Polywurl

## Introduction
polywurl is a simple helper module for assisting in creating websites with CSS framework agnostic class usage by providing a translation interface between a generic class name and the selected framework's class conventions. Currently has minimal class support for Bootstrap and Foundation.

## Installation
Install via npm by executing: `npm install polywurl`

## Usage
```javascript
var polywurl = require('./src/polywurl.js');
var bootstrap = new polywurl("bootstrap");
var foundation = new polywurl("foundation");

console.log(bootstrap.getClass('column-large-4'));
// col-lg-4
console.log(bootstrap.getClass('button-default'));
// btn btn-default
console.log(foundation.getClass('column-large-4'));
// column large-4
console.log(foundation.getClass('button-default'));
//  button secondary
```
