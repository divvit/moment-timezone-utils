Moment Timezone Utils
=========

Utility functions for moment-timezone.js

## Installation

  npm install moment-timezone-utils --save

## Usage

  var timezoneUtils = require('moment-timezone-utils');

  var dateParts = timezoneUtils.localizeDate('Europe/Berlin', moment('2015-12-05T23:00:00'));

  console.log('Year: ', dateParts.year, 'Month (0-based): ', dateParts.month, 'Day: ', dateParts.day, 'Week: ', dateParts.week);

## Tests

  npm test

## Contributing

Nino Ulsamer, Divvit AB

## Release History

* 0.0.1 Initial release
