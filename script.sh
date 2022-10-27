#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_ENV_PRE: $VERCEL_ENV_PRE"

if [[ "$VERCEL_ENV" == "production" || "$VERCEL_ENV_PRE" == "preview" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
