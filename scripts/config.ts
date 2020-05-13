import { name, description } from '../package.json'

export const config = {
  port: 3000, // dev server port
  publicUrl: process.env.PUBLIC_URL || '.',
  // @see https://github.com/jaketrent/html-webpack-template
  templateConfig: {
    title: name,
    appMountId: 'root',
    mobile: true,
    // @see https://github.com/joshbuchea/HEAD#meta
    meta: [
      {
        name: 'description',
        content: description,
      },
    ],
  },
} as const
