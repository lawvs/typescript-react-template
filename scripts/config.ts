import url from 'url'

import { name, description } from '../package.json'

export const config = {
  port: 3000, // dev server port
  outputDir: 'dist',
  publicPath: process.env.PUBLIC_URL
    ? (url.parse(process.env.PUBLIC_URL).pathname as string)
    : '.',
  // @see https://github.com/jaketrent/html-webpack-template
  templateConfig: {
    title: name,
    appMountId: 'root',
    // <meta content="width=device-width,initial-scale=1" name="viewport" />
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
