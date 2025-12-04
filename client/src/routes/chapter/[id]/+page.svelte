<script>
    import { browser } from "$app/environment";
    import gitaBanner from "$lib/assets/gita_banner.png";
    import gitaOpen from "$lib/assets/gita_open.png";
    import Footer from "$lib/components/Footer.svelte";

    let { data } = $props();
    let chapter = $derived(data.chapter);

    let selectedVerse = $state(null);
    let showModal = $state(false);
    let currentAudio = $state(null);
    let isPlaying = $state(false);
    let isFullscreen = $state(false);

    function openVerseModal(verse) {
        selectedVerse = verse;
        showModal = true;
        isPlaying = false;
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
    }

    function closeModal() {
        showModal = false;
        selectedVerse = null;
        isPlaying = false;
        isFullscreen = false;
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
    }

    function toggleFullscreen() {
        isFullscreen = !isFullscreen;
    }

    function stripHtml(html) {
        if (!browser) {
            return (
                html
                    ?.replace(/<[^>]*>/g, "")
                    .replace(/&nbsp;/g, " ")
                    .replace(/&amp;/g, "&")
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">") || ""
            );
        }
        if (typeof document !== "undefined") {
            const tmp = document.createElement("DIV");
            tmp.innerHTML = html || "";
            return tmp.textContent || tmp.innerText || "";
        }
        return html || "";
    }

    function getCleanLyrics(lyrics) {
        if (!lyrics) return "";
        return stripHtml(lyrics).replace(/\s+/g, " ").trim();
    }

    function toggleAudio(audioPath) {
        if (!browser || !audioPath) return;

        if (isPlaying && currentAudio) {
            currentAudio.pause();
            isPlaying = false;
        } else {
            if (currentAudio) {
                currentAudio.pause();
            }
            currentAudio = new Audio(`https://sanskrit.ie/${audioPath}`);
            currentAudio.play();
            isPlaying = true;

            currentAudio.onended = () => {
                isPlaying = false;
            };

            currentAudio.onerror = () => {
                isPlaying = false;
            };
        }
    }
</script>

<svelte:head>
    <title>Chapter {chapter?.number || "Loading"} - Bhagavad Gita</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap"
        rel="stylesheet"
    />
</svelte:head>

