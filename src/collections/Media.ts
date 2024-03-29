import { CollectionConfig, Access  } from 'payload/types';
import { User } from '../payload-types';

export const isAdminOrHasAccessToMedia = 
(): Access => 
  async ({req}) => {
    const user = req.user as User | undefined;
    
    if(!user) return false 
    if (user.role === 'admin') return true;

    return {
        user: {
            equals: req.user.id,
        }
    }
}



export const Media: CollectionConfig = {
    slug: 'media',
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
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'featured',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: undefined,
            },
        ],
        mimeTypes: ['image/*'],
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
            }
        }
    ]
}