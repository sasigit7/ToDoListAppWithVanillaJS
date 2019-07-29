// 1. Enter the text in the input field. 
// 2. Click the Add item, So that it captures the text. 
// 3. Display the text right below the text field. 
   // A. Create the element.
   // B. Add the userText to the element. 
   // C. Add the element as child to UL. 
// 4. Add and Display the Delete option right next to the captured text. 
// 5. When Delete button is clicked, it should remove the corresponding item. 
// 6. After the item is added, clear the text field. 
// 7. Auto focus after add. 
// 8. Enable Enter-to-submit functionality. 

const form = document.querySelector("form.add"); 
//const addButton = document.querySelector("#addButton");
const itemToAdd = document.querySelector("#itemToAdd"); 
const ul = document.querySelector(".todo");

//addButton.addEventListener("click", function() {
    // console.log("I was clicked!", itemToAdd.value);
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    if(itemToAdd.value) {
        const newItem = createItem(itemToAdd.value);
        ul.appendChild(newItem); // Adds the item value
        itemToAdd.value = ""; // Clears the text value 
        itemToAdd.focus(); // Auto focus functionality enabled.
    }
});

function createItem (val) {
    const item = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.textContent = val;
    delBtn.textContent = "Delete";
    delBtn.classList.add("btn-link"); 

    item.appendChild(span);
    item.appendChild(delBtn);

    delBtn.addEventListener("click", function() {
        item.parentNode.removeChild(item); 
    });

    return item;
}


