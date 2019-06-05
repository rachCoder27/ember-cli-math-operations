'use strict';

module.exports = {
  name: 'ember-cli-math-operations',
  included: function included(app) {
    app.import('node_modules/@fictionlover/math-operations/dist/mathoperations.js');
  }
};
