'use strict';

/**
 * Method to extract JSON data from HTML block
 *
 * @param block
 */

module.exports = function (text) {
  let data = {
    'text': text,
    'format': 'html',
    'introText': '<<same>>'
  };

  return data;
};
