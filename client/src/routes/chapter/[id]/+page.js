import { getChapterById } from '$lib/api/bhagavadgita.js';

export async function load({ params, fetch }) {
    const chapterId = params.id;
    const chapter = await getChapterById(chapterId, fetch);

    if (!chapter) {
        return {
            status: 404,
            error: new Error('Chapter not found')
        };
    }

    return {
        chapter
    };
}
