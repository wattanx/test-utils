import { vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

vi.resetModules()

mockNuxtImport<typeof useAutoImportSetupMocked>(
  'useAutoImportSetupMocked',
  () =>
    vi.fn(() => {
      return 'mocked in setup'
    }),
)

mockNuxtImport<typeof useAutoImportSetupOverridenMocked>(
  'useAutoImportSetupOverridenMocked',
  () =>
    vi.fn(() => {
      return 'mocked in setup'
    }),
)
