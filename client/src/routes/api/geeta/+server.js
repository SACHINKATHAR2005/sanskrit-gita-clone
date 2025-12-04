export async function GET({ url }) {
    const chapter = url.searchParams.get('q');

    if (!chapter) {
        return new Response(JSON.stringify({ error: 'Missing chapter parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        console.log(`📡 Proxying request for chapter ${chapter}`);
        const apiUrl = `https://sanskrit.ie/api/geeta.php?q=${chapter}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(`✅ Successfully proxied chapter ${chapter}`);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (error) {
        console.error(`❌ Error proxying chapter ${chapter}:`, error);

        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
