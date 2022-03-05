#!/usr/bin/env bash

folder=$(dirname $0)

cd "${folder}" || exit

npx jest --coverage
