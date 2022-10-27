#!/bin/bash

echo "TEST_ENV: $TEST_ENV"

if [[ "$TEST_ENV" == "TEST" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
