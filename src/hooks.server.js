import { dbConnect } from "$lib/db/mongo-connect";

await dbConnect();

export const handle = async ({ event, resolve }) => {
    const response = await resolve(event);
    return response;
};