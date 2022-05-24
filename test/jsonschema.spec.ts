import tap from 'tap'

import {
  usesVocabulary
} from '../lib/jsonschema'

tap.test('usesVocabulary() should be true for everything (for now)', (test) => {
  test.ok(usesVocabulary({}, {}, 'foobar'))
  test.end()
})
