let menuItems = [
  {
    title: "BRAND",
  },
  {
    title: "+12345678",
  },
  {
    title: "Services",
  },
  {
    title: "Products",
  },
  {
    title: "Team",
  },
  {
    title: "Policy",
  },
  {
    title: "Contacts",
  },
];

const checkVisible = (items) => {
  const characterWidth = 12;
  let itemsWidth = 0;
  // hw1:
  // characterWidth.forEach(items) => {
  //   let currentItemWidth = items[i].title.length * characterWidth;
  //   if (itemsWidth + currentItemWidth >= innerWidth) {
  //     i--;
  //     return i;
  // }
  for (let i = 0; i < items.length; i++) {
    let currentItemWidth = items[i].title.length * characterWidth;
    if (itemsWidth + currentItemWidth >= innerWidth) {
      i--;
      return i;
    }
    itemsWidth += currentItemWidth;
  }
  return items.length - 1;
};
const renderNavbar = (navWrapperSelector, items) => {
  let wrapper = document.querySelector(navWrapperSelector);
  let htmlItems = ``;
  let visibleItems = checkVisible(menuItems);
  for (let i = 0; i <= visibleItems; i++) {
    htmlItems += `<li><a href="">${items[i].title}</a></li>`;
  }
  let html = `
        <nav class="navbar">
        <ul>
            ${htmlItems}
        </ul>
        </nav>
    `;
  wrapper.innerHTML = html;
};
renderNavbar(".navbar-wrapper", menuItems);
checkVisible(menuItems);

window.onresize = () => {
  renderNavbar(".navbar-wrapper", menuItems);
};
