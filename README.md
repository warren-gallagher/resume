# Resume 

Warren Gallagher's interactive resume.

The code is written in TypeScript targeting the [SvelteKit](https://kit.svelte.dev) framework.

This version interacts with Supabase directly from the web UI. 

## Technology Stack

* SvelteKit - [https://kit.svelte.dev](https://kit.svelte.dev)
* SvelteStrap - [https://sveltestrap.js.org](https://sveltestrap.js.org)
* Bootstrap - [https://getbootstrap.com](https://getbootstrap.com)
* PDFmake - [https://supabase.com](https://supabase.com)

## Developing

### Clone the Repository
```
git clone git@github.com:warren-gallagher/resume.git
```

### Install developer dependencies
```
npm install
```

### Run in developer mode
```
# Runs a webserver running on http://localhost:3000 and opens that page in your default browser.
npm run dev -- --open --host
```

### Run in production using adpater-node for SvelteKit
```
# Install additional dependencies
npm install -g env-cmd
npm install pm2@latest
npm install pm2-logrotate

# Copies use-node-svelte.config.js as svelte.config.js
./use-node.sh

# Build
npm run build

# Run using pm2
./production.sh
```

### Run on Vercel

Commits to the main branch will be automatically built and deployed on Vercel. The deployed app can be reached at: [https://takeoff-lilac.vercel.app](https://takeoff-lilac.vercel.app)
