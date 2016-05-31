# ChileAyuda Mapa

[![Build Status](https://travis-ci.org/m4droid/ChileAyuda-Mapa.svg?branch=master)](https://travis-ci.org/m4droid/ChileAyuda-Mapa)
[![Coverage Status](https://coveralls.io/repos/github/m4droid/ChileAyuda-Mapa/badge.svg?branch=master)](https://coveralls.io/github/m4droid/ChileAyuda-Mapa?branch=master)

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

### Develop instructions

##### 1. INSTALL SYSTEM REQUIREMENTS
	# Ruby Compass
	gem install compass

	# Node.js packages
	npm install -g grunt-cli bower yo generator-karma generator-angular

##### 2. INSTALL PROJECT REQUIREMENTS
	# Node.js packages
	npm install

	# Bower packages
	bower install

##### 3. RUN WEB SERVICE
    grunt serve

### Run tests (Karma)
    grunt test

### Heroku related

#### Buildpacks (before deploying)
    heroku buildpacks:add https://github.com/nknj/heroku-buildpack-yo-angular.git
