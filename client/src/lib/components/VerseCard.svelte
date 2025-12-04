<script>
    import { browser } from "$app/environment";

    let { verse, chapterId } = $props();

    function stripHtml(html) {
        if (!browser) {
            return html
                .replace(/<[^>]*>/g, "")
                .replace(/&nbsp;/g, " ")
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">");
        }
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    function getCleanLyrics(lyrics) {
        if (!lyrics) return "";
        return stripHtml(lyrics).replace(/\s+/g, " ").trim();
    }

    let showTranslation = $state(false);
    let audioUrl = $derived(
        verse.music ? `https://sanskrit.ie/${verse.music}` : null,
    );
</script>

<div class="verse-card">
    <div class="verse-header">
        <h2 class="verse-number">Verse {verse.shlok_no}</h2>
        {#if audioUrl}
            <button
                class="audio-btn"
                aria-label="Play verse audio"
                onclick={() => {
                    const audio = new Audio(audioUrl);
                    audio.play();
                }}
            >
                🔊
            </button>
        {/if}
    </div>

    <div class="verse-content">
        <div class="sanskrit-text">
            {getCleanLyrics(verse.lyrics)}
        </div>

        <button
            class="toggle-translation"
            onclick={() => (showTranslation = !showTranslation)}
        >
            {showTranslation ? "Hide" : "Show"} Translation
        </button>

        {#if showTranslation}
            <div class="translation">
                <p>{getCleanLyrics(verse.lyrics)}</p>
            </div>
        {/if}
    </div>
</div>

<style>
    .verse-card {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
    }

    .verse-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    .verse-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #8ac7b5;
    }

    .verse-number {
        font-family: "Marcellus SC", serif;
        font-size: 1.5rem;
        font-weight: 500;
        color: #4a7153;
        margin: 0;
    }

    .audio-btn {
        background: #8ac7b5;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.5rem;
        transition: all 0.3s ease;
    }

    .audio-btn:hover {
        background: #a7e3d4;
        transform: scale(1.1);
    }

    .verse-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .sanskrit-text {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.3rem;
        line-height: 1.8;
        color: #2c3e50;
        font-weight: 400;
    }

    .toggle-translation {
        background: #4a7153;
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-family: "Marcellus", serif;
        font-size: 1rem;
        transition: background 0.3s ease;
        align-self: flex-start;
    }

    .toggle-translation:hover {
        background: #5a8663;
    }

    .translation {
        background: rgba(138, 199, 181, 0.1);
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 4px solid #8ac7b5;
    }

    .translation p {
        font-family: "Marcellus", serif;
        font-size: 1.1rem;
        line-height: 1.7;
        color: #34495e;
        margin: 0;
    }

    @media (max-width: 768px) {
        .verse-card {
            padding: 1.5rem;
        }

        .verse-number {
            font-size: 1.2rem;
        }

        .sanskrit-text {
            font-size: 1.1rem;
        }

        .audio-btn {
            font-size: 1.2rem;
            padding: 0.4rem 0.8rem;
        }

        .translation p {
            font-size: 1rem;
        }
    }
</style>
