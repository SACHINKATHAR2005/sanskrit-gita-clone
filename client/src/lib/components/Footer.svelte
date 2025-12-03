<script>
    import gitaLogo from "$lib/assets/gita logo.png";
</script>

<footer class="footer">
    <div class="footer-content">
        <div class="connect-section">
            <h2 class="connect-title">Connect</h2>
            <div class="social-icons">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                    </svg>
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        />
                    </svg>
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                        />
                    </svg>
                </a>
                <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
                        />
                    </svg>
                </a>
            </div>
        </div>

        <div class="logo-section">
            <img src={gitaLogo} alt="Wellbeing Svasti" class="footer-logo" />
            <h3 class="wellbeing-title">WELLBEING~SVASTI</h3>
        </div>

        <div class="copyright-section">
            <p class="copyright-text">
                © 2025 Rutger Kortenhorst. All Rights Reserved | Design and
                Developed by <br />
                <a
                    href="https://burningdesire.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="developer-link"
                >
                    Burning Desire Inclusive
                </a>
            </p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: url("/src/lib/assets/footerimg.png") center/cover;
        padding: 2rem 1rem;
        position: relative;
    }

    .footer::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
    }

    .footer-content {
        position: relative;
        z-index: 2;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* gap: 1rem; */
    }

    .connect-section {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .connect-title {
        font-family: "Marcellus SC", serif;
        font-size: 2rem;
        font-weight: 400;
        color: #ffffff;
        margin: 0;
        letter-spacing: 1px;
    }

    .social-icons {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .social-icons a {
        width: 45px;
        height: 45px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        transition: all 0.3s ease;
        background: transparent;
    }

    .social-icons a:hover {
        background: #4a7153;
        border-color: #4a7153;
        color: #ffffff;
        transform: translateY(-3px);
    }

    .logo-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem 0;
    }

    .footer-logo {
        height: 120px;
        width: auto;
        object-fit: contain;
    }

    .wellbeing-title {
        font-family: "Marcellus SC", serif;
        font-size: 2.5rem;
        font-weight: 400;
        color: #d4c5a0;
        letter-spacing: 1px;
        text-align: center;
        margin-top: 0.5rem;
    }

    .copyright-section {
        text-align: center;
    }

    .copyright-text {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.5rem;
        color: #ffffff;
        margin: 0;
        letter-spacing: 0.5px;
        line-height: 1.6;
    }

    .developer-link {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.5rem;
        color: #8ac7b5;
        text-decoration: none;
        transition: color 0.3s ease;
        letter-spacing: 0.5px;
    }

    .developer-link:hover {
        color: #a7e3d4;
    }

    @media (max-width: 768px) {
        .footer {
            padding: 2rem 1.5rem;
        }

        .connect-section {
            flex-direction: column;
            gap: 1rem;
        }

        .connect-title {
            font-size: 1.8rem;
        }

        .wellbeing-title {
            font-size: 1.5rem;
        }

        .footer-logo {
            height: 120px;
        }

        .social-icons a {
            width: 40px;
            height: 40px;
        }

        .copyright-text,
        .developer-link {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .footer {
            padding: 1.5rem 1rem;
        }

        .connect-title {
            font-size: 1.5rem;
        }

        .wellbeing-title {
            font-size: 1.2rem;
        }

        .footer-logo {
            height: 100px;
        }

        .social-icons {
            gap: 0.75rem;
        }

        .social-icons a {
            width: 35px;
            height: 35px;
        }

        .copyright-text,
        .developer-link {
            font-size: 0.95rem;
        }
    }
</style>
