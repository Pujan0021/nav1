
const items = document.querySelector('.navSlideContainer');
function showSideNavBar() {
    const items = document.querySelector('.navSlideContainer');
    const menu = document.querySelector('.fa-bars');
    menu.addEventListener('click', () => {
        items.style.display = 'flex';
        // navBar.style.display='none';
        console.log('button clicked ');

    })
}
showSideNavBar();
function hideSideNavBar() {
    const remove = document.querySelector('.fa-circle-xmark');
    remove.addEventListener('click', () => {
        items.style.display = 'none';
        // navBar.style.display='none';
        console.log('button clicked ')

    })
}
hideSideNavBar();