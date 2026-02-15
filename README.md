# just-docs

Documentation for all projects under the B.A.H.M.S. organization. Published on https://docs.bahms.org.

# Local development

To run a local development server, either run it locally, or through Docker compose.

## Node.js

Be sure to run Node version 22.

### Installation of `node_modules/`

Ensure the dependencies are installed, at least once.

```bash
npm ci
```

Be sure to run this command again if changes to `package-lock.json` are pulled in.

### Running the local development server

To start the local development server, run:

```bash
npm run dev
```

This will expose the Astro server on `http://localhost:4321/`

## Docker Compose

In order to use the local development server through Docker Compose, one needs to run the following command:

```bash
docker compose up -d
```

The `-d` flag runs in detached mode. Without `-d` it will attach to the current console, binding both input and output and making the process terminate if you close your terminal. The difference is a matter of preference.

This will do the following, in order:

1. Install `node_modules`
2. Run `npm run dev`
3. Expose the Astro server on `http://localhost:4321/`

### Running NPM commands

To run the equivalent of `npm ci`, use the following.

```shell
docker compose run --rm npm ci
```

Any arguments after `npm` are given to the `npm` executable. E.g.:

```shell
docker compose run --rm npm run build
```

Will perform the equivalent of `npm run build`.

### Log server output

Use the following to get the 30 latest log entries for the `app` service.

```bash
docker compose logs app -n 30
```

Or use `-f` to follow the logs:

```bash
docker compose logs -f -n 30 app
```