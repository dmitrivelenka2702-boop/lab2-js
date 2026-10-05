const addButton = document.getElementById('addButton');
const addForm = document.getElementById('addForm');
const tableBody = document.getElementById('tableBody');

addButton.addEventListener('click', function () {
    addForm.style.display = 'block';
});

addForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const group = document.getElementById('group').value;
    const age = document.getElementById('age').value;

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${group}</td>
        <td>${age}</td>
    `;

    tableBody.appendChild(newRow);

    addForm.reset();
    addForm.style.display = 'none';
});