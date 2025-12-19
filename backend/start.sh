#!/bin/bash

echo "Starting backend server..."
source ./.venv/bin/activate

export MAIN=manage.py

python $MAIN runserver