ZIP
===
[![Build Status](https://travis-ci.org/kriskowal/zip.svg?branch=master)](https://travis-ci.org/kriskowal/zip)
[![Build status](https://ci.appveyor.com/api/projects/status/l4s4n56skbaj6map/branch/master?svg=true)](https://ci.appveyor.com/project/kriskowal/zip/branch/master)
[![NPM version](https://badge.fury.io/js/zip.svg)](http://badge.fury.io/js/zip)
[![Dependency Status](https://img.shields.io/david/kriskowal/zip.svg)](https://david-dm.org/kriskowal/zip)
[![npm](https://img.shields.io/npm/dm/zip.svg?maxAge=2592000)]()
```js
var ZIP = require('zip');
var data = new Buffer(...);
var reader = ZIP.Reader(data);

reader.toObject(charset_opt);
reader.forEach(function (entry) {});
reader.iterator();
```

Copyright 1999 Masanao Izumo <iz@onicos.co.jp> License Unknown
Copyright 2010 Tom Robinson (http://tlrobinson.net/) MIT License (enclosed)
Copyright 2011 Kristopher Michael Kowal MIT License (enclosed)

