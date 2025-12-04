const BASE_URL = typeof window === 'undefined' || window.location.hostname === 'localhost'
    ? '/api/geeta.php'
    : 'https://sanskrit.ie/api/geeta.php';

export async function getAllChapters(fetchFn = fetch) {
    try {
        const requests = [];
        for (let i = 1; i <= 18; i++) {
            requests.push(fetchFn(`${BASE_URL}?q=${i}`));
        }

        const responses = await Promise.all(requests);
        const dataPromises = responses.map(response => response.json());
        const chaptersData = await Promise.all(dataPromises);

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

        return chapters;
    } catch (error) {
        console.error('Error fetching all chapters:', error);
        return [];
    }
}

export async function getChapterById(chapterId, fetchFn = fetch) {
    try {
        const response = await fetchFn(`${BASE_URL}?q=${chapterId}`);
        const data = await response.json();

        if (data.status === 200 && data.data) {
            return {
                id: chapterId,
                number: chapterId,
                title: `Chapter ${chapterId}`,
                verses: data.data,
                verseCount: data.data.length - 1,
            };
        }

        return null;
    } catch (error) {
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
