import { ExpressContext } from '@/server';
import { initTRPC } from '@trpc/server';
import { User } from 'payload/dist/auth';
import { PayloadRequest } from 'payload/types';




const t = initTRPC.context<ExpressContext>().create();
const middleware = t.middleware; 

const isAuth = middleware(async ({ ctx, next }) => {
    const req = ctx.req as PayloadRequest 

    const { user } = req as { user: User | null }

    if (!user || !user.id) {
        throw new Error('Not authorized')
    }

    return next({
        ctx: {
            user, 
        },
    })
})

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);