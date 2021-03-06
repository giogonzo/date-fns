// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import parseJSON from '.'
import moment from 'moment'

suite('toDate', function() {
  benchmark('date-fns', function() {
    return parseJSON('2014-10-25T13:46:20+00:00')
  })

  benchmark('Moment.js', function() {
    return moment('2014-10-25T13:46:20+00:00')
  })
})
