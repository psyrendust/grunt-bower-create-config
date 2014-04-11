# grunt-bower-create-config

> Create bower config files with Grunt

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bower-create-config --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-create-config');
```

### Overview
In your project's Gruntfile, add a section named `bowerCreateConfig` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bowerCreateConfig: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.dest
Type: `String`
Default value: ``

A string value that to define the destination folder to create `bower.json`.

#### options.replacer
Type: `Function`, `Array`
Default value: `null`

A value that is passed to `JSON.stringify()` as the `replacer` parameter.

#### options.space
Type: `String`, `int`
Default value: `2`

A value that is passed to `JSON.stringify()` as the `string` parameter.

#### options.config
Type: `Object`
Default value: `{}`

A `JSON` object that is used to populate the `bower.json` file.

#### options.changeCase.case
Type: `String`
Default value: `null`

A parameter that defines case converstion for any `keys` that match `options.changeCase.keys`.

#### options.changeCase.keys
Type: `Array`
Default value: `null`

An array of strings that define which properties of the JSON file you would like to do case conversion on using `options.changeCase.case`.

### Usage Examples

#### Custom Options
In this example, the we are loading values from `./bower.json` and saving a new file to `../foo-bar/bower.json`. The `name` property in the destination file will be converted to `camelCase`.

```js
grunt.initConfig({
  bowerConfig: grunt.file.readJSON('./bower.json'),
  bowerCreateConfig: {
    dist: {
      options: {
        dest: '../foo-bar',
        space: 2,
        changeCase: {
          keys: ['name'],
          case: 'camelCase'
        },
        config: {
          name: '<%= bowerConfig.name %>',
          version: '<%= bowerConfig.version %>',
          main: '<%= bowerConfig.main %>',
          license: '<%= bowerConfig.license %>',
          homepage: '<%= bowerConfig.homepage %>',
          private: '<%= bowerConfig.private %>',
          keywords: '<%= bowerConfig.keywords %>',
          dependencies: '<%= bowerConfig.dependencies %>'
        }
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

