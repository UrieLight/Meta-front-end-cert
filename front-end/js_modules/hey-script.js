export const informalGreeting = (person) => {
    console.log(`Hello, ${person}`);
}
export const formalGreeting = (person) => {
    console.log(`Good day, ${person}`);
}
const greeting = () => {
    console.log(`Howdy`);
}

export const userinput_handling1 = () => {
    let uname = prompt('Votre nom');
    var h1_name = document.createElement('h1')
    h1_name.innerText = uname
    document.body.appendChild(h1_name)
}

export const userinput_handling2_forms = () => {
    var h1_title = document.createElement('h2')
    h1_title.innerText = "Write your name in the input field below"

    var input_name = document.createElement('input')
    input_name.setAttribute('type', 'text')

    document.body.innerText = ''
    document.body.appendChild(h1_title)
    document.body.appendChild(input_name)

    input_name.addEventListener('change', function () {
        console.log(input_name.value)
    })
}

/** MDN Modules lessons */
export const name = 'square';

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return { length, x, y, color };
}

export default greeting;
