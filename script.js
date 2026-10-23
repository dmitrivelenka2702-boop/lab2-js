// Початкові дані зберігаються в JavaScript.
const students = [
    {
        name: "Олена",
        group: "М-41",
        age: 20
    }
];

const addButton = document.getElementById("addButton");
const addForm = document.getElementById("addForm");
const tableBody = document.getElementById("tableBody");

// Функція рендерить усі дані з масиву students у таблицю.
function renderStudents() {
    tableBody.innerHTML = "";

    students.forEach(function(student) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const groupCell = document.createElement("td");
        groupCell.textContent = student.group;

        const ageCell = document.createElement("td");
        ageCell.textContent = student.age;

        row.appendChild(nameCell);
        row.appendChild(groupCell);
        row.appendChild(ageCell);

        tableBody.appendChild(row);
    });
}

// Показуємо форму додавання нового запису.
addButton.addEventListener("click", function() {
    addForm.classList.remove("hidden");
});

// Додаємо нові дані до масиву й повторно рендеримо таблицю.
addForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const group = document.getElementById("group").value.trim();
    const age = Number(document.getElementById("age").value);

    if (!name || !group || age <= 0) {
        return;
    }

    students.push({
        name: name,
        group: group,
        age: age
    });

    renderStudents();

    addForm.reset();
    addForm.classList.add("hidden");
});

// Початковий рендер таблиці.
renderStudents();
