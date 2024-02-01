import { buildConfig } from 'payload/config';
import {mongooseAdapter} from '@payloadcms/db-mongodb'
import { webpackBundler} from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import { Users } from './collections/Users';
import dotenv from 'dotenv';
import { Products } from './collections/Products/Products';
import { Media } from './collections/Media';
import { Track } from './collections/Track';
import { ProductFiles } from './collections/ProductFile';
import { Orders } from './collections/Orders';

dotenv.config({
  path: path.resolve(__dirname, '../.env'), 
});



export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users, Products, Media, Track, ProductFiles, Orders],
    routes: {
      admin: '/access',
    },
      admin: {
        user: 'users',
        bundler: webpackBundler(),
        meta: {
            titleSuffix: '- MaadSounds',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
        }
      },
      rateLimit: {
        max: 2000,
      },
        editor: slateEditor({}),
        db: mongooseAdapter({
            url: process.env.MONGODB_URL!,
        }),
        typescript: {
            outputFile: path.resolve(__dirname, 'payload-types.ts'),
        },
})