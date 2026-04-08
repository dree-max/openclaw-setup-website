#!/bin/bash

cd /vercel/share/v0-project

# Add the changes
git add app/layout.tsx public/favicon.jpg

# Commit the changes
git commit -m "Add lobster favicon to site

- Generated favicon image (public/favicon.jpg)
- Updated app/layout.tsx to reference favicon in metadata"

# Push to the current branch
git push origin HEAD

echo "Changes pushed successfully!"
