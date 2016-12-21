const moment = require('moment')
const should = require('chai').should()
const {localizeDate} = require('../index')

describe('localizeDate', function() {
   it('without timezone it converts 05.12.2015 11pm UTC to 05.12.2015', function() {
      localizeDate(null, moment.utc('2015-12-05T23:00:00'))
         .should.deep.equal({
           year: 2015,
           month: 11,
           day: 5,
           week: 49,
           hour: 23,
           minute: 0,
           minutesFromStartOfDay: 1380
         })
   })

   it('in Singapore timezone it converts 05.12.2015 11pm UTC to 2015,11,6', function() {
      localizeDate('Asia/Singapore', moment.utc('2015-12-05T23:00:00'))
         .should.deep.equal({
           year: 2015,
           month: 11,
           day: 6,
           week: 50,
           hour: 7,
           minute: 0,
           minutesFromStartOfDay: 420
         })
   });

   it('in Germany timezone it converts 06.12.2015 2am UTC+0800 to 2015,11,5', function() {
      localizeDate('Europe/Berlin', moment.utc('2015-12-06T02:00:00+0800'))
         .should.deep.equal({
           year: 2015,
           month: 11,
           day: 5,
           week: 49,
           hour: 19,
           minute: 0,
           minutesFromStartOfDay: 1140
         })
   });

   it('in Germany timezone it converts 05.12.2015 11pm UTC to 2015,11,06', function() {
      localizeDate('Europe/Berlin', moment.utc('2015-12-05T23:00:00'))
         .should.deep.equal({
           year: 2015,
           month: 11,
           day: 6,
           week: 50,
           hour: 0,
           minute: 0,
           minutesFromStartOfDay: 0
         })
   });

});
