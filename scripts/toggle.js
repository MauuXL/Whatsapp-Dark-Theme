// Verificar tema en localStorage o iniciar en 1
let lightThemeOn =
    parseInt(localStorage.getItem("whatsapp-dark-theme-light")) || 1;

// Función para aplicar el tema según el valor actual
function statusDarkThemeOn() {
    document.body.classList.remove(
        "light-theme",
        "dark-theme",
        "dark",
        "pallete"
    );

    switch (lightThemeOn) {
        case 1:
            // Ninguna clase adicional (tema base)
            break;
        case 2:
            document.body.classList.add("dark");
            break;
        case 3:
            document.body.classList.add("palette", "light-theme");
            break;
        case 4:
            document.body.classList.add("palette", "dark-theme", "dark");
            break;
    }
}

// Función para alternar el tema al hacer click
function toggleTheme() {
    lightThemeOn = lightThemeOn === 4 ? 1 : lightThemeOn + 1;
    localStorage.setItem("whatsapp-dark-theme-light", lightThemeOn);
    statusDarkThemeOn();
}

// Ejecutar función repetidamente por un minuto
let duration = setInterval(statusDarkThemeOn, 500);
setTimeout(() => clearInterval(duration), 60000);
statusDarkThemeOn();

// =====================
// Botón toggle
// =====================
function addToggleButton() {
    if (document.getElementById("toggleButton")) return;

    let referencia = document.querySelector('[data-icon="settings-refreshed"]');
    if (!referencia) return setTimeout(addToggleButton, 1000);

    function subirNiveles(elemento, niveles) {
        let actual = elemento;
        for (let i = 0; i < niveles; i++) {
            if (!actual || !actual.parentElement) break;
            actual = actual.parentElement;
        }
        return actual;
    }

    let ubicacion = subirNiveles(referencia, 6);
    if (!ubicacion) return setTimeout(addToggleButton, 1000);

    let toggleButton = document.createElement("div");
    toggleButton.id = "toggleButton";
    toggleButton.classList.add(
        "x1c4vz4f",
        "xs83m0k",
        "xdl72j9",
        "x1g77sc7",
        "x78zum5",
        "xozqiw3",
        "x1oa3qoh",
        "x12fk4p8",
        "xeuugli",
        "x2lwn1j",
        "x1nhvcw1",
        "x1q0g3np",
        "x1cy8zhl",
        "x100vrsf",
        "x1vqgdyp",
        "xdxvlk3",
        "x1fglp",
        "x1rp6h8o",
        "xg6i1s1",
        "x1277o0a",
        "x13i9f1t",
        "xr9ek0c",
        "xjpr12u",
        "xw2npq5",
        "xzs022t"
    );

    toggleButton.innerHTML = `
        <button aria-pressed="false" aria-label="Tema" tabindex="-1"
            data-navbar-item="true" data-navbar-item-selected="false"
            class="xjb2p0i xk390pu x1heor9g x1ypdohk xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m xtnn1bt x9v5kkp xmw7ebm xrdum7p xh8yej3 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha"
            data-navbar-item-index="4">
            <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 xh8yej3">
                <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 x1n2onr6" style="flex-grow: 1">
                    <div>
                        <span aria-hidden="true" data-icon="settings-refreshed">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                class="theme-toggle-icon x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4 xvy4d1p xxk0z11"
                                height="1em" width="1em" fill="currentColor">
                                <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </button>
    `;

    toggleButton.addEventListener("click", toggleTheme);
    ubicacion.insertBefore(toggleButton, ubicacion.firstChild);
}
