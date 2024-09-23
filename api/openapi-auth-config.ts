import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './app.json',
  apiFile: '../src/globals/jango.ts',
  apiImport: 'jango',
  outputFile: '../src/services/API/auth/index.ts',
  exportName: 'jango_auth',
  hooks: true,
}

export default config