# Data Positioning Highcharts Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
<span><!-- OWASP_BADGES_START -->
[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://dpuse.github.io/dpuse-tool-highcharts/dependency-check-reports/dependency-check-report.html)
<!-- OWASP_BADGES_END --></span>

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
|Name|Type|Installed|Latest|Latest Released|Deps|Document|
|:-|:-|:-:|:-:|:-|-:|:-|
|@dpuse/dpuse-shared|MIT|0.3.595|0.3.595|this month: 2026-03-23|0|[LICENSE](https://raw.githubusercontent.com/dpuse/dpuse-shared/main/LICENSE)|
|highcharts|https://www.highcharts.com/license|12.5.0|12.5.0|2 months ago: 2026-01-12|2|[LICENSE.txt](https://raw.githubusercontent.com/highcharts/highcharts-dist/master/LICENSE.txt)|

<!-- DEPENDENCY_LICENSES_END -->

**Installed dependencies are kept up-to-date with latest releases.**

### Bundle Analysis Report

The Bundle Analysis Report provides a detailed breakdown of the bundle's composition and module sizes, helping to identify which modules contribute most to the final build. It is generated automatically on each release using the npm package `rollup-plugin-visualizer`.

[View the Bundle Analysis Report](https://dpuse.github.io/dpuse-tool-highcharts/stats/index.html)

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
