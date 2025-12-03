<script>
    const chapters = Array.from({ length: 18 }, (_, i) => ({ id: i + 1 }));
</script>

<section class="chapters-bg">
    <div class="chapters-grid">
        {#each chapters as chapter}
            <button class="chapter-tile" aria-label="Chapter {chapter.id}">
                <div class="tile-img"></div>

                <div class="band">
                    <span>{chapter.id}</span>
                </div>
            </button>
        {/each}
    </div>
</section>

<style>
    .chapters-bg {
        background: url("/src/lib/assets/pic1.jpg") center/cover fixed;
        padding: 5rem 0;
    }

    .chapters-grid {
        max-width: 1180px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 6rem 5.5rem;
        justify-items: center;
    }

    .chapter-tile {
        width: 165px;
        height: 165px;
        rotate: 45deg;
        border-radius: 18px;
        background: #00000005;
        padding: 0;
        border: none;
        cursor: pointer;

        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
        position: relative;
        overflow: hidden;
        transition: transform 0.35s ease;
    }

    .chapter-tile:hover {
        transform: scale(1.06);
    }

    .tile-img {
        position: absolute;
        inset: 0;
        background: url("/src/lib/assets/gita_book.jpg") center/cover;
        rotate: -45deg;
        scale: 1.42;
    }

    .band {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);

        width: 130%;
        height: 40px;
        background: rgba(0, 0, 0, 0.52);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .band span {
        font-size: 28px;
        font-weight: 600;
        color: #ffffff;
        font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
    }

    @media (max-width: 1024px) {
        .band {
            height: 34px;
        }
        .band span {
            font-size: 24px;
        }
    }

    @media (max-width: 768px) {
        .band {
            height: 30px;
        }
        .band span {
            font-size: 20px;
        }
    }

    @media (max-width: 768px) {
        .chapters-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem 2rem;
        }

        .chapter-tile {
            width: 120px;
            height: 120px;
        }

        .band {
            height: 30px;
        }

        .band span {
            font-size: 22px;
        }
    }

    @media (max-width: 480px) {
        .chapters-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }

        .chapter-tile {
            width: 100px;
            height: 100px;
        }
    }
</style>