{#if chapter}
    <div class="relative w-full overflow-hidden">
        <div class="relative w-full h-[620px]">
            <div
                class="absolute top-0 left-0 right-0 z-20 bg-white/55 h-[120px] border-t border-[#C9D6C0]/40"
            >
                <div class="flex flex-col items-center justify-center h-full">
                    <div class="w-[200px] h-[1px] bg-[#84765B] mb-4"></div>

                    <h1
                        class="text-[125px] tracking-[6px] text-[#3A4635] font-['Cormorant_Garamond',serif] font-light leading-none"
                        style="text-shadow: 0 2px 3px rgba(0,0,0,0.12); letter-spacing: 8px;"
                    >
                        BHAGAVAD GITA
                    </h1>
                </div>
            </div>

            <div class="absolute top-[60px] left-0 right-0 h-[480px] z-10">
                <div class="relative w-full h-full">
                    <img
                        src={gitaBanner}
                        alt="Bhagavad Gita Banner"
                        class="w-full h-full object-cover object-center"
                    />
                    <div class="absolute inset-0 bg-white/20"></div>
                </div>
            </div>

            <div
                class="absolute left-1/2 -translate-x-1/2 z-30"
                style="top: 430px"
            >
                <img
                    src={gitaOpen}
                    alt="Open Gita Book"
                    class="w-[300px] h-auto"
                    style="filter: drop-shadow(0 12px 22px rgba(0,0,0,0.35));"
                />
            </div>
        </div>

        <div class="relative w-full py-10 text-center mt-4">
            <h2
                class="text-[38px] tracking-[10px] text-[#B5302A] font-['Cormorant_Garamond',serif] font-normal"
            >
                CHAPTER {chapter.number}
            </h2>
            <div class="w-[260px] h-[2px] bg-[#B5302A] mx-auto mt-1"></div>
        </div>
    </div>

    <section class="chapter-section">
        <div class="back-button">
            <a href="/">&lt; Back</a>
        </div>

        <div class="verse-header">
            <div class="line"></div>
            <span class="verse-text">Verse</span>
            <div class="line"></div>
        </div>

        <div class="verses-grid">
            <button
                class="verse-tile whole-chapter"
                onclick={() => openVerseModal(chapter.verses[0])}
            >
                <span class="whole-text">Whole<br />Chapter</span>
                <div class="play-icon">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </button>

            {#each chapter.verses as verse}
                {#if verse.shlok_no !== "0" && verse.shlok_no !== "99"}
                    <button
                        class="verse-tile"
                        onclick={() => openVerseModal(verse)}
                    >
                        <span class="verse-number">{verse.shlok_no}</span>
                        <div class="play-icon">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </button>
                {/if}
            {/each}
        </div>
    </section>

    <Footer />

    {#if showModal && selectedVerse}
        <div class="modal-overlay" onclick={closeModal}>
            <div
                class="modal-content {isFullscreen ? 'fullscreen' : ''}"
                onclick={(e) => e.stopPropagation()}
            >
                <button
                    class="expand-close-btn"
                    onclick={isFullscreen ? closeModal : toggleFullscreen}
                >
                    {#if isFullscreen}
                        ✕
                    {:else}
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                            />
                        </svg>
                    {/if}
                </button>

                <div class="modal-scroll-content">
                    <div class="modal-header">
                        <h2 class="verse-number-title">
                            {selectedVerse.shlok_no === "0"
                                ? "I"
                                : selectedVerse.shlok_no}
                        </h2>
                        <h3 class="verse-subtitle">
                            {selectedVerse.shlok_no === "0"
                                ? "Introduction"
                                : "Arjuna's despair"}
                        </h3>
                    </div>

                    <div class="modal-body">
                        <div class="sanskrit-text">
                            {@html selectedVerse.lyrics}
                        </div>
                    </div>
                </div>

                {#if selectedVerse.music}
                    <div class="audio-controls-sticky">
                        <audio
                            controls
                            src="https://sanskrit.ie/{selectedVerse.music}"
                        >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
{:else}
    <div class="loading">
        <h1>Loading...</h1>
    </div>
{/if}

<style>
    .chapter-section {
        min-height: 100vh;
        padding: 1rem 1rem 2rem;
        max-width: 1400px;
        margin: 0 auto;
    }

    .back-button {
        margin-bottom: 2rem;
        padding-left: 0.5rem;
    }

    .back-button a {
        color: #c8335d;
        text-decoration: none;
        font-family: "Marcellus", serif;
        font-size: 1.1rem;
        font-weight: 500;
        display: inline-block;
        transition: color 0.3s ease;
    }

    .back-button a:hover {
        color: #a02848;
    }

    .verse-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 2.5rem;
        padding: 0 1rem;
    }

    .verse-header .line {
        flex: 1;
        height: 1px;
        background: #c8335d;
        max-width: 400px;
    }

    .verse-header .verse-text {
        font-family: "Marcellus", serif;
        font-size: 1.2rem;
        color: #c8335d;
        font-weight: 500;
        white-space: nowrap;
    }

    .verses-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem 1rem;
        justify-items: center;
        padding: 0;
        width: 100%;
    }

    .verse-tile {
        width: 150px;
        height: 210px;
        background: url("/src/lib/assets/sletter.png") center/contain no-repeat;
        border: none;
        cursor: pointer;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
        padding: 0;
        background-color: transparent;
    }

    .verse-tile:hover {
        transform: scale(1.05);
    }

    .verse-tile.whole-chapter {
        background: url("/src/lib/assets/sletter.png") center/contain no-repeat;
    }

    .whole-text {
        font-family: "Marcellus SC", serif;
        font-size: 1rem;
        color: #2c3e50;
        font-weight: 600;
        text-align: center;
        line-height: 1.3;
    }

    .verse-number {
        font-family: "Cormorant Garamond", serif;
        font-size: 3rem;
        color: #2c2c2c;
        font-weight: 500;
    }

    .play-icon {
        color: #8ac7b5;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition:
            transform 0.3s ease,
            color 0.3s ease;
    }

    .play-icon svg {
        width: 28px;
        height: 28px;
    }

    .verse-tile:hover .play-icon {
        transform: scale(1.15);
        color: #4a7153;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 1rem;
    }

    .modal-content {
        background: #f4e8d8;
        border-radius: 15px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        height: 90vh;
        position: relative;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .modal-content.fullscreen {
        max-width: 100%;
        max-height: 100vh;
        height: 100vh;
        width: 100vw;
        border-radius: 0;
    }

    .modal-scroll-content {
        flex: 1;
        overflow-y: auto;
        padding: 3.5rem 2rem 1rem;
    }

    .expand-close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: #c8335d;
        color: white;
        border: none;
        border-radius: 8px;
        width: 40px;
        height: 40px;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 10;
    }

    .expand-close-btn:hover {
        background: #a02848;
        transform: scale(1.05);
    }

    .expand-close-btn svg {
        width: 20px;
        height: 20px;
    }

    .modal-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .verse-number-title {
        font-family: "Marcellus SC", serif;
        font-size: 2.5rem;
        font-weight: 400;
        color: #2c2c2c;
        margin: 0 0 0.5rem 0;
    }

    .verse-subtitle {
        font-family: "Marcellus", serif;
        font-size: 1.3rem;
        font-weight: 400;
        color: #2c2c2c;
        margin: 0;
    }

    .audio-controls-sticky {
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
        background: #f4e8d8;
        padding: 1rem 1.5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .audio-controls-sticky audio {
        width: 100%;
        max-width: 600px;
        height: 40px;
        border-radius: 8px;
    }

    .audio-controls-sticky audio::-webkit-media-controls-panel {
        background-color: #e8dcc8;
    }

    .modal-body {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.15rem;
        line-height: 1.8;
        color: #2c2c2c;
        text-align: center;
        padding: 0 1rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .sanskrit-text {
        text-align: center;
    }

    .sanskrit-text :global(p) {
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .sanskrit-text :global(strong) {
        color: #2c2c2c;
        font-weight: 600;
    }

    .loading {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading h1 {
        font-family: "Marcellus", serif;
        font-size: 2rem;
        color: #4a7153;
    }

    /* Desktop enhancements */
    @media (min-width: 769px) {
        .chapter-section {
            padding: 4rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .verse-header .verse-text {
            font-size: 1.4rem;
        }

        .verse-header {
            gap: 2rem;
        }

        .verse-header .verse-text {
            font-size: 1.4rem;
        }

        .verses-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 3rem 2rem;
            justify-items: center;
        }

        .verse-tile {
            width: 200px;
            height: 280px;
            padding: 3rem 2rem;
        }

        .verse-number {
            font-size: 4rem;
        }

        .play-icon {
            width: 50px;
            height: 50px;
        }

        .play-icon svg {
            width: 32px;
            height: 32px;
        }

        .back-button a {
            font-size: 1.2rem;
        }

        .modal-overlay {
            padding: 2rem;
        }

        .modal-content {
            border-radius: 20px;
        }

        .modal-scroll-content {
            padding: 4rem 3rem 2rem;
        }

        .expand-close-btn {
            width: 45px;
            height: 45px;
            font-size: 1.6rem;
        }

        .expand-close-btn svg {
            width: 24px;
            height: 24px;
        }

        .verse-number-title {
            font-size: 3rem;
        }

        .verse-subtitle {
            font-size: 1.5rem;
        }

        .modal-body {
            font-size: 1.25rem;
            line-height: 2;
            padding: 0 3rem;
            max-width: 900px;
        }

        .audio-controls-sticky {
            padding: 1.5rem 2rem;
        }
    }

    /* Mobile hero section adjustments */
    @media (max-width: 768px) {
        h1 {
            font-size: 54px !important;
            letter-spacing: 3px !important;
        }

        h2 {
            font-size: 24px !important;
            letter-spacing: 4px !important;
        }

        .absolute.left-1\/2 img {
            width: 160px !important;
        }
    }
</style>
