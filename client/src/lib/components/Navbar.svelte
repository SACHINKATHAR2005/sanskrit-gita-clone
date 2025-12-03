<script>
    import logo from "$lib/assets/logo.png";

    let openDropdown = null;

    function show(menu) {
        openDropdown = menu;
    }

    function hide() {
        openDropdown = null;
    }
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<nav class="navbar">
    <div class="navbar-container">
        <!-- Logo -->
        <a href="/" class="logo">
            <img src={logo} alt="Logo" class="logo-img" />
        </a>

        <!-- Navigation Links -->
        <div class="nav-links">
            <!-- Search -->
            <button class="nav-item nav-link search-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
            </button>

            <!-- AYURVEDA -->
            <div
                class="nav-item dropdown"
                on:mouseenter={() => show("ayurveda")}
                on:mouseleave={hide}
            >
                <span class="nav-link">AYURVEDA</span>

                {#if openDropdown === "ayurveda"}
                    <div class="dropdown-menu">
                        <a class="dropdown-item">Introduction</a>
                        <a class="dropdown-item">Timing</a>
                        <a class="dropdown-item">Food</a>
                    </div>
                {/if}
            </div>

            <!-- YOGASUTRAS -->
            <div
                class="nav-item dropdown"
                on:mouseenter={() => show("yogasutras")}
                on:mouseleave={hide}
            >
                <span class="nav-link">YOGASŪTRAS</span>

                {#if openDropdown === "yogasutras"}
                    <div class="dropdown-menu">
                        <a class="dropdown-item">Introduction</a>
                        <a class="dropdown-item">Obstacles</a>
                        <a class="dropdown-item">Practices</a>
                        <a class="dropdown-item">Yogāsana</a>
                        <a class="dropdown-item">Glossary</a>
                    </div>
                {/if}
            </div>

            <div class="nav-item">
                <span class="nav-link">BHAGAVAD GĪTĀ</span>
            </div>

            <!-- UPANISADS -->
            <div
                class="nav-item dropdown"
                on:mouseenter={() => show("upanisads")}
                on:mouseleave={hide}
            >
                <span class="nav-link">UPANIṢADS</span>

                {#if openDropdown === "upanisads"}
                    <div class="dropdown-menu">
                        <a class="dropdown-item">ĪŚOPANIṢAD</a>
                        <a class="dropdown-item">TAITTIRĪYOPANIṢAD</a>
                        <a class="dropdown-item">MĀṆḌŪKYOPANIṢAD</a>
                        <a class="dropdown-item">KENOPANIṢAD</a>
                        <a class="dropdown-item">KAṬHOPANIṢAD</a>
                        <a class="dropdown-item">AITAREYOPANIṢAD</a>
                        <a class="dropdown-item">MUṆḌAKOPANIṢAD</a>
                        <a class="dropdown-item">PRAŚNOPANIṢAD</a>
                    </div>
                {/if}
            </div>

            <!-- SANSKRIT -->
            <div
                class="nav-item dropdown"
                on:mouseenter={() => show("sanskrit")}
                on:mouseleave={hide}
            >
                <span class="nav-link">SANSKRIT</span>

                {#if openDropdown === "sanskrit"}
                    <div class="dropdown-menu">
                        <a class="dropdown-item">Devotional Songs</a>
                        <a class="dropdown-item">Grammar Songs</a>
                        <a class="dropdown-item">Fun Songs</a>
                        <a class="dropdown-item">Script Songs</a>
                    </div>
                {/if}
            </div>

            <div class="nav-item">
                <span class="nav-link">CONTACT US</span>
            </div>
        </div>
    </div>
</nav>

<style>
    .navbar {
        background-color: #f5f5f0;
        border-bottom: 1px solid #e0e0d8;
        height: 150px;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 200;
    }

    .navbar-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-img {
        height: 80px;
        margin-left: 20px;
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 2.5rem;
        margin-right: 2rem;
    }

    .nav-item {
        position: relative;
    }

    .nav-link,
    .search-btn {
        background: none;
        border: none;
        font-family: "Marcellus", serif;
        font-size: 20px;
        letter-spacing: 0.5px;
        color: #2d2d2d;
        cursor: pointer;
        padding: 10px 0;
        transition: color 0.25s ease;
        position: relative;
    }

    .nav-link::after,
    .search-btn::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: #2d2d2d;
        transition: width 0.6s ease;
    }

    .nav-link:hover,
    .search-btn:hover {
        color: #e8c89f;
    }

    .nav-link:hover::after,
    .search-btn:hover::after {
        width: 100%;
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 6px;
        background: white;
        min-width: 190px;
        border: 1px solid #e8e6dd;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 4px 0;
        z-index: 400;
    }

    .dropdown-item {
        font-family: "Marcellus", serif;
        padding: 10px 18px;
        font-size: 17px;
        color: #2e2e2e;
        text-decoration: none;
        display: block;
        white-space: nowrap;
        transition:
            background 0.2s ease,
            color 0.2s ease;
    }

    .dropdown-item:hover {
        background-color: #f5f5f0;
        color: #e8c89f;
    }

    .dropdown-item::after {
        display: none !important;
        content: none !important;
    }

    @media (max-width: 768px) {
        .navbar {
            height: 100px;
        }
        .logo-img {
            height: 55px;
        }
        .nav-links {
            display: none;
        }
    }
</style>
