#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if ! command -v npm >/dev/null; then echo 'Cần Node.js/npm để build CodeMirror 6'; exit 1; fi
npm install --no-save --no-package-lock @codemirror/view @codemirror/state @codemirror/commands @codemirror/lang-javascript @codemirror/lang-html @codemirror/lang-css @codemirror/language @codemirror/theme-one-dark esbuild
./node_modules/.bin/esbuild tools/codemirror-entry.js --bundle --format=esm --minify --outfile=vendor/codemirror/editor.js
printf 'Đã tạo vendor/codemirror/editor.js — có thể commit file này lên GitHub Pages.\n'
