#!/bin/bash

# Do the build.
gulp build --env=local
grow build

# Start the webserver for a local preview.
gulp preview
