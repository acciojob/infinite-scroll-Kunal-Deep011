//your code here!
// Get the list element
const list = document.getElementById("infi-list");

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  addListItem(i);
}

// Function to add a list item
function addListItem(index) {
  const listItem = document.createElement("li");
  listItem.textContent = `List Item ${index}`;
  list.appendChild(listItem);
}

// Event listener to check if the user has reached the end of the list
window.addEventListener("scroll", function() {
  const listHeight = list.offsetHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  if (scrollTop + windowHeight >= listHeight) {
    // User has reached the end of the list, add 2 more list items
    const currentItemCount = list.children.length;
    for (let i = currentItemCount + 1; i <= currentItemCount + 2; i++) {
      addListItem(i);
    }
  }
});

