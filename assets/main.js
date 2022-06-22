const welcome = () => {
    const inputValue =  document.querySelector("input").value;

    const generatedElement = document.createElement("p");
    const text = document.createTextNode(`Hello ${inputValue}, welcome to the bootcamp`);

    generatedElement.appendChild(text);
    document.body.appendChild(generatedElement);
}