import { CollectionConfig } from 'payload/types';
import { isAdminOrHasAccessToMedia } from './Media';

export const Track: CollectionConfig = {
    slug: 'track',
    hooks: {
        beforeChange: [
            ({ req, data }) => {
                return {...data, user: req.user.id }
            },
        ],
    },
     access: {
        read: async ({ req }) => {
            const referer = req.headers.referer;

            if (!req.user || !referer?.includes('access')) {
                return true;
            }

            return await isAdminOrHasAccessToMedia()({ req });
        },
        delete: isAdminOrHasAccessToMedia(),
        update: isAdminOrHasAccessToMedia(),
    },

      admin: {
        hidden: ({user}) => user.role !== 'admin',
    },
    upload:{
        staticURL: '/track',
        staticDir: 'track',
        mimeTypes: ['audio/*'],  
    },
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            hasMany: false,
            admin: {
                condition: () => false,
            },                                                                                                                                                                                                                                         
        },
    ],
}