#!/bin/bash
NODE_ENV=production env-cmd -f .env-dev pm2 start pm2.json
