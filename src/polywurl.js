/**
 * Polywurl: CSS Framework Translation Helper
 *
 * @author: Raymond Colebaugh
 * @date: Sat Jun 18 2016
 */
'use strict';

module.exports = class Polywurl {
    constructor(framework) {
        this.framework = framework;
        this.initializeLookup();
    }

    initializeLookup() {
        if (this.framework === 'bootstrap') {
            this.lookup = bootstrap;
        } else if (this.framework === 'foundation') {
            this.lookup = foundation;
        }
    }

    // TODO array[] notation?
    getClass(name) { return this.lookup[name]; }
};

var bootstrap = {
    'jumbotron': 'jumbotron',

    'inline-list': 'list-unstyled list-inline',

    'alert-success': 'alert alert-success',
    'alert-danger': 'alert alert-danger',

    'button-default': 'btn btn-default',
    'button-success': 'btn btn-success',
    'button-primary': 'btn btn-success', // TODO

    'column-small-1': 'col-sm-1',
    'column-small-2': 'col-sm-2',
    'column-small-3': 'col-sm-3',
    'column-small-4': 'col-sm-4',
    'column-small-5': 'col-sm-5',
    'column-small-6': 'col-sm-6',
    'column-small-7': 'col-sm-7',
    'column-small-8': 'col-sm-8',
    'column-small-9': 'col-sm-9',
    'column-small-10': 'col-sm-10',
    'column-small-11': 'col-sm-11',
    'column-small-12': 'col-sm-12',
    'column-medium-1': 'col-md-1',
    'column-medium-2': 'col-md-2',
    'column-medium-3': 'col-md-3',
    'column-medium-4': 'col-md-4',
    'column-medium-5': 'col-md-5',
    'column-medium-6': 'col-md-6',
    'column-medium-7': 'col-md-7',
    'column-medium-8': 'col-md-8',
    'column-medium-9': 'col-md-9',
    'column-medium-10': 'col-md-10',
    'column-medium-11': 'col-md-11',
    'column-medium-12': 'col-md-12',
    'column-large-1': 'col-lg-1',
    'column-large-2': 'col-lg-2',
    'column-large-3': 'col-lg-3',
    'column-large-4': 'col-lg-4',
    'column-large-5': 'col-lg-5',
    'column-large-6': 'col-lg-6',
    'column-large-7': 'col-lg-7',
    'column-large-8': 'col-lg-8',
    'column-large-9': 'col-lg-9',
    'column-large-10': 'col-lg-10',
    'column-large-11': 'col-lg-11',
    'column-large-12': 'col-lg-12',

    'column-small-offset-1': 'col-sm-offset-1',
    'column-small-offset-2': 'col-sm-offset-2',
    'column-small-offset-3': 'col-sm-offset-3',
    'column-small-offset-4': 'col-sm-offset-4',
    'column-small-offset-5': 'col-sm-offset-5',
    'column-small-offset-6': 'col-sm-offset-6',
    'column-small-offset-7': 'col-sm-offset-7',
    'column-small-offset-8': 'col-sm-offset-8',
    'column-small-offset-9': 'col-sm-offset-9',
    'column-small-offset-10': 'col-sm-offset-10',
    'column-small-offset-11': 'col-sm-offset-11',
    'column-small-offset-12': 'col-sm-offset-12',
    'column-medium-offset-1': 'col-md-offset-1',
    'column-medium-offset-2': 'col-md-offset-2',
    'column-medium-offset-3': 'col-md-offset-3',
    'column-medium-offset-4': 'col-md-offset-4',
    'column-medium-offset-5': 'col-md-offset-5',
    'column-medium-offset-6': 'col-md-offset-6',
    'column-medium-offset-7': 'col-md-offset-7',
    'column-medium-offset-8': 'col-md-offset-8',
    'column-medium-offset-9': 'col-md-offset-9',
    'column-medium-offset-10': 'col-md-offset-10',
    'column-medium-offset-11': 'col-md-offset-11',
    'column-medium-offset-12': 'col-md-offset-12',
    'column-large-offset-1': 'col-lg-offset-1',
    'column-large-offset-2': 'col-lg-offset-2',
    'column-large-offset-3': 'col-lg-offset-3',
    'column-large-offset-4': 'col-lg-offset-4',
    'column-large-offset-5': 'col-lg-offset-5',
    'column-large-offset-6': 'col-lg-offset-6',
    'column-large-offset-7': 'col-lg-offset-7',
    'column-large-offset-8': 'col-lg-offset-8',
    'column-large-offset-9': 'col-lg-offset-9',
    'column-large-offset-10': 'col-lg-offset-10',
    'column-large-offset-11': 'col-lg-offset-11',
    'column-large-offset-12': 'col-lg-offset-12',
};
var foundation = {
    'jumbotron': 'row radius text-center',

    'inline-list': 'inline-list',

    'alert-success': 'alert-box success',
    'alert-danger': 'alert-box warning',

    'button-default': 'button secondary',
    'button-success': 'button success',
    'button-primary': 'button success', // TODO

    'column-small-1': 'column small-1',
    'column-small-2': 'column small-2',
    'column-small-3': 'column small-3',
    'column-small-4': 'column small-4',
    'column-small-5': 'column small-5',
    'column-small-6': 'column small-6',
    'column-small-7': 'column small-7',
    'column-small-8': 'column small-8',
    'column-small-9': 'column small-9',
    'column-small-10': 'column small-10',
    'column-small-11': 'column small-11',
    'column-small-12': 'column small-12',
    'column-medium-1': 'column medium-1',
    'column-medium-2': 'column medium-2',
    'column-medium-3': 'column medium-3',
    'column-medium-4': 'column medium-4',
    'column-medium-5': 'column medium-5',
    'column-medium-6': 'column medium-6',
    'column-medium-7': 'column medium-7',
    'column-medium-8': 'column medium-8',
    'column-medium-9': 'column medium-9',
    'column-medium-10': 'column medium-10',
    'column-medium-11': 'column medium-11',
    'column-medium-12': 'column medium-12',
    'column-large-1': 'column large-1',
    'column-large-2': 'column large-2',
    'column-large-3': 'column large-3',
    'column-large-4': 'column large-4',
    'column-large-5': 'column large-5',
    'column-large-6': 'column large-6',
    'column-large-7': 'column large-7',
    'column-large-8': 'column large-8',
    'column-large-9': 'column large-9',
    'column-large-10': 'column large-10',
    'column-large-11': 'column large-11',
    'column-large-12': 'column large-12',

    'column-small-offset-1': 'column small-offset-1',
    'column-small-offset-2': 'column small-offset-2',
    'column-small-offset-3': 'column small-offset-3',
    'column-small-offset-4': 'column small-offset-4',
    'column-small-offset-5': 'column small-offset-5',
    'column-small-offset-6': 'column small-offset-6',
    'column-small-offset-7': 'column small-offset-7',
    'column-small-offset-8': 'column small-offset-8',
    'column-small-offset-9': 'column small-offset-9',
    'column-small-offset-10': 'column small-offset-10',
    'column-small-offset-11': 'column small-offset-11',
    'column-small-offset-12': 'column small-offset-12',
    'column-medium-offset-1': 'column medium-offset-1',
    'column-medium-offset-2': 'column medium-offset-2',
    'column-medium-offset-3': 'column medium-offset-3',
    'column-medium-offset-4': 'column medium-offset-4',
    'column-medium-offset-5': 'column medium-offset-5',
    'column-medium-offset-6': 'column medium-offset-6',
    'column-medium-offset-7': 'column medium-offset-7',
    'column-medium-offset-8': 'column medium-offset-8',
    'column-medium-offset-9': 'column medium-offset-9',
    'column-medium-offset-10': 'column medium-offset-10',
    'column-medium-offset-11': 'column medium-offset-11',
    'column-medium-offset-12': 'column medium-offset-12',
    'column-large-offset-1': 'column large-offset-1',
    'column-large-offset-2': 'column large-offset-2',
    'column-large-offset-3': 'column large-offset-3',
    'column-large-offset-4': 'column large-offset-4',
    'column-large-offset-5': 'column large-offset-5',
    'column-large-offset-6': 'column large-offset-6',
    'column-large-offset-7': 'column large-offset-7',
    'column-large-offset-8': 'column large-offset-8',
    'column-large-offset-9': 'column large-offset-9',
    'column-large-offset-10': 'column large-offset-10',
    'column-large-offset-11': 'column large-offset-11',
    'column-large-offset-12': 'column large-offset-12',
};

