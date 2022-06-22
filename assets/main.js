const welcome = () => {
    const inputValue = document.querySelector('input').value
    const generatedElemement = document.createElement('p');
    generatedElemement.innerHTML = '<p>Hello ${input}, Welcome to the Bootcamp';
    document.body.appendChild(generatedElemement);
}