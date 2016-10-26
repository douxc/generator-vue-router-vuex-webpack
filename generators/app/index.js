'use strict'
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the posh ' + chalk.red('generator-vue') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectname',
      message: 'project name?',
      default: 'vueproject'
    }, {
      type: 'input',
      name: 'author',
      message: 'author name?',
      default: ''
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
      name: this.props.projectname,
      author: this.props.author
    });
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
      name: this.props.projectname
    });
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copy(this.templatePath('build/*.js'), this.destinationPath('build/'));
    this.fs.copy(this.templatePath('config/**/*.js'), this.destinationPath('config/'));
    this.fs.copy(this.templatePath('src/**/*.*'), this.destinationPath('src/'));
    this.fs.copy(this.templatePath('static/**/*.*'), this.destinationPath('static/'));
    this.fs.copy(this.templatePath('.babelrc'), this.destinationPath('.babelrc'));
    this.fs.copy(this.templatePath('.editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('.eslintignore'), this.destinationPath('.eslintignore'));
    this.fs.copy(this.templatePath('.eslintrc.js'), this.destinationPath('.eslintrc.js'));
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  },
  end: function () {
    this.log('start dev server on localhost');
    this.spawnCommandSync('npm', ['run', 'dev']);
  }
});
