interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Create an array with the students
const studentsList: Student[] = [student1, student2];

// Function to render table
function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create table header
  thead.innerHTML = '<tr><th>First Name</th><th>Location</th></tr>';
  table.appendChild(thead);
