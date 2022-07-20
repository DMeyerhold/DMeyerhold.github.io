window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.toggle_container');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('toggle_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('toggle_active');
            menu.classList.toggle('menu_active');
        })
    })
})

document.addEventListener('orientationchange', () => {
    document.documentElement.style.height = `initial`;
    setTimeout(() => {
      document.documentElement.style.height = `100%`;
        setTimeout(() => {
          // this line prevents the content
          // from hiding behind the address bar
          window.scrollTo(0, 1);
        }, 500);
    }, 500);
  });