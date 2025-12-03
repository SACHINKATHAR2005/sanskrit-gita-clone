<script>
    import gitaBanner from "$lib/assets/gita_banner.png";
    import gitaOpen from "$lib/assets/gita_open.png";
    import pic1 from "$lib/assets/pic1.jpg";
    import ChaptersGrid from "$lib/components/ChaptersGrid.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <!-- Correct font matching the target -->
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="page-wrapper">
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

        <div class="absolute left-1/2 -translate-x-1/2 z-30" style="top: 430px">
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
            GITA CHAPTERS
        </h2>
        <div class="w-[260px] h-[2px] bg-[#B5302A] mx-auto mt-1"></div>
    </div>
</div>

<ChaptersGrid />
<Footer />

<style>
    .page-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        background-image: url('$lib/assets/pic1.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

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
