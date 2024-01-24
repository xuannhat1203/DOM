let arrays = ["Nguyễn Văn A", "Vũ THị B", "Nguyễn Minh C"];
let ul = document.getElementById("ul");
for (let i = 0; i < arrays.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = arrays[i];
  ul.appendChild(li);
}