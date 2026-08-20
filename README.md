# react-test-back

AdonisJS TypeScript API for the `diogodeandrade.com.br` profile project.

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

3. Set `APP_KEY` in `.env`. Generate a value with:

   ```bash
   node ace generate:key
   ```

4. Start the API:

   ```bash
   npm run dev
   ```

The API listens on `HOST` and `PORT`, defaulting to `0.0.0.0:3333`.

To run the compiled production build locally:

```bash
npm run build
npm run start
```

`npm run start` loads `.env` from the repository root when it exists. In deployed
environments, provide the same variables through the host environment instead.

## Smoke Endpoints

- `GET /` returns the API name and status.
- `GET /health` returns a simple health response and confirms the API timezone is UTC.

## Environment Variables

| Name | Default in `.env.example` | Purpose |
| --- | --- | --- |
| `TZ` | `UTC` | Keeps the Node.js process aligned to GMT-0 / UTC. |
| `NODE_ENV` | `development` | Runtime environment. |
| `HOST` | `0.0.0.0` | Bind address for local development. |
| `PORT` | `3333` | API port. |
| `APP_KEY` | `local_dev_only_change_me_32_chars` | Local-only AdonisJS app key placeholder. Replace it outside source control for real environments. |
| `LOG_LEVEL` | `info` | Server logging level. |
| `FRONTEND_ORIGINS` | `http://localhost:5173,http://localhost:3000,https://diogodeandrade.com.br` | Comma-separated allowed CORS origins for local frontend and production domain boundaries. |
| `REQUEST_TIMEOUT_MS` | `30000` | Explicit request timeout used by the global timeout middleware. |

## Server Configuration

- CORS is configured in `config/cors.ts`.
- Request timeout settings live in `config/server.ts` and are enforced by `app/middleware/request_timeout_middleware.ts`.
- Timezone is set to `UTC` in `config/app.ts` and mirrored through `TZ=UTC`.
- Centralized exception handling lives in `app/exceptions/handler.ts` and returns visitor-safe JSON errors.
