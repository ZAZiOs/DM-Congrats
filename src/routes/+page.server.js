import { PostDB } from '$lib/db/posts.js'
import { error } from '@sveltejs/kit';

export const actions = {
	post: async ({ cookies, request, getClientAddress }) => {
        const { name, congrats, color1, color2 } = Object.fromEntries(await request.formData());
        const ip = getClientAddress()
        const old_post = await PostDB.findOne({ip})
        
        if (!name || !congrats) return error(401, 'Not enough data passed')
        if (name.length > 25) return error(401, 'Wrong name')
        if (congrats.length > 1024) return error(401, 'Wrong message')

        if (!old_post) {
            await PostDB.create({
                ip, congrats, color1, color2, name,
                date: new Date(),
            })
        } else {
            old_post.congrats = congrats
            old_post.color1 = color1
            old_post.color2 = color2
            old_post.name = name
            old_post.date = new Date()
            old_post.save()
        }
    }
};

export const load = async ({ getClientAddress }) => {
    let ip = getClientAddress()
    const old_post = await PostDB.findOne({ip}).lean()
    old_post._id = String(old_post._id)
    return {
        props: { old_post }
    }
}