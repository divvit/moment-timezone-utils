const moment = require('moment-timezone')

module.exports = {
  localizeDate: function (timezone, date) {
    const mDate = moment(date)
    if (timezone) mDate.tz(timezone)

    return {
      year: mDate.year(),
      month: mDate.month(),
      day: mDate.date(),
      week: mDate.week(),
      hour: mDate.hour(),
      minute: mDate.minute(),
      minutesFromStartOfDay: mDate.diff(mDate.clone().startOf('day'), 'minutes')
    }
  }
}
