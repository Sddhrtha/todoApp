var itemNo = 0;

const addListItem = (todoTask) => {
    const id = "item-" + itemNo;
    const node = document.createElement("div");
    node.classList.add("list-item");
    node.setAttribute("id",id);
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.classList.add("list-item-checkbox");
    checkBox.addEventListener('click',() => {
        checkBox.checked = true;

        window.setTimeout(() => { document.getElementById(id).remove() },150);
        itemNo--;
    })
    checkBox.style.cursor = "pointer";
    node.appendChild(checkBox);
    const textBox = document.createElement("input");
    textBox.setAttribute("type","textbox");
    textBox.setAttribute("value","");
    textBox.classList.add('textbox');
    textBox.setAttribute("id","list-item-textbox-" + itemNo);
    node.appendChild(textBox);
    textBox.addEventListener('keyup',(event) => {

        if (event.keyCode === 13) {
            event.preventDefault();
            if (textBox.value === "") {
                alert("Please enter task.");
                textBox.focus();
            }
            var listItemText = document.createElement("p");
            listItemText.innerText = textBox.value;
            listItemText.classList.add("list-item-text");
            textBox.style.display = "none";
            var listItemDiv = document.getElementById(id);
            listItemDiv.appendChild(listItemText);
            listItemDiv.style.backgroundColor = "white";
            listItemDiv.style.borderRadius = "10px";
            listItemDiv.style.border = "1px solid black";
            listItemDiv.style.boxShadow = "3px 3px gray";
            listItemText.addEventListener('click',() => {
                textBox.style.display = "block";
                textBox.focus();
                listItemText.style.display = "none";
            })
        }

        if (event.keyCode === 27) {
            document.getElementById(id).remove();
        }
    })

    const list = document.getElementById("to-do-list");
    list.appendChild(node);
    itemNo++;
    textBox.focus();
}

document.getElementById("add-button").style.cursor = "pointer";
document.getElementById("add-button").addEventListener('click',() => { if (itemNo < 8) addListItem("List Item") });

