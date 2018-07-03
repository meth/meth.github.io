#!/bin/bash
set -e
cp CNAME public
node_modules/.bin/gh-pages -b master -d public -r git@github.com:meth/meth.github.io.git
