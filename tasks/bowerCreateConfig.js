/**
 * Create bower config files with Grunt.
 */

'use strict';

module.exports = function (grunt, options) {

  grunt.registerMultiTask('bowerCreateConfig', 'Create bower config files with Grunt.', function() {
    var path = require('path');
    var _ = require('lodash');
    var changeCase = require('change-case');
    var done = this.async();


    // Merge task-specific and/or target-specific options with these defaults.
    var defaults = {
      space: 2,
      replacer: null,
      changeCase: null,
      config: {}
    };
    var options = this.options(defaults);
    grunt.verbose.writeln('options: '.magenta + JSON.stringify(options, null, 2));

    if (!!!options.dest) {
      grunt.warn('Please specify a destination');
    } else {
      var dest = path.join(options.dest, 'bower.json');
      var config = options.config;
      grunt.log.writeln('Writing config to: '.cyan + dest);
      if (options.changeCase && options.changeCase.keys && options.changeCase.keys.length > 0) {
        _.map(options.changeCase.keys, function(key){
          if (options.config[key] && grunt.util.kindOf(options.config[key]) === 'string') {
            options.config[key] = changeCase[options.changeCase.case](options.config[key]);
          }
        });
      }
      grunt.file.write(dest, JSON.stringify(config, options.replacer, options.space));
      grunt.log.ok();
    }
    done();
  });
};
