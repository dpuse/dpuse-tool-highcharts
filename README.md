# Data Positioning Highcharts Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A TypeScript wrapper for Highcharts that implements the Data Positioning chart-rendering interface. It improves browser memory efficiency by sharing a single Highcharts instance shared across all presenters and loading optional modules on demand.

## Installation

There’s no need to install this tool manually. Once released, it’s uploaded to the Data Positioning Engine cloud and becomes instantly available to all new instances of the browser app. A notification about the new version is also sent to all existing browser apps.

## Usage

Basic usage example with no error handling.

```typescript
import type { HighchartsTool, HighchartsView } from '@dpuse/dpuse-tool-highcharts';

async function loadHighchartsTool(version: string): Promise<HighchartsTool> {
    if (highchartsTool) return highchartsTool;

    const URL = `https://engine-eu.dpuse.app/tools/highcharts_v${version}/dpuse-tool-highcharts.es.js`;
    const HighchartsTool = (await import(/* @vite-ignore */ URL)).HighchartsTool as new () => HighchartsTool;
    return new HighchartsTool();
}

const highchartsTool = await loadHighchartsTool('n.n.nnn');

const cartesianChart: HighchartsView = await highchartsTool.renderCartesianChart(/* arguments... */);
const polarChart: HighchartsView = await highchartsTool.renderPolarChart(/* arguments... */);
const rangeChart: HighchartsView = await highchartsTool.renderRangeChart(/* arguments... */);
```

## Reports & Compliance

### Dependency Check Report

The OWASP Dependency Check Report identifies known vulnerabilities in project dependencies. It is generated automatically on each release using the npm package `owasp-dependency-check`. We also rely on GitHub Dependabot to continuously check for vulnerabilities across all dependencies.

[View the OWASP Dependency Check Report](https://dpuse.github.io/dpuse-tool-highcharts/dependency-check-reports/dependency-check-report.html)

### Dependency Licenses

The following table lists top-level production and peer dependencies. All these dependencies (including transitive ones) have been recursively verified to use Apache-2.0, CC0-1.0, or MIT—commercially friendly licenses with minimal restrictions. Developers cloning this repository should independently verify dev and optional dependencies; users of the uploaded library are covered by these checks.

<!-- DEPENDENCY_LICENSES_START -->

License data is collected automatically on each release using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use https://www.highcharts.com/license or MIT — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

|Dependency|Version|License(s)|Document|
|:-|:-:|:-|:-|
|[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)|0.3.743|MIT|[LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.743-LICENSE.txt)|
|[highcharts](https://github.com/highcharts/highcharts-dist)|13.0.0|Custom: https://www.highcharts.com/license|[LICENSE](licenses/downloads/highcharts@13.0.0-LICENSE.txt)|

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are simply mature and stable, requiring no active development.

- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.743 — this month: 2026-07-14
- **[highcharts](https://github.com/highcharts/highcharts-dist)** 13.0.0 — 1 month ago: 2026-06-11
  - **jspdf** 
  - **svg2pdf.js**

<!-- DEPENDENCY_TREE_END -->

### Bundle Analysis Report

The Bundle Analysis Report provides a detailed breakdown of the bundle's composition and module sizes, helping to identify which modules contribute most to the final build. It is generated automatically on each release using the npm package `rollup-plugin-visualizer`.

[View the Bundle Analysis Report](https://dpuse.github.io/dpuse-tool-highcharts/stats/index.html)

<!-- BUNDLE_START -->

The Bundle Analysis Report is generated automatically on each release using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                                        | Composition                  |
| :----------------------------------------------------------------------- | :--------------------------- |
| dist/dpuse-tool-highcharts.es.js                                         | 572.1 kB · brotli 132.8 kB   |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts                                       | `██████████████░░░░░░` 68.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highcharts.js            | `█████████░░░░░░░░░░░` 44.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modules/accessibility.js | `████░░░░░░░░░░░░░░░░` 20.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;themes/adaptive.js       | `█░░░░░░░░░░░░░░░░░░░` 2.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modules/pattern-fill.js  | `░░░░░░░░░░░░░░░░░░░░` 1.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]                      | `██░░░░░░░░░░░░░░░░░░` 8.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src → index.ts                                   | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| dist/highcharts-more-0p0GqZ8D.js                                         | 128.5 kB · brotli 31.7 kB    |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → highcharts-more.js                  | `███░░░░░░░░░░░░░░░░░` 15.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]                      | `░░░░░░░░░░░░░░░░░░░░` 1.6%  |
| dist/sankey-PXPiVSFg.js                                                  | 23.3 kB · brotli 6.8 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → modules/sankey.js                   | `█░░░░░░░░░░░░░░░░░░░` 2.7%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]                      | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| dist/dependency-wheel-BJ8Htyx3.js                                        | 11.6 kB · brotli 3.8 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → modules/dependency-wheel.js         | `░░░░░░░░░░░░░░░░░░░░` 1.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]                      | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| dist/streamgraph-Di8Fshuv.js                                             | 2.0 kB · brotli 848 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;highcharts → modules/streamgraph.js              | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]                      | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/rolldown-runtime-3b4jIN3o.js                                        | 760 B · brotli 406 B         |

<!-- BUNDLE_END -->

## Repository Management Commands

The following list details the repository management commands implementation by this project. For more details, please refer to the scripts section of the 'package.json' file in this project.

| Name               | VS Code Shortcuts | Notes                                                                                                                                              |
| ------------------ | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| audit              | alt+ctrl+shift+a  | Audit the project's dependencies for known security vulnerabilities.                                                                               |
| build              | alt+ctrl+shift+b  | Build the package using Vite. Output to '/dist' directory.                                                                                         |
| check              | alt+ctrl+shift+c  | Identify outdated dependencies using npm `outdated` and `npm-check-updates` with option to install latest versions. Also runs `retire` scanner.    |
| document           | alt+ctrl+shift+d  | Identify licenses of the project's production and peer dependencies. See [LICENSES.json](./LICENSES.json).                                         |
| format             | alt+ctrl+shift+f  | Use `prettier`to enforce formatting style rules.                                                                                                   |
| lint               | alt+ctrl+shift+l  | Use `eslint`to check the code for potential errors and enforces coding style rules.                                                                |
| publish            | alt+ctrl+shift+p  | Publish the package to `npm`.                                                                                                                      |
| release            | alt+ctrl+shift+r  | Bump version, build configuration, build presenter, synchronise with `GitHub`, upload presenter to Data Positioning platform and publish to `npm`. |
| sync:withGitHub    | alt+ctrl+shift+s  | Synchronise local repository with the main GitHub repository.                                                                                      |
| test               | alt+ctrl+shift+t  | ❌ Not implemented.                                                                                                                                |
| update:dataPosDeps | alt+ctrl+shift+u  | Install the latest version of all Data Positioning dependencies.                                                                                   |

## License

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
