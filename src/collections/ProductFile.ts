import { BeforeChangeHook } from 'payload/dist/collections/config/types';
import { CollectionConfig, Access } from 'payload/types';
import { User } from '../payload-types'


const addUser: BeforeChangeHook = ({req, data}) => {
    const user = req.user as User | null;
    return { ...data, user: user?.id };
}


const yourOwnAndPurchased: Access = async ({ req }) => {
    const user = req.user as User | null;
    
    if(user?.role === 'admin') return true
    if(!user) return false

    const { docs: products } = await req.payload.find({
        collection: 'products',
        depth: 0,
        where: {
            user: {
                equals: user.id
            },
        },
    })

    const ownProductFileIds = products.map((prod) => prod.product_files ).flat()

    const { docs: orders } = await req.payload.find({
        collection: 'orders',
        depth: 2,
        where: {
            user: {
                equals: user.id
            },
        },
    })

    const purchasedProductFileIds = orders.map((order) => {
        return order.products.map((product) => {
            if(typeof product === 'string') return req.payload.logger.error(
                'Search depth not sufficient to find purchased file IDs'
            )

            return typeof product.product_files === 'string' ? product.product_files : product.product_files.id;
        })
    })
    .filter(Boolean)
    .flat()

    return {
        id: {
            in:[...ownProductFileIds, ...purchasedProductFileIds]
        }
    }
} 



export const ProductFiles: CollectionConfig = {
    slug: 'product_files',
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
    },
    access: {
        read: yourOwnAndPurchased,
        update: ({ req }) => req.user.role === 'admin',
        delete: ({ req }) => req.user.role === 'admin',
    },
    hooks: {
        beforeChange: [addUser],
    },
    upload: {
        staticURL: '/product_files',
        staticDir: 'product_files',
        mimeTypes: [
            'application/zip', 
            'application/x-zip-compressed', 
            'application/x-rar-compressed', 
            'application/octet-stream', 
            'application/x-7z-compressed', 
            'application/x-zip', 
            'application/x-zip-compressed', 
            'multipart/x-zip', 
            'application/x-compressed', 
            'application/x-zip-compressed', 
            'application/zip', 
            'multipart/x-zip', 
            'application/x-rar-compressed', 
            'application/octet-stream', 
            'application/x-rar', 
            'application/rar', 
            'application/x-tar', 
            'application/tar', 
            'application/x-gzip', 
            'application/gzip', 
            'application/x-bzip2'
        ],
    },
    fields: [
        {
            name:'user',
            type:'relationship',
            relationTo:'users',
            admin: {
                condition: () => false,
            },
            hasMany:false,
            required:true,
        }
    ]
}