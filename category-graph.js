// Placeholder dataset simulating user transactions
const transactions = [
  { category: 'Food', amount: 1200 },
  { category: 'Transport', amount: 450 },
  { category: 'Shopping', amount: 900 },
  { category: 'Food', amount: 800 },
  { category: 'Health', amount: 300 },
  { category: 'Transport', amount: 200 },
  { category: 'Education', amount: 1500 },
  { category: 'Other', amount: 400 },
  { category: 'Shopping', amount: 700 },
  { category: 'Food', amount: 600 }
];

// Group amounts by category
const categoryTotals = {};
transactions.forEach(({ category, amount }) => {
  if (!categoryTotals[category]) {
    categoryTotals[category] = 0;
  }
  categoryTotals[category] += amount;
});

const categories = Object.keys(categoryTotals);
const amounts = Object.values(categoryTotals);

// Render the bar chart using Chart.js
window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('categoryBarChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: categories,
      datasets: [{
        label: 'Amount Spent (₹)',
        data: amounts,
        backgroundColor: [
          '#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab'
        ],
        borderRadius: 8,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `₹${context.parsed.y}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Amount (₹)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Category'
          }
        }
      }
    }
  });
});