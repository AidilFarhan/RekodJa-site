import { defineConfig } from 'vite'
import path from 'path'
import { readFileSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Resolve version-qualified imports from the original design export.
const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
const designAliases = Object.fromEntries(
  Object.entries(packageJson.dependencies).map(([name, version]) => [`${name}@${version}`, name]),
)


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      ...designAliases,
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
