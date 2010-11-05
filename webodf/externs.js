/*global Packages*/
/**
 * @constructor
 */
function NodeJSObject() {}
/**
 * @param {!string} path
 * @param {function(...)} callback
 * @return {undefined}
 */
NodeJSObject.prototype.stat = function (path, callback) {};
/**
 * @param {!string} path
 * @param {?string} encoding
 * @param {function(...)} callback
 * @return {?string}
 */
NodeJSObject.prototype.readFile = function (path, encoding, callback) {};
/**
 * @param {!string} path
 * @param {?string} encoding
 * @return {?string}
 */
NodeJSObject.prototype.readFileSync = function (path, encoding) {};
/**
 * @param {!string} path
 * @param {!string} flags
 * @param {!number} mode
 * @param {!function(string, !number):undefined} callback
 * @return {undefined}
 */
NodeJSObject.prototype.open = function (path, flags, mode, callback) {};
/**
 * @param {!number} fd
 * @param {!Buffer} buffer
 * @param {!number} offset
 * @param {!number} length
 * @param {!number} position
 * @param {function(string, !number)} callback
 * @return {undefined}
 */
NodeJSObject.prototype.read = function (fd, buffer, offset, length, position, callback) {};
/**
 * @param {!number} fd
 * @param {function(!string)} callback
 * @return {undefined}
 */
NodeJSObject.prototype.close = function (fd, callback) {};
/**
 * @param {!string} className
 * @return {!NodeJSObject}
 */
function require(className) {}
/**
 * @constructor
 */
function NodeJSConsole() {}
/**
 * @type {!NodeJSConsole}
 */
var console;
/**
 * @constructor
 */
function NodeJSProcess() {}
/**
 * @param {!number} exitCode
 * @return {undefined}
 */
NodeJSProcess.prototype.exit = function (exitCode) {};
/**
 * @type {!Array}
 */
NodeJSProcess.prototype.argv = [];
/**
 * @type {!NodeJSProcess}
 */
var process;
/**
 * @type {!string}
 */
var __dirname;
/**
 * @constructor
 * @param {!number} length
 */
function Buffer(length) {}
/**
 * @param {!string} msg
 * @return {undefined}
 */
function print(msg) {}
/**
 * @param {!string} path
 * @param {!string=} encoding
 * @return {?string}
 */
function readFile(path, encoding) {}
/**
 * @param {!number} exitCode
 * @return {undefined}
 */
function quit(exitCode) {}
/**
 * @namespace
 */
Packages.javax = {};
/**
 * @namespace
 */
Packages.javax.xml = {};
/**
 * @namespace
 */
Packages.javax.xml.validation = {};
/**
 * @constructor
 */
Packages.javax.xml.validation.Schema = function () {};
/**
 * @namespace
 */
Packages.javax.xml.parsers = {};
/**
 * @constructor
 */
Packages.javax.xml.parsers.DocumentBuilder = function () {};
/**
 * @param {!Object} entityresolver
 * @return {undefined}
 */
Packages.javax.xml.parsers.DocumentBuilder.prototype.setEntityResolver = function (entityresolver) {};
/**
 * @param {!Packages.org.xml.sax.InputSource} source 
 * @return {Document}
 */
Packages.javax.xml.parsers.DocumentBuilder.prototype.parse = function (source) {};
/**
 * @return {DOMImplementation}
 */
Packages.javax.xml.parsers.DocumentBuilder.prototype.getDOMImplementation = function () {};
/**
 * @constructor
 */
Packages.javax.xml.parsers.DocumentBuilderFactory = function () {};
/**
 * @return {!Packages.javax.xml.parsers.DocumentBuilderFactory}
 */
Packages.javax.xml.parsers.DocumentBuilderFactory.newInstance = function () {};
/**
 * @param {!boolean} value
 */
Packages.javax.xml.parsers.DocumentBuilderFactory.prototype.setValidating = function (value) {};
/**
 * @param {!boolean} value
 */
Packages.javax.xml.parsers.DocumentBuilderFactory.prototype.setNamespaceAware = function (value) {};
/**
 * @param {!boolean} value
 */
Packages.javax.xml.parsers.DocumentBuilderFactory.prototype.setExpandEntityReferences = function (value) {};
/**
 * @param {?Packages.javax.xml.validation.Schema} schema
 */
Packages.javax.xml.parsers.DocumentBuilderFactory.prototype.setSchema = function (schema) {};
/**
 * @return {!Packages.javax.xml.parsers.DocumentBuilder}
 */
Packages.javax.xml.parsers.DocumentBuilderFactory.prototype.newDocumentBuilder = function () {};
/**
 * @namespace
 */
Packages.org = {};
/**
 * @namespace
 */
Packages.org.xml.sax = {};
/**
 * @param {!Object} definition
 * @return {!Object}
 */
Packages.org.xml.sax.EntityResolver = function (definition) {};
/**
 * @namespace
 */
Packages.java.io = {};
/**
 * @constructor
 * @param {!string} path
 */
Packages.java.io.FileReader = function (path) {};
/**
 * @constructor
 * @param {!Packages.java.io.FileReader} reader
 */
Packages.org.xml.sax.InputSource = function (reader) {};