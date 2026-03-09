# just-docs

Documentation for all projects under the B.A.H.M.S. organization. Published on https://docs.bahms.org.

# Local development

To run a local development server, either run it locally with Node.js, or through
Docker compose.

## Node.js

<details>
<summary>How to develop locally using Node.js on your host system.</summary>

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

### Creating a production build

The following command will create a production build in the `dist/` folder.

```bash
npm run build
```

### Previewing the production build

When you have created a local `dist/` output, you can preview the result with
the following command:

```bash
num run preview
```

This will expose the production preview on `http://localhost:4321/`

One should always do this before opening a pull request.
</details>


## Docker Compose

<details>
<summary>How to develop locally using Docker Compose.</summary>

In order to use the local development server through Docker Compose, one needs to
run the following command:

```bash
docker compose up -d
```

The `-d` flag runs in detached mode. Without `-d` it will attach to the current
console, binding both input and output and making the process terminate if you
close your terminal. The difference is a matter of preference.

This will do the following, in order:

1. Install `node_modules`
2. Run `npm run dev:host`
3. Expose the Astro server on `http://localhost:4321/`

### Production preview

In order to test against a build as it would be deployed on production, use the
`preview` profile when bringing up the Docker Compose project:

```bash
docker compose --profile preview up -d
```

This will do the following, on top of the `dev` environment, in order:

1. Remove the `dist/` directory.
2. Create a production build in `dist/`.
3. Run `npm run preview:host`
4. Expose a production preview on `http://localhost:4322/`

> **N.B.**: This will run side-by-side with the `dev` environment on port `4321`.

Be sure to pull down the project using the `preview` profile too, so it won't
leave up the preview server:

```bash
docker compose --profile preview down
```

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
</details>

# Extract Twitch Redeems

To get a list of available redeems and their configuration, run the following
snippet in the console on a page with Twitch chat open.

```javascript
const redeems = [];

for (const reward of document.querySelectorAll('.rewards-list>div')) {
    const icon = reward.querySelector('.reward-icon');
    
    if (!icon) {
        continue;
    }
    
    const iconBackgroundColor = icon.style.backgroundColor;
    const iconUrl = icon.querySelector('img').src;
    const title = reward.querySelector('p[title]').innerText;
    const channelPoints = reward.querySelector('.reward-icon__cost p').innerText;
    redeems.push({title, channelPoints, iconBackgroundColor, iconUrl});
}

console.log({redeems});
```

This list can be used to update `src/content/redeems.ts`.