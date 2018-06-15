import { Component, OnInit } from '@angular/core';
import { DiffserviceService } from './services/diffservice.service';
import { DiffFile } from './services/file.interface';

declare var require: any;
var mockData = require('./services/mockdata.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result: DiffFile[] = []

  constructor(private diffService:DiffserviceService) {

  }

  ngOnInit() {

    this.result = this.diffService.getDiffInfo(mockData.bigAddRemove);

    console.log(this.result)
    
    console.log('-----------------------------');

//     var stuff = this.diffService.getFilesInfo(`diff --git a/README.md b/README.md
// index 132c8a2..46909f2 100644
// --- a/README.md
// +++ b/README.md
// @@ -98,6 +98,9 @@ The HTML output accepts a Javascript object with configuration. Possible options
//     - \`synchronisedScroll\`: scroll both panes in side-by-side mode: \`true\` or \`false\`, default is \`false\`
//     - \`matchWordsThreshold\`: similarity threshold for word matching, default is 0.25
//     - \`matchingMaxComparisons\`: perform at most this much comparisons for line matching a block of changes, default is \`2500\`
// +  - \`templates\`: object with previously compiled templates to replace parts of the html
// +  - \`rawTemplates\`: object with raw not compiled templates to replace parts of the html
// +  > For more information regarding the possible templates look into [src/templates](https://github.com/rtfpessoa/diff2html/tree/master/src/templates)
  
//   ## Diff2HtmlUI Helper
  
// diff --git a/scripts/hulk.js b/scripts/hulk.js
// index 5a793c1..a4b1a4d 100755
// --- a/scripts/hulk.js
// +++ b/scripts/hulk.js
// @@ -173,11 +173,11 @@ function namespace(name) {
//   // write a template foreach file that matches template extension
//   templates = extractFiles(options.argv.remain)
//     .map(function(file) {
// -    var openedFile = fs.readFileSync(file, 'utf-8');
// +    var openedFile = fs.readFileSync(file, 'utf-8').trim();
//       var name;
//       if (!openedFile) return;
//       name = namespace(path.basename(file).replace(/\..*$/, ''));
// -    openedFile = removeByteOrderMark(openedFile.trim());
// +    openedFile = removeByteOrderMark(openedFile);
//       openedFile = wrap(file, name, openedFile);
//       if (!options.outputdir) return openedFile;
//       fs.writeFileSync(path.join(options.outputdir, name + '.js')
// diff --git a/src/diff2html.js b/src/diff2html.js
// index 21b0119..64e138f 100644
// --- a/src/diff2html.js
// +++ b/src/diff2html.js
// @@ -7,7 +7,6 @@
  
//   (function() {
//     var diffParser = require('./diff-parser.js').DiffParser;
// -  var fileLister = require('./file-list-printer.js').FileListPrinter;
//     var htmlPrinter = require('./html-printer.js').HtmlPrinter;
  
//     function Diff2Html() {
// @@ -43,7 +42,7 @@
  
//       var fileList = '';
//       if (configOrEmpty.showFiles === true) {
// -      fileList = fileLister.generateFileList(diffJson, configOrEmpty);
// +      fileList = htmlPrinter.generateFileListSummary(diffJson, configOrEmpty);
//       }
  
//       var diffOutput = '';
// diff --git a/src/file-list-printer.js b/src/file-list-printer.js
// index e408d9b..1e0a2c6 100644
// --- a/src/file-list-printer.js
// +++ b/src/file-list-printer.js
// @@ -8,11 +8,16 @@
//   (function() {
//     var printerUtils = require('./printer-utils.js').PrinterUtils;
  
// -  var hoganUtils = require('./hoganjs-utils.js').HoganJsUtils;
// +  var hoganUtils;
// +
//     var baseTemplatesPath = 'file-summary';
//     var iconsBaseTemplatesPath = 'icon';
  
// -  function FileListPrinter() {
// +  function FileListPrinter(config) {
// +    this.config = config;
// +
// +    var HoganJsUtils = require('./hoganjs-utils.js').HoganJsUtils;
// +    hoganUtils = new HoganJsUtils(config);
//     }
  
//     FileListPrinter.prototype.generateFileList = function(diffFiles) {
// @@ -38,5 +43,5 @@
//       });
//     };
  
// -  module.exports.FileListPrinter = new FileListPrinter();
// +  module.exports.FileListPrinter = FileListPrinter;
//   })();
// diff --git a/src/hoganjs-utils.js b/src/hoganjs-utils.js
// index 9949e5f..b2e9c27 100644
// --- a/src/hoganjs-utils.js
// +++ b/src/hoganjs-utils.js
// @@ -8,18 +8,26 @@
//   (function() {
//     var fs = require('fs');
//     var path = require('path');
// -
//     var hogan = require('hogan.js');
  
//     var hoganTemplates = require('./templates/diff2html-templates.js');
  
// -  var templatesPath = path.resolve(__dirname, 'templates');
// +  var extraTemplates;
// +
// +  function HoganJsUtils(configuration) {
// +    this.config = configuration || {};
// +    extraTemplates = this.config.templates || {};
  
// -  function HoganJsUtils() {
// +    var rawTemplates = this.config.rawTemplates || {};
// +    for (var templateName in rawTemplates) {
// +      if (rawTemplates.hasOwnProperty(templateName)) {
// +        if (!extraTemplates[templateName]) extraTemplates[templateName] = this.compile(rawTemplates[templateName]);
// +      }
// +    }
//     }
  
// -  HoganJsUtils.prototype.render = function(namespace, view, params, configuration) {
// -    var template = this.template(namespace, view, configuration);
// +  HoganJsUtils.prototype.render = function(namespace, view, params) {
// +    var template = this.template(namespace, view);
//       if (template) {
//         return template.render(params);
//       }
// @@ -27,17 +35,16 @@
//       return null;
//     };
  
// -  HoganJsUtils.prototype.template = function(namespace, view, configuration) {
// -    var config = configuration || {};
// +  HoganJsUtils.prototype.template = function(namespace, view) {
//       var templateKey = this._templateKey(namespace, view);
  
// -    return this._getTemplate(templateKey, config);
// +    return this._getTemplate(templateKey);
//     };
  
// -  HoganJsUtils.prototype._getTemplate = function(templateKey, config) {
// +  HoganJsUtils.prototype._getTemplate = function(templateKey) {
//       var template;
  
// -    if (!config.noCache) {
// +    if (!this.config.noCache) {
//         template = this._readFromCache(templateKey);
//       }
  
// @@ -53,6 +60,7 @@
  
//       try {
//         if (fs.readFileSync) {
// +        var templatesPath = path.resolve(__dirname, 'templates');
//           var templatePath = path.join(templatesPath, templateKey);
//           var templateContent = fs.readFileSync(templatePath + '.mustache', 'utf8');
//           template = hogan.compile(templateContent);
// @@ -66,12 +74,16 @@
//     };
  
//     HoganJsUtils.prototype._readFromCache = function(templateKey) {
// -    return hoganTemplates[templateKey];
// +    return extraTemplates[templateKey] || hoganTemplates[templateKey];
//     };
  
//     HoganJsUtils.prototype._templateKey = function(namespace, view) {
//       return namespace + '-' + view;
//     };
  
// -  module.exports.HoganJsUtils = new HoganJsUtils();
// +  HoganJsUtils.prototype.compile = function(templateStr) {
// +    return hogan.compile(templateStr);
// +  };
// +
// +  module.exports.HoganJsUtils = HoganJsUtils;
//   })();
// diff --git a/src/html-printer.js b/src/html-printer.js
// index 585d5b6..13f8304 100644
// --- a/src/html-printer.js
// +++ b/src/html-printer.js
// @@ -8,6 +8,7 @@
//   (function() {
//     var LineByLinePrinter = require('./line-by-line-printer.js').LineByLinePrinter;
//     var SideBySidePrinter = require('./side-by-side-printer.js').SideBySidePrinter;
// +  var FileListPrinter = require('./file-list-printer.js').FileListPrinter;
  
//     function HtmlPrinter() {
//     }
// @@ -22,5 +23,10 @@
//       return sideBySidePrinter.generateSideBySideJsonHtml(diffFiles);
//     };
  
// +  HtmlPrinter.prototype.generateFileListSummary = function(diffJson, config) {
// +    var fileListPrinter = new FileListPrinter(config);
// +    return fileListPrinter.generateFileList(diffJson);
// +  };
// +
//     module.exports.HtmlPrinter = new HtmlPrinter();
//   })();
// diff --git a/src/line-by-line-printer.js b/src/line-by-line-printer.js
// index b07eb53..d230bed 100644
// --- a/src/line-by-line-printer.js
// +++ b/src/line-by-line-printer.js
// @@ -11,7 +11,8 @@
//     var utils = require('./utils.js').Utils;
//     var Rematch = require('./rematch.js').Rematch;
  
// -  var hoganUtils = require('./hoganjs-utils.js').HoganJsUtils;
// +  var hoganUtils;
// +
//     var genericTemplatesPath = 'generic';
//     var baseTemplatesPath = 'line-by-line';
//     var iconsBaseTemplatesPath = 'icon';
// @@ -19,6 +20,9 @@
  
//     function LineByLinePrinter(config) {
//       this.config = config;
// +
// +    var HoganJsUtils = require('./hoganjs-utils.js').HoganJsUtils;
// +    hoganUtils = new HoganJsUtils(config);
//     }
  
//     LineByLinePrinter.prototype.makeFileDiffHtml = function(file, diffs) {
// diff --git a/src/side-by-side-printer.js b/src/side-by-side-printer.js
// index bbf1dc8..5e3033b 100644
// --- a/src/side-by-side-printer.js
// +++ b/src/side-by-side-printer.js
// @@ -11,7 +11,8 @@
//     var utils = require('./utils.js').Utils;
//     var Rematch = require('./rematch.js').Rematch;
  
// -  var hoganUtils = require('./hoganjs-utils.js').HoganJsUtils;
// +  var hoganUtils;
// +
//     var genericTemplatesPath = 'generic';
//     var baseTemplatesPath = 'side-by-side';
//     var iconsBaseTemplatesPath = 'icon';
// @@ -26,6 +27,9 @@
  
//     function SideBySidePrinter(config) {
//       this.config = config;
// +
// +    var HoganJsUtils = require('./hoganjs-utils.js').HoganJsUtils;
// +    hoganUtils = new HoganJsUtils(config);
//     }
  
//     SideBySidePrinter.prototype.makeDiffHtml = function(file, diffs) {
// diff --git a/test/file-list-printer-tests.js b/test/file-list-printer-tests.js
// index a502a46..60ea320 100644
// --- a/test/file-list-printer-tests.js
// +++ b/test/file-list-printer-tests.js
// @@ -1,6 +1,6 @@
//   var assert = require('assert');
  
// -var fileListPrinter = require('../src/file-list-printer.js').FileListPrinter;
// +var fileListPrinter = new (require('../src/file-list-printer.js').FileListPrinter)();
  
//   describe('FileListPrinter', function() {
//     describe('generateFileList', function() {
// diff --git a/test/hogan-cache-tests.js b/test/hogan-cache-tests.js
// index 190bf6f..a34839c 100644
// --- a/test/hogan-cache-tests.js
// +++ b/test/hogan-cache-tests.js
// @@ -1,6 +1,6 @@
//   var assert = require('assert');
  
// -var HoganJsUtils = require('../src/hoganjs-utils.js').HoganJsUtils;
// +var HoganJsUtils = new (require('../src/hoganjs-utils.js').HoganJsUtils)();
//   var diffParser = require('../src/diff-parser.js').DiffParser;
  
//   describe('HoganJsUtils', function() {
// @@ -21,16 +21,50 @@ describe('HoganJsUtils', function() {
//         });
//         assert.equal(emptyDiffHtml, result);
//       });
// +
//       it('should render view without cache', function() {
//         var result = HoganJsUtils.render('generic', 'empty-diff', {
//           contentClass: 'd2h-code-line',
//           diffParser: diffParser
//         }, {noCache: true});
// -      assert.equal(emptyDiffHtml + '\n', result);
// +      assert.equal(emptyDiffHtml, result);
//       });
// +
//       it('should return null if template is missing', function() {
// -      var result = HoganJsUtils.render('generic', 'missing-template', {}, {noCache: true});
// +      var hoganUtils = new (require('../src/hoganjs-utils.js').HoganJsUtils)({noCache: true});
// +      var result = hoganUtils.render('generic', 'missing-template', {});
//         assert.equal(null, result);
//       });
// +
// +    it('should allow templates to be overridden with compiled templates', function() {
// +      var emptyDiffTemplate = HoganJsUtils.compile('<p>{{myName}}</p>');
// +
// +      var config = {templates: {'generic-empty-diff': emptyDiffTemplate}};
// +      var hoganUtils = new (require('../src/hoganjs-utils.js').HoganJsUtils)(config);
// +      var result = hoganUtils.render('generic', 'empty-diff', {myName: 'Rodrigo Fernandes'});
// +      assert.equal('<p>Rodrigo Fernandes</p>', result);
// +    });
// +
// +    it('should allow templates to be overridden with uncompiled templates', function() {
// +      var emptyDiffTemplate = '<p>{{myName}}</p>';
// +
// +      var config = {rawTemplates: {'generic-empty-diff': emptyDiffTemplate}};
// +      var hoganUtils = new (require('../src/hoganjs-utils.js').HoganJsUtils)(config);
// +      var result = hoganUtils.render('generic', 'empty-diff', {myName: 'Rodrigo Fernandes'});
// +      assert.equal('<p>Rodrigo Fernandes</p>', result);
// +    });
// +
// +    it('should allow templates to be overridden giving priority to compiled templates', function() {
// +      var emptyDiffTemplate = HoganJsUtils.compile('<p>{{myName}}</p>');
// +      var emptyDiffTemplateUncompiled = '<p>Not used!</p>';
// +
// +      var config = {
// +        templates: {'generic-empty-diff': emptyDiffTemplate},
// +        rawTemplates: {'generic-empty-diff': emptyDiffTemplateUncompiled}
// +      };
// +      var hoganUtils = new (require('../src/hoganjs-utils.js').HoganJsUtils)(config);
// +      var result = hoganUtils.render('generic', 'empty-diff', {myName: 'Rodrigo Fernandes'});
// +      assert.equal('<p>Rodrigo Fernandes</p>', result);
// +    });
//     });
//   });
// diff --git a/test/line-by-line-tests.js b/test/line-by-line-tests.js
// index 1cd9207..8869b3d 100644
// --- a/test/line-by-line-tests.js
// +++ b/test/line-by-line-tests.js
// @@ -14,7 +14,7 @@ describe('LineByLinePrinter', function() {
//           '            File without changes\n' +
//           '        </div>\n' +
//           '    </td>\n' +
// -        '</tr>\n';
// +        '</tr>';
  
//         assert.equal(expected, fileHtml);
//       });
// @@ -422,7 +422,6 @@ describe('LineByLinePrinter', function() {
//           '        </div>\n' +
//           '    </td>\n' +
//           '</tr>\n' +
// -        '\n' +
//           '                </tbody>\n' +
//           '            </table>\n' +
//           '        </div>\n' +
// diff --git a/test/side-by-side-printer-tests.js b/test/side-by-side-printer-tests.js
// index 76625f8..771daaa 100644
// --- a/test/side-by-side-printer-tests.js
// +++ b/test/side-by-side-printer-tests.js
// @@ -14,7 +14,7 @@ describe('SideBySidePrinter', function() {
//           '            File without changes\n' +
//           '        </div>\n' +
//           '    </td>\n' +
// -        '</tr>\n';
// +        '</tr>';
  
//         assert.equal(expectedRight, fileHtml.right);
//         assert.equal(expectedLeft, fileHtml.left);
// @@ -324,7 +324,6 @@ describe('SideBySidePrinter', function() {
//           '        </div>\n' +
//           '    </td>\n' +
//           '</tr>\n' +
// -        '\n' +
//           '                    </tbody>\n' +
//           '                </table>\n' +
//           '            </div>\n' +
// `);

//     console.log(stuff);
  }
}
