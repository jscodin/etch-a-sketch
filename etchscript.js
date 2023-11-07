function createGrid() {

  // allow user to input size of grid
  const rows = prompt("Enter no. of rows: (max: 100)");
  const columns = prompt("Enter no. of columns: (max: 100)");

  // check user input are numbers
  if ((isNaN(rows)) || (isNaN(columns))) {
    alert("Only positive numbers are accepted");
  } else {
    console.log(typeof rows);
    console.log(typeof columns);
  }

  // convert output of prompt to numbers
  const rowsInt = parseInt(rows);
  const columnsInt = parseInt(columns);

  console.log(typeof rowsInt);
  console.log(typeof columnsInt);

  // check if size of grid is permitted
  if (rowsInt <= 0 || rowsInt > 100 || columnsInt <= 0 || columnsInt > 100) {
    alert("Size of grid should be between 1 and 100");
    return
  }

  // clear the grid before generating the new one
  const grid = document.querySelector('.grid');
  grid.textContent = "";

  // this creates the grids dynamically using the user input
  grid.style.gridTemplateRows = `repeat(${rowsInt}, minmax(0px, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${columnsInt}, minmax(0px, 1fr)`;

  for (let i = 0; i < rowsInt * columnsInt; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

  }

}

const btn = document.querySelector(".btn");
btn.addEventListener('click', createGrid);


