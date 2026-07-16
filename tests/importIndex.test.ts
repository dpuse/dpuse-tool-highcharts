// @vitest-environment happy-dom

// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────
// Building or type-checking src/index.ts doesn't execute its top-level side-effect imports (the adaptive theme,
// accessibility, and Highcharts core registration). Real ESM only guarantees the Highcharts core module runs before
// modules that assume it (like accessibility's compose() call) if the importing file lists it first, so a previous
// import order here crashed at module-load time with no build-time signal. This test actually executes the module.

describe('index', () => {
    it('imports without throwing', async () => {
        await expect(import('@/index')).resolves.toBeDefined();
    });
});
