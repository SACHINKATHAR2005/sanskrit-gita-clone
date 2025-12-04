const BASE_URL = '/api/geeta';

console.log('🔗 BASE_URL:', BASE_URL);
console.log('🌍 Environment:', typeof window !== 'undefined' ? window.location.hostname : 'SSR');

export async function getAllChapters(fetchFn = fetch) {
    try {
        console.log('📚 Fetching all chapters from:', BASE_URL);
        const requests = [];
        for (let i = 1; i <= 18; i++) {
            requests.push(fetchFn(`${BASE_URL}?q=${i}`));
        }

        console.log('⏳ Waiting for', requests.length, 'requests...');
        const responses = await Promise.all(requests);
        console.log('✅ Received', responses.length, 'responses');

        const dataPromises = responses.map(response => response.json());
        const chaptersData = await Promise.all(dataPromises);
        console.log('📖 Parsed chapter data:', chaptersData.length, 'chapters');

        const chapters = chaptersData.map((chapterData, index) => {
            const verses = chapterData.data || [];
            const firstVerse = verses.find(v => v.shlok_no === "0") || verses[0];

            return {
                id: index + 1,
                number: index + 1,
                title: `Chapter ${index + 1}`,
                verseCount: verses.length - 1,
                description: firstVerse ? firstVerse.lyrics : '',
            };
        });

        console.log('✨ Successfully loaded', chapters.length, 'chapters');
        return chapters;
    } catch (error) {
        console.error('❌ Error fetching all chapters:', error);
        console.error('Error details:', error.message, error.stack);
        return [];
    }
}

export async function getChapterById(chapterId, fetchFn = fetch) {
    try {
        console.log(`📖 Fetching chapter ${chapterId} from:`, `${BASE_URL}?q=${chapterId}`);
        const response = await fetchFn(`${BASE_URL}?q=${chapterId}`);
        console.log(`📥 Response status for chapter ${chapterId}:`, response.status);

        const data = await response.json();
        console.log(`📄 Data for chapter ${chapterId}:`, data);

        if (data.status === 200 && data.data) {
            console.log(`✅ Successfully loaded chapter ${chapterId} with ${data.data.length} verses`);
            return {
                id: chapterId,
                number: chapterId,
                title: `Chapter ${chapterId}`,
                verses: data.data,
                verseCount: data.data.length - 1,
            };
        }

        console.warn(`⚠️ Invalid data for chapter ${chapterId}:`, data);
        return null;
    } catch (error) {
        console.error(`❌ Error fetching chapter ${chapterId}:`, error);
        console.error('Error details:', error.message);
        console.error(`Error fetching chapter ${chapterId}:`, error);
        return null;
    }
}

export async function getVerseById(chapterId, verseId, fetchFn = fetch) {
    try {
        const chapter = await getChapterById(chapterId, fetchFn);
        if (chapter && chapter.verses) {
            return chapter.verses.find(v => v.shlok_no === String(verseId));
        }
        return null;
    } catch (error) {
        console.error(`Error fetching verse ${chapterId}.${verseId}:`, error);
        return null;
    }
}
