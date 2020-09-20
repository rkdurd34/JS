const list = [
    {titel : 'react1'},
    {title : 'typescript'},
    {title:'typescript'}
]
const rootElement = document.getElementById('root')
function app(items){
    rootElement.innerHTML = `
    <ul>
        ${items.map((item)=> `<li>${item.title}</li>`).join("")}
    </ul>
    `;

}

app(list)
