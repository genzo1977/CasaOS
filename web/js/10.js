(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mixins_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixins/mixin */ "./src/mixins/mixin.js");\n/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mime */ "./node_modules/mime/index.js");\n/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-codemirror */ "./node_modules/vue-codemirror/dist/vue-codemirror.js");\n/* harmony import */ var vue_codemirror__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_codemirror__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");\n/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/theme/monokai.css */ "./node_modules/codemirror/theme/monokai.css");\n/* harmony import */ var codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/selection/active-line.js */ "./node_modules/codemirror/addon/selection/active-line.js");\n/* harmony import */ var codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/addon/selection/mark-selection.js */ "./node_modules/codemirror/addon/selection/mark-selection.js");\n/* harmony import */ var codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/addon/search/searchcursor.js */ "./node_modules/codemirror/addon/search/searchcursor.js");\n/* harmony import */ var codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/addon/hint/show-hint.js */ "./node_modules/codemirror/addon/hint/show-hint.js");\n/* harmony import */ var codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/addon/hint/show-hint.css */ "./node_modules/codemirror/addon/hint/show-hint.css");\n/* harmony import */ var codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/addon/hint/javascript-hint.js */ "./node_modules/codemirror/addon/hint/javascript-hint.js");\n/* harmony import */ var codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/addon/scroll/annotatescrollbar.js */ "./node_modules/codemirror/addon/scroll/annotatescrollbar.js");\n/* harmony import */ var codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var codemirror_addon_scroll_simplescrollbars__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/addon/scroll/simplescrollbars */ "./node_modules/codemirror/addon/scroll/simplescrollbars.js");\n/* harmony import */ var codemirror_addon_scroll_simplescrollbars__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_simplescrollbars__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/addon/scroll/simplescrollbars.css */ "./node_modules/codemirror/addon/scroll/simplescrollbars.css");\n/* harmony import */ var codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_simplescrollbars_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/addon/search/matchesonscrollbar.js */ "./node_modules/codemirror/addon/search/matchesonscrollbar.js");\n/* harmony import */ var codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/addon/search/match-highlighter.js */ "./node_modules/codemirror/addon/search/match-highlighter.js");\n/* harmony import */ var codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/mode/clike/clike.js */ "./node_modules/codemirror/mode/clike/clike.js");\n/* harmony import */ var codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets.js */ "./node_modules/codemirror/addon/edit/matchbrackets.js");\n/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var codemirror_addon_comment_comment_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! codemirror/addon/comment/comment.js */ "./node_modules/codemirror/addon/comment/comment.js");\n/* harmony import */ var codemirror_addon_comment_comment_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_comment_comment_js__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var codemirror_addon_dialog_dialog_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! codemirror/addon/dialog/dialog.js */ "./node_modules/codemirror/addon/dialog/dialog.js");\n/* harmony import */ var codemirror_addon_dialog_dialog_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_dialog_dialog_js__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var codemirror_addon_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! codemirror/addon/dialog/dialog.css */ "./node_modules/codemirror/addon/dialog/dialog.css");\n/* harmony import */ var codemirror_addon_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! codemirror/addon/search/search.js */ "./node_modules/codemirror/addon/search/search.js");\n/* harmony import */ var codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! codemirror/keymap/sublime.js */ "./node_modules/codemirror/keymap/sublime.js");\n/* harmony import */ var codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.css */ "./node_modules/codemirror/addon/fold/foldgutter.css");\n/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! codemirror/addon/fold/brace-fold.js */ "./node_modules/codemirror/addon/fold/brace-fold.js");\n/* harmony import */ var codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! codemirror/addon/fold/comment-fold.js */ "./node_modules/codemirror/addon/fold/comment-fold.js");\n/* harmony import */ var codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! codemirror/addon/fold/foldcode.js */ "./node_modules/codemirror/addon/fold/foldcode.js");\n/* harmony import */ var codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_29__);\n/* harmony import */ var codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.js */ "./node_modules/codemirror/addon/fold/foldgutter.js");\n/* harmony import */ var codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_30__);\n/* harmony import */ var codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! codemirror/addon/fold/indent-fold.js */ "./node_modules/codemirror/addon/fold/indent-fold.js");\n/* harmony import */ var codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_31__);\n/* harmony import */ var codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! codemirror/addon/fold/markdown-fold.js */ "./node_modules/codemirror/addon/fold/markdown-fold.js");\n/* harmony import */ var codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_32__);\n/* harmony import */ var codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! codemirror/addon/fold/xml-fold.js */ "./node_modules/codemirror/addon/fold/xml-fold.js");\n/* harmony import */ var codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_33__);\n/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");\n/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_34__);\n/* harmony import */ var codemirror_mode_go_go__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! codemirror/mode/go/go */ "./node_modules/codemirror/mode/go/go.js");\n/* harmony import */ var codemirror_mode_go_go__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_go_go__WEBPACK_IMPORTED_MODULE_35__);\n/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed */ "./node_modules/codemirror/mode/htmlmixed/htmlmixed.js");\n/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_36__);\n/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! codemirror/mode/htmlembedded/htmlembedded */ "./node_modules/codemirror/mode/htmlembedded/htmlembedded.js");\n/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_37__);\n/* harmony import */ var codemirror_mode_http_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! codemirror/mode/http/http */ "./node_modules/codemirror/mode/http/http.js");\n/* harmony import */ var codemirror_mode_http_http__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_http_http__WEBPACK_IMPORTED_MODULE_38__);\n/* harmony import */ var codemirror_mode_php_php__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! codemirror/mode/php/php */ "./node_modules/codemirror/mode/php/php.js");\n/* harmony import */ var codemirror_mode_php_php__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_php_php__WEBPACK_IMPORTED_MODULE_39__);\n/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");\n/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_40__);\n/* harmony import */ var codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! codemirror/mode/sql/sql */ "./node_modules/codemirror/mode/sql/sql.js");\n/* harmony import */ var codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_41__);\n/* harmony import */ var codemirror_mode_vue_vue__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! codemirror/mode/vue/vue */ "./node_modules/codemirror/mode/vue/vue.js");\n/* harmony import */ var codemirror_mode_vue_vue__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_vue_vue__WEBPACK_IMPORTED_MODULE_42__);\n/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! codemirror/mode/xml/xml */ "./node_modules/codemirror/mode/xml/xml.js");\n/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_43__);\n/* harmony import */ var codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! codemirror/mode/yaml/yaml */ "./node_modules/codemirror/mode/yaml/yaml.js");\n/* harmony import */ var codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_44__);\n/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! codemirror/mode/css/css */ "./node_modules/codemirror/mode/css/css.js");\n/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_45__);\n/* harmony import */ var codemirror_mode_cmake_cmake__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! codemirror/mode/cmake/cmake */ "./node_modules/codemirror/mode/cmake/cmake.js");\n/* harmony import */ var codemirror_mode_cmake_cmake__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_cmake_cmake__WEBPACK_IMPORTED_MODULE_46__);\n/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! codemirror/mode/markdown/markdown */ "./node_modules/codemirror/mode/markdown/markdown.js");\n/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_47__);\n/* harmony import */ var codemirror_mode_lua_lua__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! codemirror/mode/lua/lua */ "./node_modules/codemirror/mode/lua/lua.js");\n/* harmony import */ var codemirror_mode_lua_lua__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_lua_lua__WEBPACK_IMPORTED_MODULE_48__);\n/* harmony import */ var codemirror_mode_ruby_ruby__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! codemirror/mode/ruby/ruby */ "./node_modules/codemirror/mode/ruby/ruby.js");\n/* harmony import */ var codemirror_mode_ruby_ruby__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_ruby_ruby__WEBPACK_IMPORTED_MODULE_49__);\n/* harmony import */ var codemirror_mode_rust_rust__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! codemirror/mode/rust/rust */ "./node_modules/codemirror/mode/rust/rust.js");\n/* harmony import */ var codemirror_mode_rust_rust__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_rust_rust__WEBPACK_IMPORTED_MODULE_50__);\n/* harmony import */ var codemirror_mode_shell_shell__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! codemirror/mode/shell/shell */ "./node_modules/codemirror/mode/shell/shell.js");\n/* harmony import */ var codemirror_mode_shell_shell__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_shell_shell__WEBPACK_IMPORTED_MODULE_51__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n // Core\n\n\n // theme css\n\n // import \'codemirror/theme/elegant.css\'\n// require active-line.js\n\n // styleSelectedText\n\n\n // hint\n\n\n\n\n // highlightSelectionMatches\n\n\n\n\n\n\n // keyMap\n\n\n\n\n\n\n\n\n // foldGutter\n\n\n\n\n\n\n\n\n // Mode\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  mixins: [_mixins_mixin__WEBPACK_IMPORTED_MODULE_3__["mixin"]],\n  components: {\n    codemirror: vue_codemirror__WEBPACK_IMPORTED_MODULE_5__["codemirror"]\n  },\n  props: {\n    item: {\n      type: Object,\n      default: function _default() {\n        return {\n          path: \'/DATA/background.js\',\n          name: \'background.js\'\n        };\n      }\n    }\n  },\n  data: function data() {\n    var _this = this;\n\n    return {\n      code: "",\n      isChange: false,\n      cmOptions: {\n        tabSize: 4,\n        styleActiveLine: true,\n        lineNumbers: true,\n        styleSelectedText: false,\n        line: true,\n        foldGutter: true,\n        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],\n        highlightSelectionMatches: {\n          showToken: /\\w/,\n          annotateScrollbar: true\n        },\n        mode: "text/javascript",\n        // hint.js options\n        hintOptions: {\n          completeSingle: false\n        },\n        keyMap: "sublime",\n        matchBrackets: true,\n        showCursorWhenSelecting: true,\n        theme: "monokai",\n        extraKeys: {\n          \'Ctrl\': "autocomplete",\n          \'Ctrl-S\': function CtrlS() {\n            _this.saveFile();\n          },\n          \'Cmd-S\': function CmdS() {\n            _this.saveFile();\n          }\n        },\n        scrollbarStyle: "overlay"\n      }\n    };\n  },\n  computed: {\n    codemirror: function codemirror() {\n      return this.$refs.cmEditor.codemirror;\n    },\n    pathArray: function pathArray() {\n      return this.item.path.substr(1).split("/");\n    }\n  },\n  mounted: function mounted() {\n    this.readFile();\n  },\n  methods: {\n    onCmCodeChange: function onCmCodeChange() {\n      this.isChange = true;\n    },\n    onCmReady: function onCmReady() {\n      this.isChange = false;\n    },\n    readFile: function readFile() {\n      var _this2 = this;\n\n      var ext = this.getFileExt(this.item);\n      var mode = mime__WEBPACK_IMPORTED_MODULE_4___default.a.getType(ext) == null ? "text/javascript" : mime__WEBPACK_IMPORTED_MODULE_4___default.a.getType(ext);\n\n      if (ext.toLowerCase() == "makefile") {\n        mode = \'text/x-cmake\';\n      } else if (ext.toLowerCase() == "py") {\n        mode = \'text/x-python\';\n      } else if (ext.toLowerCase() == "go") {\n        mode = \'text/x-go\';\n      } else if (ext.toLowerCase() == "vue") {\n        mode = \'text/x-vue\';\n      }\n\n      this.codemirror.setOption("mode", mode);\n      this.$api.file.download(this.item.path).then(function (res) {\n        if (_this2.getFileExt(_this2.item) == \'json\') {\n          _this2.code = JSON.stringify(res.data, null, 2);\n        } else {\n          _this2.code = String(res.data);\n        }\n\n        _this2.$nextTick(function () {\n          _this2.isChange = false;\n        });\n      });\n    },\n    saveFile: function saveFile() {\n      var _this3 = this;\n\n      var leave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var content = this.codemirror.getValue();\n      this.$api.file.update(this.item.path, content).then(function (res) {\n        if (res.data.success == 200) {\n          // this.readFile();\n          _this3.isChange = false;\n\n          _this3.$buefy.toast.open({\n            message: _this3.$t(\'Saved\'),\n            type: \'is-success\'\n          });\n\n          if (leave) {\n            _this3.$emit("close");\n          }\n        } else {\n          _this3.$buefy.toast.open({\n            message: res.data.message,\n            type: \'is-danger\'\n          });\n        }\n      });\n    },\n    download: function download() {\n      this.downloadFile(this.item);\n    },\n    close: function close() {\n      var _this4 = this;\n\n      if (this.isChange) {\n        this.$buefy.dialog.confirm({\n          title: this.$t(\'Want to save?\'),\n          message: this.$t(\'Your changes will be lost if you don’t save them.\'),\n          hasIcon: true,\n          canCancel: [\'button\'],\n          confirmText: this.$t(\'Save\'),\n          cancelText: this.$t(\'Don’t Save\'),\n          onConfirm: function onConfirm() {\n            _this4.saveFile(true);\n          },\n          onCancel: function onCancel() {\n            _this4.$emit("close");\n          }\n        });\n      } else {\n        this.$emit("close");\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/CodeEditor.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},'./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5adb896b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=template&id=7784315b&':
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5adb896b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=template&id=7784315b& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", { staticClass: "overlay" }, [\n    _c("header", { staticClass: "modal-card-head" }, [\n      _c("div", { staticClass: "is-flex-grow-1 is-flex " }, [\n        _c("h3", { staticClass: "title is-5" }, [\n          _vm._v(_vm._s(_vm.$t("Code Editor"))),\n        ]),\n      ]),\n      _c(\n        "div",\n        { staticClass: "is-flex is-align-items-center" },\n        [\n          _c("b-button", {\n            staticClass: "mr-3",\n            attrs: {\n              "icon-left": "content-save",\n              type: "is-dark",\n              size: "is-small",\n              label: _vm.$t("Save"),\n              rounded: "",\n            },\n            on: {\n              click: function ($event) {\n                return _vm.saveFile(false)\n              },\n            },\n          }),\n          _c("b-button", {\n            staticClass: "mr-2",\n            attrs: {\n              "icon-left": "download",\n              type: "is-primary",\n              size: "is-small",\n              label: _vm.$t("Download"),\n              rounded: "",\n            },\n            on: { click: _vm.download },\n          }),\n          _c(\n            "div",\n            {\n              staticClass:\n                "is-flex is-align-items-center modal-close-container close-btn modal-close-container-line",\n            },\n            [\n              _c("button", {\n                staticClass: "delete",\n                attrs: { type: "button" },\n                on: { click: _vm.close },\n              }),\n            ]\n          ),\n        ],\n        1\n      ),\n    ]),\n    _c(\n      "div",\n      { staticClass: "file-path-bread" },\n      [\n        _c(\n          "b-breadcrumb",\n          { attrs: { size: "is-small" } },\n          _vm._l(_vm.pathArray, function (item, index) {\n            return _c(\n              "b-breadcrumb-item",\n              { key: "f-" + index, attrs: { active: "" } },\n              [_vm._v(_vm._s(item))]\n            )\n          }),\n          1\n        ),\n      ],\n      1\n    ),\n    _c(\n      "div",\n      {\n        staticClass:\n          "is-flex is-justify-content-center is-align-items-center is-flex-grow-1 v-container code",\n      },\n      [\n        _c("codemirror", {\n          ref: "cmEditor",\n          attrs: { options: _vm.cmOptions },\n          on: { input: _vm.onCmCodeChange, ready: _vm.onCmReady },\n          model: {\n            value: _vm.code,\n            callback: function ($$v) {\n              _vm.code = $$v\n            },\n            expression: "code",\n          },\n        }),\n      ],\n      1\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/CodeEditor.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%225adb896b-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options')},"./src/components/filebrowser/viewers/CodeEditor.vue":
/*!***********************************************************!*\
  !*** ./src/components/filebrowser/viewers/CodeEditor.vue ***!
  \***********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CodeEditor_vue_vue_type_template_id_7784315b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeEditor.vue?vue&type=template&id=7784315b& */ "./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=template&id=7784315b&");\n/* harmony import */ var _CodeEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeEditor.vue?vue&type=script&lang=js& */ "./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(\n  _CodeEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _CodeEditor_vue_vue_type_template_id_7784315b___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _CodeEditor_vue_vue_type_template_id_7784315b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/components/filebrowser/viewers/CodeEditor.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/CodeEditor.vue?')},"./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditor.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/CodeEditor.vue?')},"./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=template&id=7784315b&":
/*!******************************************************************************************!*\
  !*** ./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=template&id=7784315b& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5adb896b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_template_id_7784315b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5adb896b-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CodeEditor.vue?vue&type=template&id=7784315b& */ "./node_modules/cache-loader/dist/cjs.js?{\\"cacheDirectory\\":\\"node_modules/.cache/vue-loader\\",\\"cacheIdentifier\\":\\"5adb896b-vue-loader-template\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/filebrowser/viewers/CodeEditor.vue?vue&type=template&id=7784315b&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5adb896b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_template_id_7784315b___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5adb896b_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeEditor_vue_vue_type_template_id_7784315b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/filebrowser/viewers/CodeEditor.vue?')}}]);