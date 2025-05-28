// Crear contenedor de tooltip
let popTooltip = document.createElement("div");
// Funcion que verifica las cordenadas del toggleButton para darselas al tooltip
function positionTooltip() {
    const rect = toggleButton.getBoundingClientRect();
    const tooltip = document.getElementById("wa-popovers-bucket");
    const containerRect = tooltip.getBoundingClientRect();
    const offsetTop = rect.top - containerRect.top;
    const offsetLeft = rect.right - containerRect.left;
    // Creaciond el tooltip
    popTooltip.style.position = "absolute";
    popTooltip.style.top = `${offsetTop + rect.height / 2}px`;
    popTooltip.style.left = `${offsetLeft + 8}px`;
    popTooltip.style.transform = "translateY(-50%)";
    popTooltip.style.zIndex = "var(--layer-10)";
    popTooltip.setAttribute("data-animate-dropdown-item", "true");
    popTooltip.classList.add("xixxii4", "x14g40p9", "x1al4vs7");
    popTooltip.style.transformOrigin = "left center";
    popTooltip.style.opacity = "1";
    popTooltip.innerHTML = `
        <div class="x10l6tqk x8knxv4" style="inset: -8px"></div>
        <div class="x1n2onr6">
          <div
            role="tooltip"
            class="x1rg5ohu x1dc814f x1nxh6w3 xjafh1k x2b8uid xlyipyv x7opvkv xj5tmjb xhw592a xwihvcr x7wuybg xb9tvrk x1swvt13 x1pi30zi x1y1aw1k xwib8y2"
          >
            Temas
          </div>
        </div>`;
}

function addPopTooltip() {
    const tooltip = document.getElementById("wa-popovers-bucket");
    toggleButton.addEventListener("mouseenter", () => {
        const tooltip = document.getElementById("wa-popovers-bucket");
        if (tooltip && !tooltip.contains(popTooltip)) {
            tooltip.appendChild(popTooltip);
            positionTooltip();
        }
    });

    toggleButton.addEventListener("mouseleave", () => {
        const tooltip = document.getElementById("wa-popovers-bucket");
        if (tooltip && tooltip.contains(popTooltip)) {
            tooltip.removeChild(popTooltip);
        }
    });
}
