import { PostDB } from '$lib/db/posts.js'
import { error } from '@sveltejs/kit';

export const actions = {
	post: async ({ cookies, request, getClientAddress }) => {
        const { name, congrats, color } = Object.fromEntries(await request.formData());
        const ip = getClientAddress()
        const old_post = await PostDB.findOne({ip})
        
        if (!name || !congrats) return error(401, 'Not enough data passed')
        if (name.length > 25) return error(401, 'Wrong name')
        if (congrats.length > 1024) return error(401, 'Wrong message')

        if (!old_post) {
            await PostDB.create({
                ip, congrats, color, name,
                date: new Date(),
            })
        } else {
            old_post.congrats = congrats
            old_post.color = color
            old_post.name = name
            old_post.date = new Date()
            old_post.save()
        }
    }
};