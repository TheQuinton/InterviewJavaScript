// Count the table cells of multiple tables and return the largest table

const countTableCells = () => {
  const tables = document.getElementsByTagName('table');
  let count = 0;
  for (let i=0; i < tables.length; i++){
    count = tables[i].querySelectorAll('td').length > count ? tables[i].querySelectorAll('td').length : count;
  }
  return count;
}
