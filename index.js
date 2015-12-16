module.exports = {

   localizeDate: function (timezone, date) {
      var moment = require('moment-timezone');

      var mDate = moment(date);
      if (timezone)
         mDate.tz(timezone);

      return {
         year: mDate.year(),
         month: mDate.month(),
         day: mDate.date(),
         week: mDate.week()
      };
   }

};
