import { Component, OnInit } from '@angular/core';
import { DiffserviceService } from './services/diffservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private diffService:DiffserviceService) {

  }

  ngOnInit() {
    var diff1 = `diff --git a/.eslintignore b/.eslintignore
index d4041fe..74776ac 100644
--- a/.eslintignore
+++ b/.eslintignore
@@ -3,7 +3,7 @@ coverage/**
  dist/**
  
  # Ignore symlink to build folder
-docs/assets/**
+docs/**
  
  # Ignore HTML templates generated code
  src/**
diff --git a/docs/demo.html b/docs/demo.html
deleted file mode 100644
index a4c9ac9..0000000
--- a/docs/demo.html
+++ /dev/null
@@ -1,416 +0,0 @@
-<!DOCTYPE html>
-<html lang="en" class="js">
-<head>
-    <meta charset="utf-8">
-    <!--[if IE]>
-    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
-    <![endif]-->
-    <meta name="viewport" content="width=device-width, initial-scale=1">
-
-    <meta name="description" content="Diff parser and pretty html generator">
-    <meta name="keywords" content="diff2html,git,diff,unified,pretty,html,css,javaccript">
-    <meta name="author" content="Rodrigo Fernandes (rtfpessoa)">
-
-    <title>diff2html</title>
-
-    <!-- search engine -->
-    <link rel="canonical" href="https://diff2html.xyz">
-
-    <!-- open graph -->
-    <meta property="og:title" content="diff2html">
-    <meta property="og:type" content="website">
-
-    <meta property="og:description"
-          content="Diff parser and pretty html generator.">
-
-    <meta property="og:url" content="https://diff2html.xyz">
-    <meta property="og:site_name" content="diff2html">
-
-    <!-- Bootstrap -->
-    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
-          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
-
-    <!-- Custom styles for this template -->
-    <link href="main.css" rel="stylesheet">
-
-    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/github.min.css">
-
-    <!-- diff2html -->
-    <link rel="stylesheet" type="text/css" href="assets/diff2html.css">
-    <!-- -->
-
-
-    <script>
-      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
-      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
-      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
-      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
-
-      ga('create', 'UA-78351861-2', 'auto');
-      ga('send', 'pageview');
-
-    </script>
-</head>
-<body class="swag-line template-index">
-<div class="container-overflow-wrap">
-
-    <div class="container">
-        <nav class="navbar navbar-default navbar-tall navbar-full" role="navigation">
-            <div class="navbar-header">
-                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#global-nav">
-                    <span class="sr-only">Toggle navigation</span>
-                    <span class="icon-bar"></span>
-                    <span class="icon-bar"></span>
-                    <span class="icon-bar"></span>
-                </button>
-                <a class="navbar-brand" href="index.html">diff2html</a>
-            </div>
-
-            <div class="collapse navbar-collapse" id="global-nav">
-                <div class="navbar-right">
-                    <ul class="nav navbar-nav">
-
-                        <li>
-                            <a href="index.html#install">Getting Started</a>
-                        </li>
-
-                        <li>
-                            <a href="index.html#cli">CLI</a>
-                        </li>
-
-                        <li>
-                            <a href="demo.html">Demo</a>
-                        </li>
-
-                        <li>
-                            <a href="https://github.com/rtfpessoa/diff2html#how-to-use" target="_blank">Docs</a>
-                        </li>
-
-                        <li>
-                            <a href="https://github.com/rtfpessoa/diff2html/issues/new" target="_blank">Support</a>
-                        </li>
-                    </ul>
-                </div>
-            </div>
-        </nav>
-
-        <h1>Line by Line</h1>
-
-        <div id="line-by-line" style="margin: 0 auto;">
-        </div>
-
-        <h1>Side by Side</h1>
-
-        <div id="side-by-side" style="margin: 0 auto;">
-        </div>
-
-    </div>
-
-    <footer class="footer clearfix">
-        <p class="col-xs-10 col-xs-offset-1">
-            Website originally designed and built by
-            <a href="https://twitter.com/mdo" target="_blank">@mdo</a>,
-            <a href="https://twitter.com/fat" target="_blank">@fat</a>, and
-            <a href="https://twitter.com/dhg" target="_blank">@dhg</a>,
-            adapted with <span class="hero-red">❤</span> by
-            <a href="https://twitter.com/rtfpessoa" target="_blank">@rtfpessoa</a>.
-        </p>
-        <ul class="footer-list col-xs-10 col-xs-offset-1">
-
-            <li class="footer-list-item">
-                <a class="footer-list-link" href="https://github.com/rtfpessoa/diff2html#how-to-use"
-                   target="_blank">FAQ</a>
-            </li>
-
-            <li class="footer-list-item">
-                <a class="footer-list-link" href="https://diff2html.xyz">diff2html</a>
-            </li>
-
-        </ul>
-    </footer>
-
-</div>
-
-<!-- General JavaScript -->
-<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
-<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
-        integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
-        crossorigin="anonymous"></script>
-
-<script type="application/ld+json">
-{
-  "@context": "http://schema.org/",
-  "@type": "SoftwareSourceCode",
-  "name": "diff2html",
-  "author": "Rodrigo Fernandes",
-  "image": "https://diff2html.xyz/img/snapshot-3.png",
-  "description": "Diff parser and pretty html generator.",
-  "codeRepository": "https://github.com/rtfpessoa/diff2html",
-  "programmingLanguage": "JavaScript",
-  "runtimePlatform": "Node >= 0.12",
-  "mainEntityOfPage": "https://diff2html.xyz/"
-}
-</script>
-
-<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js"></script>
-<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/languages/scala.min.js"></script>
-
-<!-- diff2html -->
-<script type="text/javascript" src="assets/diff2html.js"></script>
-<script type="text/javascript" src="assets/diff2html-ui.js"></script>
-<!-- -->
-
-<script>
-    var lineDiffExample =
-            "--- a/src/my/really/big/path/sample.js\n" +
-            "+++ b/src/my/small/path/sample.js\n" +
-            "@@ -1 +1,2 @@\n" +
-            "-test\n" +
-            "+test1r\n" +
-            "+test2r\n" +
-            'diff --git a/src/core/init.java b/src/core/init.java\n' +
-            'index e49196a..50f310c 100644\n' +
-            '--- a/src/core/init.java\n' +
-            '+++ b/src/core/init.java\n' +
-            '@@ -101,7 +101,7 @@\n' +
-            ' /**\n' +
-            '   * Setter for property filesize.\n' +
-            '   *\n' +
-            "   * @param filesize value of property 'filesize'.\n" +
-            '   */\n' +
-            '   public void setFilesize(int filesize) {\n' +
-            '-    this.filesizeOld = filesizeOld;\n' +
-            '+    this.filesizeNew = filesizeNew;\n' +
-            '   }\n' +
-            'diff --git a/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/coverage.init b/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/coverage.init\n' +
-            'index fc56817..e8e7e49 100644\n' +
-            '--- a/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/coverage.init\n' +
-            '+++ b/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/src/very/long/file/path/coverage.init\n' +
-            '@@ -19,7 +19,7 @@\n' +
-            ' -opt "\-nostart"\n' +
-            ' \n' +
-            ' # skip stopenv\n' +
-            '--do "runbvt,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata,stopenv,getlogs,pullcoveragedata"\n' +
-            '+-do "runbvt,getlogs,pullcoveragedata"\n' +
-            ' \n' +
-            ' ##########################################\n' +
-            ' # logs files to bring back to base\n' +
-            'diff --git a/src/attributes/attr.js b/src/attributes/attr.js\n' +
-            'index facdd41..b627fe8 100644\n' +
-            '--- a/src/attributes/attr.js\n' +
-            '+++ b/src/attributes/attr.js\n' +
-            '@@ -1,11 +1,10 @@\n' +
-            ' define([\n' +
-            ' 	"../core",\n' +
-            ' 	"../var/rnotwhite",\n' +
-            '-	"../var/strundefined",\n' +
-            ' 	"../core/access",\n' +
-            ' 	"./support",\n' +
-            ' 	"../selector"\n' +
-            '-], function( jQuery, rnotwhite, strundefined, access, support ) {\n' +
-            '+], function( jQuery, rnotwhite, access, support ) {\n' +
-            ' \n' +
-            ' var nodeHook, boolHook,\n' +
-            ' 	attrHandle = jQuery.expr.attrHandle;\n' +
-            '@@ -33,7 +32,7 @@ jQuery.extend({\n' +
-            ' 		}\n' +
-            ' \n' +
-            ' 		// Fallback to prop when attributes are not supported\n' +
-            '-		if ( typeof elem.getAttribute === strundefined ) {\n' +
-            '+		if ( !elem.getAttribute ) {\n' +
-            ' 			return jQuery.prop( elem, name, value );\n' +
-            ' 		}\n' +
-            ' \n' +
-            'diff --git a/src/attributes/classes.js b/src/attributes/classes.js\n' +
-            'index c617824..c8d1393 100644\n' +
-            '--- a/src/attributes/classes.js\n' +
-            '+++ b/src/attributes/classes.js\n' +
-            '@@ -1,10 +1,9 @@\n' +
-            ' define([\n' +
-            ' 	"../core",\n' +
-            ' 	"../var/rnotwhite",\n' +
-            '-	"../var/strundefined",\n' +
-            ' 	"../data/var/dataPriv",\n' +
-            ' 	"../core/init"\n' +
-            '-], function( jQuery, rnotwhite, strundefined, dataPriv ) {\n' +
-            '+], function( jQuery, rnotwhite, dataPriv ) {\n' +
-            ' \n' +
-            ' var rclass = /[\\t\\r\\n\\f]/g;\n' +
-            ' \n' +
-            '@@ -128,7 +127,7 @@ jQuery.fn.extend({\n' +
-            ' 				}\n' +
-            ' \n' +
-            ' 			// Toggle whole class name\n' +
-            '-			} else if ( type === strundefined || type === "boolean" ) {\n' +
-            '+			} else if ( value === undefined || type === "boolean" ) {\n' +
-            ' 				if ( this.className ) {\n' +
-            ' 					// store className if set\n' +
-            ' 					dataPriv.set( this, "__className__", this.className );\n' +
-            'diff --git a/src/core/init.js b/src/core/init.js\n' +
-            'index e49196a..50f310c 100644\n' +
-            '--- a/src/core/init.js\n' +
-            '+++ b/src/core/init.js\n' +
-            '@@ -101,7 +101,7 @@ var rootjQuery,\n' +
-            ' 		// HANDLE: $(function)\n' +
-            ' 		// Shortcut for document ready\n' +
-            ' 		} else if ( jQuery.isFunction( selector ) ) {\n' +
-            '-			return typeof rootjQuery.ready !== "undefined" ?\n' +
-            '+			return rootjQuery.ready !== undefined ?\n' +
-            ' 				rootjQuery.ready( selector ) :\n' +
-            ' 				// Execute immediately if ready is not present\n' +
-            ' 				selector( jQuery );\n' +
-            'diff --git a/src/event.js b/src/event.js\n' +
-            'index 7336f4d..6183f70 100644\n' +
-            '--- a/src/event.js\n' +
-            '+++ b/src/event.js\n' +
-            '@@ -1,6 +1,5 @@\n' +
-            ' define([\n' +
-            ' 	"./core",\n' +
-            '-	"./var/strundefined",\n' +
-            ' 	"./var/rnotwhite",\n' +
-            ' 	"./var/hasOwn",\n' +
-            ' 	"./var/slice",\n' +
-            '@@ -10,7 +9,7 @@ define([\n' +
-            ' 	"./core/init",\n' +
-            ' 	"./data/accepts",\n' +
-            ' 	"./selector"\n' +
-            '-], function( jQuery, strundefined, rnotwhite, hasOwn, slice, support, dataPriv ) {\n' +
-            '+], function( jQuery, rnotwhite, hasOwn, slice, support, dataPriv ) {\n' +
-            ' \n' +
-            ' var\n' +
-            ' 	rkeyEvent = /^key/,\n' +
-            '@@ -72,7 +71,7 @@ jQuery.event = {\n' +
-            ' 			eventHandle = elemData.handle = function( e ) {\n' +
-            ' 				// Discard the second event of a jQuery.event.trigger() and\n' +
-            ' 				// when an event is called after a page has unloaded\n' +
-            '-				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?\n' +
-            '+				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?\n' +
-            ' 					jQuery.event.dispatch.apply( elem, arguments ) : undefined;\n' +
-            ' 			};\n' +
-            ' 		}\n' +
-            'diff --git a/src/exports/global.js b/src/exports/global.js\n' +
-            'index 6513287..1db4144 100644\n' +
-            '--- a/src/exports/global.js\n' +
-            '+++ b/src/exports/global.js\n' +
-            '@@ -1,7 +1,9 @@\n' +
-            ' define([\n' +
-            '-	"../core",\n' +
-            '-	"../var/strundefined"\n' +
-            '-], function( jQuery, strundefined ) {\n' +
-            '+	"../core"\n' +
-            '+], function( jQuery ) {\n' +
-            '+\n' +
-            '+/* exported noGlobal */\n' +
-            '+/* global   noGlobal: false */\n' +
-            ' \n' +
-            ' var\n' +
-            ' 	// Map over jQuery in case of overwrite\n' +
-            '@@ -25,7 +27,7 @@ jQuery.noConflict = function( deep ) {\n' +
-            ' // Expose jQuery and $ identifiers, even in AMD\n' +
-            ' // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)\n' +
-            ' // and CommonJS for browser emulators (#13566)\n' +
-            '-if ( typeof noGlobal === strundefined ) {\n' +
-            '+if ( !noGlobal ) {\n' +
-            ' 	window.jQuery = window.$ = jQuery;\n' +
-            ' }\n' +
-            ' \n' +
-            'diff --git a/src/offset.js b/src/offset.js\n' +
-            'index cc6ffb4..fa51f18 100644\n' +
-            '--- a/src/offset.js\n' +
-            '+++ b/src/offset.js\n' +
-            '@@ -1,6 +1,5 @@\n' +
-            ' define([\n' +
-            ' 	"./core",\n' +
-            '-	"./var/strundefined",\n' +
-            ' 	"./core/access",\n' +
-            ' 	"./css/var/rnumnonpx",\n' +
-            ' 	"./css/curCSS",\n' +
-            '@@ -10,7 +9,7 @@ define([\n' +
-            ' 	"./core/init",\n' +
-            ' 	"./css",\n' +
-            ' 	"./selector" // contains\n' +
-            '-], function( jQuery, strundefined, access, rnumnonpx, curCSS, addGetHookIf, support ) {\n' +
-            '+], function( jQuery, access, rnumnonpx, curCSS, addGetHookIf, support ) {\n' +
-            ' \n' +
-            ' var docElem = window.document.documentElement;\n' +
-            ' \n' +
-            '@@ -99,7 +98,7 @@ jQuery.fn.extend({\n' +
-            ' \n' +
-            ' 		// Support: BlackBerry 5, iOS 3 (original iPhone)\n' +
-            ' 		// If we dont have gBCR, just use 0,0 rather than error\n' +
-            '-		if ( typeof elem.getBoundingClientRect !== strundefined ) {\n' +
-            '+		if ( elem.getBoundingClientRect !== undefined ) {\n' +
-            ' 			box = elem.getBoundingClientRect();\n' +
-            ' 		}\n' +
-            ' 		win = getWindow( doc );\n' +
-            'diff --git a/src/var/strundefined.js b/src/var/strundefined.js\n' +
-            'deleted file mode 100644\n' +
-            'index 04e16b0..0000000\n' +
-            '--- a/src/var/strundefined.js\n' +
-            '+++ /dev/null\n' +
-            '@@ -1,3 +0,0 @@\n' +
-            '-define(function() {\n' +
-            '-	return typeof undefined;\n' +
-            '-});\n' +
-            'diff --git a/components/textdiff/textdiff.html b/components/textdiff/textdiff.html\n' +
-            'index a3484bf..82209af 100644\n' +
-            '--- a/components/textdiff/textdiff.html\n' +
-            '+++ b/components/textdiff/textdiff.html\n' +
-            '@@ -1,6 +1,8 @@\n' +
-            ' <!-- ko if: isShowingDiffs -->\n' +
-            ' <div>\n' +
-            '-  <div data-bind="event: { load: setDom($element) }"></div>\n' +
-            '+  <!-- ko if: isParsed -->\n' +
-            '+  <div data-bind="template: {nodes: ko.utils.parseHtmlFragment(htmlSrc())}"></div>\n' +
-            '+  <!-- /ko -->\n' +
-            '   <div class="btn-load-more" data-bind="visible: loadMoreCount() > 0">\n' +
-            '   </div>\n' +
-            'diff --git a/test.js b/test.js\n' +
-            'new file mode 100644\n' +
-            'index 0000000..e1e22ec\n' +
-            '--- /dev/null\n' +
-            '+++ b/test.js\n' +
-            '@@ -0,0 +1,6 @@\n' +
-            "+var parser = require('./source/git-parser');\n" +
-            '+\n' +
-            "+var text = 'diff --git a/components/app/app.html b/components/app/app.html\\nindex ecb7a95..027bd9b 100644\\n--- a/components/app/app.html\\n+++ b/components/app/app.html\\n@@ -52,0 +53,3 @@\\n+\\n+\\n+\\n@@ -56,0 +60,3 @@\\n+\\n+\\n+\\n'\n" +
-            '+var patchLineList = [ false, false, false, false ];\n' +
-            '+\n' +
-            '+console.log(parser.parsePatchDiffResult(text, patchLineList));\n' +
-            "diff --git a/a.xml b/b.xml\n" +
-            "index e54317e..82a9a56 100644\n" +
-            "--- a/a.xml\n" +
-            "+++ b/b.xml\n" +
-            "@@ -242,4 +242,6 @@ need to create a new job for native server java api and move these tests to a ne\n" +
-            "                </packages>\n" +
-            "        </test>\n" +
-            " -->\n" +
-            "+\n" +
-            "+\n";
-
-    $(document).ready(function() {
-        var diff2htmlUi = new Diff2HtmlUI({diff: lineDiffExample});
-
-        diff2htmlUi.draw('#line-by-line', {
-            inputFormat: 'json',
-            showFiles: true,
-            matching: 'lines'
-        });
-        diff2htmlUi.fileListCloseable('#line-by-line', false);
-        diff2htmlUi.highlightCode('#line-by-line');
-
-        diff2htmlUi.draw('#side-by-side', {
-            inputFormat: 'json',
-            showFiles: true,
-            matching: 'lines',
-            outputFormat: 'side-by-side',
-            synchronisedScroll: true
-        });
-        diff2htmlUi.fileListCloseable('#side-by-side', false);
-        diff2htmlUi.highlightCode('#side-by-side');
-    });
-</script>
-
-
-</body>
-</html>
diff --git a/docs/index.html b/docs/index.html
index bbe31ed..499d619 100644
--- a/docs/index.html
+++ b/docs/index.html
@@ -31,7 +31,7 @@
            integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  
      <!-- Custom styles for this template -->
-    <link href="main.css" rel="stylesheet">
+    <link href="main.min.css" rel="stylesheet">
  
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
@@ -72,7 +72,7 @@
                          </li>
  
                          <li>
-                            <a href="demo.html">Demo</a>
+                            <a href="url.html?diff=https://github.com/rtfpessoa/diff2html/pull/106">Demo</a>
                          </li>
  
                          <li>
@@ -94,17 +94,17 @@
                          </span>
              <h1 class="hero-header">Diff parser and pretty html generator</h1>
              <h4 class="text-muted">Better diffs, unmatched reviews.</h4>
-            <a class="btn btn-lg" href="demo.html">Demo</a>
+            <h2><a class="btn btn-lg" href="url.html?diff=https://github.com/rtfpessoa/diff2html/pull/106">Demo</a></h2>
  
              <div class="screenshots screenshots-fan clearfix">
  
                  <img class="screenshot hidden-xs" src="img/snapshot-2.png">
  
-                <a class="screenshot" href="demo.html#side-by-side">
+                <a class="screenshot" href="url.html?diff=https://github.com/rtfpessoa/diff2html/pull/106">
                      <img src="img/snapshot-3.png">
                  </a>
  
-                <a class="screenshot hidden-xs" href="demo.html#line-by-line">
+                <a class="screenshot hidden-xs" href="url.html?diff=https://github.com/rtfpessoa/diff2html/pull/106">
                      <img src="img/snapshot-1.png">
                  </a>
  
@@ -318,18 +318,30 @@ <h5 class="panel-title">node-git</h5>
                                  </div>
                              </div>
                          </div>
-                        <div class="col-xs-12 col-sm-6 col-md-3 m-b-lg">
-                            <div class="panel panel-default panel-profile m-b-0">
-                                <div class="panel-body text-center">
-                                    <h5 class="panel-title">Jenkins</h5>
-                                    <p class="m-b">Show diffs between builds</p>
-                                    <a href="https://wiki.jenkins-ci.org/display/JENKINS/Last+Changes+Plugin" target="_blank"
-                                       class="btn btn-primary-outline btn-sm m-b">
-                                        <span class="icon icon-add-user"></span> Website
-                                    </a>
-                                </div>
-                            </div>
+                      <div class="col-xs-12 col-sm-6 col-md-3 m-b-lg">
+                        <div class="panel panel-default panel-profile m-b-0">
+                          <div class="panel-body text-center">
+                            <h5 class="panel-title">Jenkins</h5>
+                            <p class="m-b">Show diffs between builds</p>
+                            <a href="https://wiki.jenkins-ci.org/display/JENKINS/Last+Changes+Plugin" target="_blank"
+                               class="btn btn-primary-outline btn-sm m-b">
+                              <span class="icon icon-add-user"></span> Website
+                            </a>
+                          </div>
+                        </div>
+                      </div>
+                      <div class="col-xs-12 col-sm-6 col-md-3 m-b-lg">
+                        <div class="panel panel-default panel-profile m-b-0">
+                          <div class="panel-body text-center">
+                            <h5 class="panel-title">Light Review</h5>
+                            <p class="m-b">Code Reviews with maximum control for the leading developers</p>
+                            <a href="http://light-review.com/" target="_blank"
+                               class="btn btn-primary-outline btn-sm m-b">
+                              <span class="icon icon-add-user"></span> Website
+                            </a>
+                          </div>
                          </div>
+                      </div>
                      </div>
                  </div>
              </div>
diff --git a/docs/main.css b/docs/main.css
index 4af13e3..49d95e1 100644
--- a/docs/main.css
+++ b/docs/main.css
@@ -132,6 +132,7 @@
    margin-left: -40%;
    height: 1px;
    background: -webkit-radial-gradient(ellipse at center, rgba(0, 0, 0, 0.2) 0, rgba(255, 255, 255, 0) 75%);
+  background: -webkit-radial-gradient(center ellipse, rgba(0, 0, 0, 0.2) 0, rgba(255, 255, 255, 0) 75%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.2) 0, rgba(255, 255, 255, 0) 75%)
  }
  
@@ -536,3 +537,46 @@ a:hover, a:focus {
    -ms-user-select: none;
    user-select: none;
  }
+
+.diff-url-wrapper {
+  display: -webkit-box;
+  display: -ms-flexbox;
+  display: flex;
+  width: 100%;
+}
+
+.diff-url-input {
+  display: inline-block;
+  margin-right: 10px;
+  -webkit-box-flex: 1;
+      -ms-flex-positive: 1;
+          flex-grow: 1;
+  height: 31px;
+}
+
+.diff-url-btn {
+  display: inline-block;
+  float: right;
+  width: 48px;
+}
+
+.options-label-value {
+  font-weight: normal;
+}
+
+.diff-url-options-container {
+  display: -webkit-box;
+  display: -ms-flexbox;
+  display: flex;
+}
+
+.diff-url-options-container label {
+  -webkit-box-flex: 1;
+      -ms-flex: 1;
+          flex: 1;
+}
+
+.diff-url-options-container label select,
+.diff-url-options-container label input {
+  display: block;
+}
diff --git a/docs/main.min.css b/docs/main.min.css
new file mode 100644
index 0000000..92dcb2a
--- /dev/null
+++ b/docs/main.min.css
@@ -0,0 +1,4 @@
+/*!
+ * Copyright Colossal 2015
+ * Adapted by @rtfpessoa
+ */.footer,.hero,.hero-booticon,.navbar-brand,.navbar-header{text-align:center}.container-overflow-wrap,.screenshot{overflow:hidden}.m-b-md{margin-bottom:23px!important}.p-t{padding-top:15px!important}.btn{display:inline-block;color:#fff;background:#26A65B;font-weight:400}.btn:hover{color:#fff;background:#5dbe5d}.btn-clipboard{position:absolute;top:0;right:0;z-index:10;display:block;padding:5px 8px;font-size:12px;color:#fff;background-color:#767676;border-radius:0 4px;cursor:pointer}.footer,.row-bordered{position:relative}.btn-clipboard:hover{color:#000;background-color:#dcdfe4}.footer{padding:40px 0;font-size:14px;border-top:1px solid #dcdfe4}.footer p{margin-bottom:5px}.container a,.footer a{color:#26A65B}.container a.btn{color:#fff}.footer-list-item{display:inline-block}.footer-list-item:not(:last-child):after{content:"\b7"}.row-bordered:before,.swag-line:before{content:''}.footer>ul{padding:0}@media (min-width:768px){p.m-b{height:75px;overflow-y:hidden}.footer{padding:60px 0}.container{width:710px}.row-centered{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}@media (min-width:992px){.container{width:890px}}@media (min-width:1200px){.container{width:1050px}}.row-bordered:before{display:block;width:80%;position:absolute;bottom:0;left:50%;margin-left:-40%;height:1px;background:-webkit-radial-gradient(center ellipse,rgba(0,0,0,.2) 0,rgba(255,255,255,0) 75%);background:radial-gradient(ellipse at center,rgba(0,0,0,.2) 0,rgba(255,255,255,0) 75%)}.hero{position:relative;padding:80px 0;border-bottom:1px solid #dcdfe4}.hero-booticon{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;margin:0 auto 30px;width:100%;font-size:8vw;display:block;font-weight:500;cursor:default}body,h1,h2,h3,h4{font-weight:300}.hero-homepage.hero{padding-top:0;padding-bottom:40px;overflow:hidden;border-bottom:0;border-bottom:1px solid #dcdfe4}.hero-homepage>.btn{margin-top:20px}.swag-line:before{position:absolute;display:block;top:0;left:0;right:0;height:5px;z-index:2;background-color:#26A65B;background:-webkit-linear-gradient(45deg,#28a142,#26A65B);background:linear-gradient(45deg,#28a142,#26A65B)}.navbar{background-color:#fff;border:0 #fff}.navbar-brand{height:auto;padding:19px 25px;font-size:16px;display:inline-block;float:none;margin:5px 0 0}.navbar-nav{margin-right:-15px}.navbar-nav>li>a{font-size:14px}.navbar-default .navbar-brand,.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover,.navbar-default .navbar-nav>li>a,.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{background:0 0;color:#293a46;font-weight:300}.navbar-default .navbar-toggle{position:absolute;left:0;top:7px;border-color:#fff;color:#293a46;margin-right:0}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background:#f9f9f9;border-color:#f9f9f9}@media (min-width:768px){.navbar-full .navbar-brand{margin-left:-25px}.navbar-tall{height:125px}.navbar-tall .navbar-header,.navbar-tall .navbar-nav{line-height:125px;text-align:left}.navbar-brand{float:none;display:inline-block;text-align:left;margin:0}.navbar-nav>li>a{display:inline-block;margin-left:13px}.navbar-nav>li:first-child>a{margin-left:0}}.screenshot{display:block}.screenshot>img{width:100%}.screenshots-fan{margin-top:50px}.screenshots-fan .screenshot:first-child,.screenshots-fan .screenshot:last-child{z-index:2}.screenshots-fan .screenshot{position:relative;width:auto;display:inline-block;text-align:center;z-index:3}@media (min-width:768px){.screenshots-fan{position:relative;overflow:hidden;margin-top:60px;height:200px}.screenshots-fan .screenshot{height:auto;top:10px;width:350px}.screenshots-fan .screenshot:first-child,.screenshots-fan .screenshot:last-child{width:250px;position:absolute;top:65px}.screenshots-fan .screenshot:first-child{left:10px}.screenshots-fan .screenshot:last-child{left:auto;right:10px}}@media (min-width:992px){.screenshots-fan{margin-top:60px;height:240px}.screenshots-fan .screenshot{width:400px}.screenshots-fan .screenshot:first-child,.screenshots-fan .screenshot:last-child{width:300px}}@media (min-width:1200px){.screenshots-fan{margin-top:80px;height:380px}.screenshots-fan .screenshot{width:550px}.screenshots-fan .screenshot:first-child,.screenshots-fan .screenshot:last-child{width:450px}}body{font-size:16px;font-family:Roboto,sans-serif;line-height:1.6;color:#293a46}h1,h3{font-size:26px}h2{font-size:18px}h4,h5{font-size:16px}h5{font-weight:400;margin:6px 0}h1,h2,h3,h4,h5{line-height:1.4}h1,h2{margin:10px 0}@media (min-width:768px){body{font-size:16px;font-family:Roboto,sans-serif;font-weight:300;line-height:1.6}h1{font-size:38px;font-weight:300}h2,h3{font-size:26px;font-weight:300}h2{line-height:1.4}h4{font-size:18px;font-weight:300}h5{font-size:16px;font-weight:400}}.nav li a,a{text-decoration:none;color:inherit}.nav li a:hover,a:focus,a:hover{text-decoration:underline}.text-muted{color:#697176}.template-index h3{font-size:21px;margin-bottom:12px}.template-index h4{color:#697176;line-height:1.6}.template-index h4 a,.template-index p a{color:#26A65B}.template-index h5{font-size:17px;margin-bottom:8px}.homepage-code-example,.homepage-terminal-example{position:relative;font-family:monospace;background:#272b38;color:#48d8a0;border-radius:8px;padding:30px}.homepage-code-example .text-muted,.homepage-terminal-example .text-muted{color:#6a7490}@media (min-width:768px){.homepage-terminal-example{padding:50px}.homepage-code-example{padding:10px}.homepage-code-example>p{margin:0}}.hero-green{color:#26A65B}.hero-black{color:#353535}.hero-red{color:#CB2C37}.svg-icon-large{width:50px;display:block;margin:0 auto}.svg-icon-large>svg{width:100%;height:auto}.row-padded-small{padding:40px 0}.unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.diff-url-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.diff-url-input{display:inline-block;margin-right:10px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:31px}.diff-url-btn{display:inline-block;float:right;width:48px}.options-label-value{font-weight:400}.diff-url-options-container{display:-webkit-box;display:-ms-flexbox;display:flex}.diff-url-options-container label{-webkit-box-flex:1;-ms-flex:1;flex:1}.diff-url-options-container label input,.diff-url-options-container label select{display:block}
\ No newline at end of file
diff --git a/docs/url.html b/docs/url.html
new file mode 100644
index 0000000..2eeb150
--- /dev/null
+++ b/docs/url.html
@@ -0,0 +1,246 @@
+<!DOCTYPE html>
+<html lang="en" class="js">
+<head>
+    <meta charset="utf-8">
+    <!--[if IE]>
+    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
+    <![endif]-->
+    <meta name="viewport" content="width=device-width, initial-scale=1">
+
+    <meta name="description" content="Diff parser and pretty html generator">
+    <meta name="keywords" content="diff2html,git,diff,unified,pretty,html,css,javaccript">
+    <meta name="author" content="Rodrigo Fernandes (rtfpessoa)">
+
+    <title>diff2html</title>
+
+    <!-- search engine -->
+    <link rel="canonical" href="https://diff2html.xyz">
+
+    <!-- open graph -->
+    <meta property="og:title" content="diff2html">
+    <meta property="og:type" content="website">
+
+    <meta property="og:description"
+          content="Diff parser and pretty html generator.">
+
+    <meta property="og:url" content="https://diff2html.xyz">
+    <meta property="og:site_name" content="diff2html">
+
+    <!-- Bootstrap -->
+    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
+          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
+
+    <!-- Custom styles for this template -->
+    <link href="main.min.css" rel="stylesheet">
+
+    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/github.min.css">
+
+    <!-- diff2html -->
+    <link rel="stylesheet" type="text/css" href="assets/diff2html.min.css">
+    <!-- -->
+
+
+    <script>
+      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
+      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
+      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
+      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
+
+      ga('create', 'UA-78351861-2', 'auto');
+      ga('send', 'pageview');
+
+    </script>
+</head>
+<body class="swag-line template-index">
+<div class="container-overflow-wrap">
+
+    <div class="container">
+        <nav class="navbar navbar-default navbar-tall navbar-full" role="navigation">
+            <div class="navbar-header">
+                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#global-nav">
+                    <span class="sr-only">Toggle navigation</span>
+                    <span class="icon-bar"></span>
+                    <span class="icon-bar"></span>
+                    <span class="icon-bar"></span>
+                </button>
+                <a class="navbar-brand" href="index.html">diff2html</a>
+            </div>
+
+            <div class="collapse navbar-collapse" id="global-nav">
+                <div class="navbar-right">
+                    <ul class="nav navbar-nav">
+
+                        <li>
+                            <a href="index.html#install">Getting Started</a>
+                        </li>
+
+                        <li>
+                            <a href="index.html#cli">CLI</a>
+                        </li>
+
+                        <li>
+                            <a href="url.html?diff=https://github.com/rtfpessoa/diff2html/pull/106">Demo</a>
+                        </li>
+
+                        <li>
+                            <a href="https://github.com/rtfpessoa/diff2html#how-to-use" target="_blank">Docs</a>
+                        </li>
+
+                        <li>
+                            <a href="https://github.com/rtfpessoa/diff2html/issues/new" target="_blank">Support</a>
+                        </li>
+                    </ul>
+                </div>
+            </div>
+        </nav>
+
+        <h1>Diff Prettifier <a href="#help">
+          <svg height="32" class="octicon octicon-unverified" viewBox="0 0 16 16" version="1.1" width="64" aria-hidden="true">
+            <path
+              d="M15.67 7.06l-1.08-1.34c-.17-.22-.28-.48-.31-.77l-.19-1.7a1.51 1.51 0 0 0-1.33-1.33l-1.7-.19c-.3-.03-.56-.16-.78-.33L8.94.32c-.55-.44-1.33-.44-1.88 0L5.72 1.4c-.22.17-.48.28-.77.31l-1.7.19c-.7.08-1.25.63-1.33 1.33l-.19 1.7c-.03.3-.16.56-.33.78L.32 7.05c-.44.55-.44 1.33 0 1.88l1.08 1.34c.17.22.28.48.31.77l.19 1.7c.08.7.63 1.25 1.33 1.33l1.7.19c.3.03.56.16.78.33l1.34 1.08c.55.44 1.33.44 1.88 0l1.34-1.08c.22-.17.48-.28.77-.31l1.7-.19c.7-.08 1.25-.63 1.33-1.33l.19-1.7c.03-.3.16-.56.33-.78l1.08-1.34c.44-.55.44-1.33 0-1.88zM9 11.5c0 .28-.22.5-.5.5h-1c-.27 0-.5-.22-.5-.5v-1c0-.28.23-.5.5-.5h1c.28 0 .5.22.5.5v1zm1.56-4.89c-.06.17-.17.33-.3.47-.13.16-.14.19-.33.38-.16.17-.31.3-.52.45-.11.09-.2.19-.28.27-.08.08-.14.17-.19.27-.05.1-.08.19-.11.3-.03.11-.03.13-.03.25H7.13c0-.22 0-.31.03-.48.03-.19.08-.36.14-.52.06-.14.14-.28.25-.42.11-.13.23-.25.41-.38.27-.19.36-.3.48-.52.12-.22.2-.38.2-.59 0-.27-.06-.45-.2-.58-.13-.13-.31-.19-.58-.19-.09 0-.19.02-.3.05-.11.03-.17.09-.25.16-.08.07-.14.11-.2.2a.41.41 0 0 0-.09.28h-2c0-.38.13-.56.27-.83.16-.27.36-.5.61-.67.25-.17.55-.3.88-.38.33-.08.7-.13 1.09-.13.44 0 .83.05 1.17.13.34.09.63.22.88.39.23.17.41.38.55.63.13.25.19.55.19.88 0 .22 0 .42-.08.59l-.02-.01z"></path>
+          </svg>
+        </a>
+        </h1>
+        <p>GitHub, Bitbucket and GitLab commit and pull request compatible</p>
+        <p>Just paste the GitHub, Bitbucket or GitLab commit, pull request or merge request url
+          or any other git or unified compatible diff and we will render a pretty html representation of it
+          with code syntax highlight and line similarity matching for better code reviews.
+        </p>
+        <h2>Options:</h2>
+        <div class="diff-url-options-container">
+          <label title="Output format of the HTML, either line by line or side by side">Output Format
+            <select class="options-label-value" id="diff-url-options-output-format" name="outputFormat">
+              <option value="line-by-line" selected>Line by Line</option>
+              <option value="side-by-side">Side by Side</option>
+            </select>
+          </label>
+          <label title="Show the file list summary before the diff">File Summary
+            <input class="options-label-value" id="diff-url-options-show-files" type="checkbox" name="showFiles" checked/>
+          </label>
+          <label title="Level of matching for the comparison algorithm">Matching Type
+            <select class="options-label-value" id="diff-url-options-matching" name="matching">
+              <option value="lines">Lines</option>
+              <option value="words" selected>Words</option>
+              <option value="none">None</option>
+            </select>
+          </label>
+          <label title="Similarity threshold for the matching algorithm">Words Threshold
+            <input class="options-label-value" id="diff-url-options-match-words-threshold" type="number"
+                   name="matchWordsThreshold" value="0.25" step="0.05"
+                   min="0" max="1"/>
+          </label>
+          <label title="Maximum number of comparison performed by the matching algorithm in a block of changes">Max Comparisons
+            <input class="options-label-value" id="diff-url-options-matching-max-comparisons" type="number"
+                   name="matchingMaxComparisons" value="2500"
+                   step="100" min="0"/>
+          </label>
+        </div>
+        <br>
+        <div class="diff-url-wrapper">
+          <input id="url" class="diff-url-input" type="text" name="url" placeholder="URL"/>
+          <a id="url-btn" class="diff-url-btn btn btn-sm" href="#">Load</a>
+        </div>
+        <br>
+        <div id="url-diff-container" style="margin: 0 auto;">
+        </div>
+        <br>
+        <h3 id="help">Help:</h3>
+        <ul>
+          <li>
+            <b>Why should I use this instead of GitHub, Bitbucket or GitLab?</b>
+            <p>Code Syntax Highlight</p>
+            <p>Line similarity match (similar lines are together)</p>
+            <p>Line by Line and Side by Side diffs</p>
+            <p>Supports any git and unified compatible diffs</p>
+            <p>Easy code selection</p>
+          </li>
+          <li>
+            <b>What urls are supported?</b>
+            <p>Any GitHub, Bitbucket or GitLab Commit, Pull Request or Merge Request urls.</p>
+            <p>Any Git or Unified Raw Diff or Patch urls.</p>
+          </li>
+          <li>
+            <b>Can I send a custom url for a friend, colleague or co-worker?</b>
+            <p>Just add a url parameter called diff to current url using as value your Commit, Pull Request, Merge Request, Diff
+              or Patch url.</p>
+            <p>ex: <a href="url.html?diff=https://github.com/rtfpessoa/diff2html/pull/106">https://diff2html.xyz/url?diff=https://github.com/rtfpessoa/diff2html/pull/106</a>
+            </p>
+            <p>You can also use an hashtag (# or #! or #!/) in the end of the url.
+              This will be overridden if you click any href id and for that reason not advised.</p>
+          </li>
+          <li>
+            <b>Why can't I paste a diff?</b>
+            <p><a href="https://diffy.org/">diffy.org</a> is an amazing tool created by <a
+              href="https://github.com/pbu88">pbu88</a>
+              to share your diffs and uses diff2html under the hood.</p>
+            <p>Also, diff2html cli can directly publish diffs to <a href="https://diffy.org/">diffy.org</a></p>
+          </li>
+        </ul>
+        <br>
+        <h3>Thank you</h3>
+        <p>I want to thank <a href="https://github.com/kevinsimper">kevinsimper</a> for this great idea,
+          providing better diff support for existing online services.
+        </p>
+
+
+    </div>
+
+    <footer class="footer clearfix">
+        <p class="col-xs-10 col-xs-offset-1">
+            Website originally designed and built by
+            <a href="https://twitter.com/mdo" target="_blank">@mdo</a>,
+            <a href="https://twitter.com/fat" target="_blank">@fat</a>, and
+            <a href="https://twitter.com/dhg" target="_blank">@dhg</a>,
+            adapted with <span class="hero-red">❤</span> by
+            <a href="https://twitter.com/rtfpessoa" target="_blank">@rtfpessoa</a>.
+        </p>
+        <ul class="footer-list col-xs-10 col-xs-offset-1">
+
+            <li class="footer-list-item">
+                <a class="footer-list-link" href="https://github.com/rtfpessoa/diff2html#how-to-use"
+                   target="_blank">FAQ</a>
+            </li>
+
+            <li class="footer-list-item">
+                <a class="footer-list-link" href="https://diff2html.xyz">diff2html</a>
+            </li>
+
+        </ul>
+    </footer>
+
+</div>
+
+<!-- General JavaScript -->
+<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
+<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
+        integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
+        crossorigin="anonymous"></script>
+
+<script type="application/ld+json">
+{
+  "@context": "http://schema.org/",
+  "@type": "SoftwareSourceCode",
+  "name": "diff2html",
+  "author": "Rodrigo Fernandes",
+  "image": "https://diff2html.xyz/img/snapshot-3.png",
+  "description": "Diff parser and pretty html generator.",
+  "codeRepository": "https://github.com/rtfpessoa/diff2html",
+  "programmingLanguage": "JavaScript",
+  "runtimePlatform": "Node >= 0.12",
+  "mainEntityOfPage": "https://diff2html.xyz/"
+}
+</script>
+
+<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js"></script>
+<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/languages/scala.min.js"></script>
+
+<!-- diff2html -->
+<script type="text/javascript" src="assets/diff2html.min.js"></script>
+<script type="text/javascript" src="assets/diff2html-ui.min.js"></script>
+<!-- -->
+
+<script type="text/javascript" src="url.min.js"></script>
+
+
+</body>
+</html>
`;


    var stuff = this.diffService.getFiles(diff1);

    console.log(stuff);
  }
}
