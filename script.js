const flexContainer = document.getElementById("demo-flex");
const flexDirectionSelect = document.getElementById("flex-direction");
const justifyContentSelect = document.getElementById("justify-content");
const alignItemsSelect = document.getElementById("align-items");
const flexWrapSelect = document.getElementById("flex-wrap");
const cssCodeDisplay = document.getElementById("css-code");

function updateCSSCode() {
  cssCodeDisplay.textContent = `.flex-container {
    display: flex;
    flex-direction: ${flexDirectionSelect.value};
    justify-content: ${justifyContentSelect.value};
    align-items: ${alignItemsSelect.value};
    flex-wrap: ${flexWrapSelect.value};
}`;
}

function applyChanges() {
  flexContainer.style.flexDirection = flexDirectionSelect.value;
  flexContainer.style.justifyContent = justifyContentSelect.value;
  flexContainer.style.alignItems = alignItemsSelect.value;
  flexContainer.style.flexWrap = flexWrapSelect.value;

  updateCSSCode();
}

flexDirectionSelect.addEventListener("change", applyChanges);
justifyContentSelect.addEventListener("change", applyChanges);
alignItemsSelect.addEventListener("change", applyChanges);
flexWrapSelect.addEventListener("change", applyChanges);

applyChanges();

const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const resizeNote = document.querySelector(".resize-note");
    if (resizeNote) {
      resizeNote.style.opacity = "1";
      setTimeout(() => {
        resizeNote.style.opacity = "0.6";
      }, 2000);
    }
  }, 500);
});

function createNewItem() {
  if (flexContainer.children.length >= 8) return;

  const newItem = document.createElement("div");
  newItem.className = "flex-item";
  newItem.textContent = flexContainer.children.length + 1;

  newItem.style.transform = "scale(0)";
  flexContainer.appendChild(newItem);

  setTimeout(() => {
    newItem.style.transform = "scale(1)";
  }, 50);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "n") {
    createNewItem();
  }
});

console.log(
  "¡Bienvenido a la demo de Flexbox! Experimenta con los controles para ver cómo funciona Flexbox en la práctica."
);
console.log(
  'Presiona la tecla "n" para agregar un nuevo elemento al contenedor flex.'
);
