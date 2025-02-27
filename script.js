const transactions = [
  { date: "2023-10-26", amount: 100, location: "Dubai" },
  { date: "2023-10-26", amount: 500, location: "Sharjah" },
  { date: "2023-10-27", amount: 1000, location: "Abu Dhabi" },
  { date: "2023-10-28", amount: 50, location: "Dubai" },
  { date: "2023-10-28", amount: 2000, location: "Ajman" },
];

const tableBody = document.getElementById("transactionTable").getElementsByTagName("tbody")[0];

transactions.forEach(transaction => {
  const row = tableBody.insertRow();
  const dateCell = row.insertCell();
  const amountCell = row.insertCell();
  const locationCell = row.insertCell();

  dateCell.textContent = transaction.date;
  amountCell.textContent = transaction.amount;
  locationCell.textContent = transaction.location;
});
