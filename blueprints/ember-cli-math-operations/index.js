/* eslint-env node */
module.exports = {
  description: '',
  afterInstall: function () {
    return this.addBowerPackageToProject('@fictionlover/math-operations', '8.0.1');
  }

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
};
