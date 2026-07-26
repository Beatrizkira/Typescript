## GitHub Copilot Chat

- Extension: 0.52.0 (prod)
- VS Code: 1.124.0 (1b50d58d73426c9171299ec4037d01365d995b78)
- OS: win32 10.0.26200 x64
- GitHub Account: Beatrizkira

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 4.228.31.149 (25 ms)
- DNS ipv6 Lookup: Error (15 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (3 ms)
- Electron fetch (configured): Error (9832 ms): Error: net::ERR_CONNECTION_TIMED_OUT
	at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10658)
	at SimpleURLLoaderWrapper.emit (node:events:509:28)
	at SimpleURLLoaderWrapper.emit (node:domain:489:12)
  {"is_request_error":true,"network_process_crashed":false}
- Node.js https: timed out after 10 seconds
- Node.js fetch: timed out after 10 seconds

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.22 (15 ms)
- DNS ipv6 Lookup: Error (27 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (7 ms)
- Electron fetch (configured): HTTP 200 (146 ms)
- Node.js https: HTTP 200 (470 ms)
- Node.js fetch: HTTP 200 (452 ms)

Connecting to https://copilot-proxy.githubusercontent.com/_ping:
- DNS ipv4 Lookup: 4.228.31.153 (17 ms)
- DNS ipv6 Lookup: Error (21 ms): getaddrinfo ENOTFOUND copilot-proxy.githubusercontent.com
- Proxy URL: None (5 ms)
- Electron fetch (configured): HTTP 200 (94 ms)
- Node.js https: HTTP 200 (85 ms)
- Node.js fetch: HTTP 200 (78 ms)

Connecting to https://mobile.events.data.microsoft.com: HTTP 404 (125 ms)
Connecting to https://dc.services.visualstudio.com: HTTP 404 (690 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: HTTP 200 (485 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: HTTP 200 (516 ms)
Connecting to https://default.exp-tas.com: HTTP 400 (89 ms)

Number of system certificates: 79

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).