import {EditorView, keymap, lineNumbers, highlightActiveLine, drawSelection} from '@codemirror/view';
import {EditorState} from '@codemirror/state';
import {defaultKeymap, history, historyKeymap, indentWithTab} from '@codemirror/commands';
import {javascript} from '@codemirror/lang-javascript';
import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {syntaxHighlighting, defaultHighlightStyle, bracketMatching, foldGutter} from '@codemirror/language';
import {oneDark} from '@codemirror/theme-one-dark';
export function createEditor(host,value,onChange){
  const extension=[lineNumbers(),highlightActiveLine(),drawSelection(),history(),foldGutter(),bracketMatching(),syntaxHighlighting(defaultHighlightStyle,{fallback:true}),keymap.of([indentWithTab,...defaultKeymap,...historyKeymap]),javascript(),EditorView.lineWrapping,EditorView.updateListener.of(update=>{if(update.docChanged)onChange?.()})];
  const state=EditorState.create({doc:value,extensions:[...extension,oneDark,EditorView.theme({'&':{height:'100%'},'.cm-scroller':{fontFamily:'Consolas,monospace',fontSize:'13px',overflow:'auto'}})]});
  return new EditorView({state,parent:host});
}
