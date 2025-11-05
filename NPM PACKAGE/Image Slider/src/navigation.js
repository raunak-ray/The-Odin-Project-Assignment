// navigation.js
export function createNavigationDots(navigationContainer, count) {
  const dots = [];

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.dataset.index = i;
    navigationContainer.append(dot);
    dots.push(dot);
  }

  return dots;
}
