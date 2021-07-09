// eslint-disable-next-line import/no-extraneous-dependencies
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>');

const { window } = dom;

global.window = window;
global.document = window.document;
