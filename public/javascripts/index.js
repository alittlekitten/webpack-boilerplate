import puppy from '../images/puppy.jpg';
import kitten from '../images/kitten.jpg';
import '../sass/index.scss';


const renderMainpage = () => {
    const component = document.querySelector("body");
    console.log(component);
    component.innerHTML = `
        <h1>익스프레스</h1>
        <p>Welcome to Express</p>
        <img src="${puppy}">
        <img src=${kitten}>
        <script src="/../../dist/bundle.js"></script>
    `
}

const init = () => {
    renderMainpage(); 
}

init();