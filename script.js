const transactions = [
  { date: "2023-10-26", amount: 100, location: "Dubai" },
  { date: "2023-10-26", amount: 500, location: "Sharjah" },
  { date: "2023-10-27", amount: 1000, location: "Abu Dhabi" },
  { date: "2023-10-28", amount: 50, location: "Dubai" },
  { date: "2023-10-28", amount: 2000, location: "Ajman" },
];

const tableBody = document.getElementById("transactionTable").getElementsByTagName("tbody")[0];
const chartCanvas = document.getElementById("transactionChart").getContext("2d");
const filterInput = document.getElementById("filterInput");
const filterButton = document.getElementById("filterButton");

function displayTransactions(filteredTransactions) {
  tableBody.innerHTML = ""; // Clear existing rows
  filteredTransactions.forEach(transaction => {
    const row = tableBody.insertRow();
    const dateCell = row.insertCell();
    const amountCell = row.insertCell();
    const locationCell = row.insertCell();

    dateCell.textContent = transaction.date;
    amountCell.textContent = transaction.amount;
    locationCell.textContent = transaction.location;
  });

  createChart(filteredTransactions);
}

function filterTransactions(amount) {
  const filtered = transactions.filter(transaction => transaction.amount > amount);
  displayTransactions(filtered);
}

function createChart(data) {
  const amounts = data.map(transaction => transaction.amount);
  const labels = data.map(transaction => transaction.date);

  new Chart(chartCanvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Transaction Amounts",
        data: amounts,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

displayTransactions(transactions); // Initial display

filterButton.addEventListener("click", () => {
  const amount = parseInt(filterInput.value);
  if (!isNaN(amount)) {
    filterTransactions(amount);
  }
});
