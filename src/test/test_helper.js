import "babel-polyfill";
import { expect, assert } from 'chai';
import sinon from 'sinon';
import request from 'superagent';

global.expect = expect;
global.sinon = sinon;
global.request = request;
global.assert = assert;
