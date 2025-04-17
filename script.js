// ===============================
// Sidebar Function
// ===============================
function toggleSidebar() {
    const bars = document.getElementById('bars');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const dropArrow = document.getElementById('order-arrow');
    const dropdown = document.getElementById('ordersDropdown');
    const navbar = document.getElementById('navbar');
    sidebar.classList.toggle('sidebar-collapsed');
    if (sidebar.classList.contains('sidebar-collapsed')) {
        mainContent.classList.remove('ml-64');
        mainContent.classList.add('ml-16');
        dropArrow.classList.add('hidden');
        navbar.classList.remove('left-64');
        navbar.classList.add('left-16');
        bars.classList.add('rotate-180');
        navbar.classList.add('navbar_transition');
        if (dropdown.classList.contains('max-h-60')) {
            dropdown.classList.remove('max-h-60');
            dropdown.classList.add('max-h-0');
        }
    } else {
        mainContent.classList.remove('ml-16');
        mainContent.classList.add('ml-64');
        mainContent.classList.add('w-[80%]');
        dropArrow.classList.remove('hidden');
        bars.classList.remove('rotate-180');
        navbar.classList.remove('left-16');
        navbar.classList.add('left-64');
    }
    if (sidebar.classList.contains('sidebar-collapsed')) {

    }
}

// ===============================
// Cards Counters
// ===============================
function animateCounter(id, endValue) {
    const el = document.getElementById(id);
    let start = 0;
    const duration = 1500; // animation time in ms
    const increment = Math.ceil(endValue / (duration / 16)); // smooth step

    const counter = setInterval(() => {
        start += increment;
        if (start >= endValue) {
            el.textContent = endValue;
            clearInterval(counter);
        } else {
            el.textContent = start;
        }
    }, 16); // 60fps
}

// Assign random values (replace with real data if needed)

const dashboardStats = {
    totalOrders: Math.floor(Math.random() * 500) + 50,
    totalMenuItems: Math.floor(Math.random() * 50) + 10,
    totalCustomers: Math.floor(Math.random() * 200) + 100,
    totalReservations: Math.floor(Math.random() * 80) + 10
};

// Animate all cards

Object.entries(dashboardStats).forEach(([id, value]) => {
    animateCounter(id, value);
});

// ===============================
// Sidebar Buttons Active
// ===============================

const sideButtons = document.querySelectorAll('.sidebtn');

// Loop through each button and attach a click event

sideButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        sideButtons.forEach(btn => {
            btn.classList.remove('bg-gray-50', 'text-black');
            btn.classList.add('text-gray-300');
        });

        // Add active class to clicked button
        this.classList.add('bg-gray-50', 'text-black');
        if (this.classList.contains('text-gray-300')) {
            this.classList.remove('text-gray-300');
            this.classList.add('text-black');
        }
    });
});

// Dropdown for Orders

function toggleOrdersDropdown() {
    const dropdown = document.getElementById('ordersDropdown');
    const arrow = document.getElementById('order-arrow');

    if (dropdown.classList.contains('max-h-0')) {
        dropdown.classList.remove('max-h-0');
        dropdown.classList.add('max-h-60'); // enough height for 3 items
        arrow.classList.add('rotate-180');
    } else {
        dropdown.classList.remove('max-h-60');
        dropdown.classList.add('max-h-0');
        arrow.classList.remove('rotate-180');
    }
}

// ===============================
// Home Page Functions
// ===============================


// Show Section
function showSection(section) {
    alert('Navigating to: ' + section);
}

// Toggler
function toggleProfileMenu() {
    document.getElementById('profileMenu').classList.toggle('hidden');
}

// Show Section
function showSection(section) {
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

// Update Dashboard
function updateDashboardCounts() {
    document.getElementById('totalOrders').innerText = document.querySelectorAll('#orderList .order-card').length;
    document.getElementById('totalMenuItems').innerText = document.querySelectorAll('#menuItems div').length;
    document.getElementById('totalCustomers').innerText = Math.floor(Math.random() * 500) + 1; // Simulated data
    document.getElementById('totalReservations').innerText = Math.floor(Math.random() * 100) + 1; // Simulated data
}

document.addEventListener("DOMContentLoaded", updateDashboardCounts);
// Order Chart

// Set the height of the canvas element
document.getElementById('ordersChart').style.height = '300px'; // Adjust the height as needed


// ===============================
// Charts
// ===============================

// Customer Chart
const customersChart = new Chart(document.getElementById("customersChart"), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Customers',
            data: [0, 5, 7, 9, 6, 8, 4, 3, 6, 4],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            horizontal: true,
            indexAxis: 'y'
        }]
    }
});

// Menu Chart
const menuChart = new Chart(document.getElementById("menuChart"), {
    type: 'bar',
    data: {
        labels: ['Pizza', 'Burger', 'Pasta', 'Drinks', 'Desserts', 'Shakes', 'Wraps'],
        datasets: [{
            label: 'Menu Items Sold',
            data: [30, 50, 20, 40, 25, 23, 12],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(153, 102, 255, 0.6)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'gray'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'gray'
                }
            },
            x: {
                ticks: {
                    color: 'gray'
                }
            }
        }
    }
});

// Sales Chart
new Chart(document.getElementById("salesChart"), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep'],
        datasets: [{
            label: 'Sales',
            data: [150, 200, 180, 220, 300, 230, 120, 110, 150],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }]
    }
});

// Revenue Chart
new Chart(document.getElementById("revenueChart"), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep'],
        datasets: [{
            label: 'Revenue',
            data: [1000, 1200, 1100, 1400, 1600, 1300, 200, 1100, 1350],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    }
});

// Category Chart
const ctg = document.getElementById('categoryChart').getContext('2d');
new Chart(ctg, {
    type: 'bar',
    data: {
        labels: ['Margherita Pizza', 'Spaghetti Carbonara', 'Chocolate Cake', 'Caesar Salad', 'Tiramisu', 'Desert'],
        datasets: [{
            label: 'Orders (This Week)',
            data: [120, 95, 80, 60, 45, 20],
            backgroundColor: ['#f97316', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5'],
            borderColor: ['#c2410c', '#ea580c', '#ea580c', '#c2410c', '#c2410c'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Makes bars horizontal
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Orders'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Menu Items'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

const ordersChart = new Chart(document.getElementById("ordersChart"), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug'],
        datasets: [{
            label: 'Orders',
            data: [100, 19, 63, 56, 20, 83, 4, 92],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(23, 45, 237)',
            borderWidth: 2,
            outerHeight: 1
        }]
    }, options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// ===============================
// Menu Section
// ===============================
// Fetch Api for Menu
let cartData = {};  // Stores cart items with their quantities

// Fetch API for Menu
async function fetchMenu() {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = "";

    // Use `data.recipes` instead of `data`
    data.recipes.slice(0, 26).forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("text-gray-700", "rounded", "shadow-lg", "cursor-pointer");
        menuItem.innerHTML = `
    <div class="relative group bg-white shadow-md rounded overflow-hidden transition-all duration-300 flex flex-col h-[310px]">
        <img src="${item.image}" class="w-full h-52 object-cover rounded-t" alt="${item.name}">
        
        <!-- Content Area -->
        <div class="flex flex-col justify-between flex-1">
            <h3 class="text-xl mt-2 px-4 font-bold line-clamp-2 min-h-[56px]">
                ${item.name}
            </h3>

            <div class="flex items-center px-4 pb-4 mt-auto">
                <p class="text-gray-600 mr-2">$${(Math.random() * 10 + 5).toFixed(2)}</p>
                <p class="text-lg text-gray-700 ml-auto">
                    <i class='bx bxs-star-half text-yellow-400 text-xl'></i>${item.rating}
                </p>
            </div>
        </div>

        <!-- Overlay Button -->
        <div class="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button class="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition">
                Add to Cart
            </button>
        </div>
    </div>
`;

        // Add event listener to each menu item
        menuItem.addEventListener('click', () => addToCart(item));

        menuContainer.appendChild(menuItem);
    });
}

fetchMenu();

// Add to Cart Function
function addToCart(item) {
    const itemPrice = (Math.random() * 10 + 5).toFixed(2); // Fake price
    const itemId = item.id;

    // Check if item already exists in cart
    if (cartData[itemId]) {
        cartData[itemId].qty += 1;
    } else {
        cartData[itemId] = { ...item, price: itemPrice, qty: 1 };
    }

    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear the cart before updating

    let total = 0;

    Object.values(cartData).forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("flex", "items-center", "justify-between", "space-x-2", "border-b", "pb-3", "mb-3");

        cartItem.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${item.image}" class="w-16 h-16 object-cover rounded" alt="${item.name}">
                <div>
                    <h4 class="font-semibold">${item.name}</h4>
                    <p class="text-sm text-gray-600">$${item.price}</p>
                </div>
            </div>
            <div class="flex items-center space-x-2 border border-gray-400 px-1 rounded-lg">
                <button onclick="decrementItem('${item.id}')" class="text-gray-600 hover:text-gray-900">-</button>
                <span class="font-semibold">${item.qty}</span>
                <button onclick="incrementItem('${item.id}')" class="text-gray-600 hover:text-gray-900">+</button>
            </div>
        `;

        total += item.price * item.qty;
        cartContainer.appendChild(cartItem);
    });

    // Update total
    const totalElement = document.getElementById("cart-total");
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

// Increment Item Quantity
function incrementItem(itemId) {
    cartData[itemId].qty += 1;
    updateCartUI();
}

// Decrement Item Quantity
function decrementItem(itemId) {
    if (cartData[itemId].qty > 1) {
        cartData[itemId].qty -= 1;
    } else {
        delete cartData[itemId];
    }
    updateCartUI();
}

// Remove Item from Cart
function removeItem(itemId) {
    delete cartData[itemId];
    updateCartUI();
}

// Function to handle delivery confirmation
function confirmDelivery() {
    // Get input values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Trigger SweetAlert2 success message with custom size to match the delivery form
    Swal.fire({
        title: 'Delivery Confirmed',
        text: `Name: ${name}\nAddress: ${address}\nPhone: ${phone}`,
        icon: 'success',
        confirmButtonText: 'OK',
        width: '380px', // Match the width of the delivery form
        customClass: {
            popup: 'rounded-lg shadow-lg', // Same rounded and shadow effect as the popup
            title: 'text-xl font-semibold', // Title styling
            content: 'text-sm text-gray-700', // Content styling
            confirmButton: 'bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700', // Styled button
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Close the popup after confirmation
            closePopup();

            // Optionally, reset the form or perform additional actions here
            document.getElementById('deliveryForm').reset();
        }
    });
}

// Optional: Clear the Cart
function clearCart() {
    cartData = {};
    updateCartUI();
}

// ===============================
// Customers
// ===============================

fetch('https://randomuser.me/api/?results=5&nat=us')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('user-grid');
        const currentDateTime = new Date().toLocaleString();

        data.results.forEach(user => {
            const div = document.createElement('div');
            div.className = "bg-white shadow-md hover:shadow-lg transition rounded-lg p-4 flex items-start space-x-4";

            div.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}" class="w-24 h-24 rounded-full object-cover">
          <div>
            <h2 class="text-xl font-semibold text-gray-800">${user.name.first} ${user.name.last}</h2>
            <p class="text-sm text-gray-500">${currentDateTime}</p>
            <p class="text-gray-700 flex-wrap w-52 overflow-hidden"><strong>Email:</strong>${user.email}</p>
            <p class="text-gray-700"><strong>Phone:</strong> ${user.phone}</p>
          </div>
        `;

            container.appendChild(div);
        });
    })
    .catch(err => console.error('Error fetching users:', err));

// Simulated API endpoint (replace with your real one if needed)
const apiUrl = 'https://api.example.com/orders';

// Temporary mock data if you don't have a backend yet
const mockOrders = [
    { id: '001', date: '2025-04-10', total: 45.00 },
    { id: '002', date: '2025-04-08', total: 32.50 },
    { id: '003', date: '2025-04-05', total: 88.99 },
    { id: '004', date: '2025-04-04', total: 29.95 },
    { id: '005', date: '2025-04-03', total: 105.25 },
    { id: '006', date: '2025-04-02', total: 12.99 },
    { id: '007', date: '2025-04-01', total: 65.00 },
    { id: '008', date: '2025-03-31', total: 47.89 },
    { id: '009', date: '2025-03-30', total: 38.49 },
    { id: '010', date: '2025-03-29', total: 77.00 },
    { id: '011', date: '2025-03-28', total: 19.90 },
    { id: '012', date: '2025-03-27', total: 49.99 },
    { id: '013', date: '2025-03-26', total: 26.30 },
    { id: '014', date: '2025-03-25', total: 93.75 },
    { id: '015', date: '2025-03-24', total: 55.55 },
    { id: '016', date: '2025-03-23', total: 33.33 },
    { id: '017', date: '2025-03-22', total: 22.22 },
    { id: '018', date: '2025-03-21', total: 44.44 },
    { id: '019', date: '2025-03-20', total: 99.99 },
    { id: '020', date: '2025-03-19', total: 60.60 }
];

// ===============================
// Order Table
// ===============================
function loadOrders(orders) {
    const tbody = document.getElementById('order-history-body');
    tbody.innerHTML = ''; // Clear previous rows
    orders.forEach(order => {
        const row = `
    <tr class="border-b">
        <td class="px-4 py-2">${order.id}</td>
        <td class="px-4 py-2">${order.date}</td>
        <td class="px-4 py-2">$${order.total.toFixed(2)}</td>
    </tr>
    `;
        tbody.innerHTML += row;
    });
}

// Fetch data from API (using mock for demo)
document.addEventListener('DOMContentLoaded', () => {
    loadOrders(mockOrders);
});

const ctx = document.getElementById('orderStatusChart').getContext('2d');

// Create a gradient color for the doughnut chart segments
const gradientActive = ctx.createLinearGradient(0, 0, 0, 400);
gradientActive.addColorStop(0, 'rgba(46, 204, 113, 1)'); // Fresh Green
gradientActive.addColorStop(1, 'rgba(39, 174, 96, 1)'); // Dark Green

const gradientPending = ctx.createLinearGradient(0, 0, 0, 400);
gradientPending.addColorStop(0, 'rgba(253, 138, 0, 1)'); // Warm Orange
gradientPending.addColorStop(1, 'rgba(243, 156, 18, 1)'); // Darker Orange

const gradientDelivered = ctx.createLinearGradient(0, 0, 0, 400);
gradientDelivered.addColorStop(0, 'rgba(41, 128, 185, 1)'); // Calm Blue
gradientDelivered.addColorStop(1, 'rgba(52, 152, 219, 1)'); // Darker Blue

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Active', 'Pending', 'Delivered'],
        datasets: [{
            label: 'Order Status',
            data: [12, 5, 23], // Sample data: active, pending, delivered
            backgroundColor: [
                gradientActive,  // Active - Green gradient
                gradientPending, // Pending - Orange gradient
                gradientDelivered, // Delivered - Blue gradient
            ],
            borderColor: [
                '#16a34a', // Active border (green)
                '#eab308', // Pending border (yellow)
                '#2563eb', // Delivered border (blue)
            ],
            borderWidth: 6, // Thicker border for premium look
            hoverOffset: 6, // Slightly increased hover effect
            borderJoinStyle: 'round', // Rounded border corners
            hoverBorderWidth: 8, // Make the border wider on hover
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%', // Larger hole in the center for modern look
        rotation: Math.PI / 4, // Start rotation
        animation: {
            animateRotate: true,
            animateScale: true,
            easing: 'easeOutBounce', // Bouncy animation for entry
            duration: 1000, // Duration for the animation
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 16, // Larger font for the legend
                    },
                    padding: 20,
                    boxWidth: 12, // Smaller legend box size
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#fff',
                borderWidth: 1
            },
            datalabels: {
                color: '#fff', // Text color for percentage
                formatter: function (value, ctx) {
                    const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${percentage}%`; // Display percentage with one decimal point
                },
                font: {
                    weight: 'bold',
                    size: 18, // Larger, bolder font size for the percentage
                    family: "'Roboto', sans-serif", // Sleek font family
                },
                anchor: 'center', // Centered inside each segment
                align: 'center',
            },
            // Plugin for custom text in the center
            beforeDraw: function (chart) {
                const ctx = chart.ctx;
                const width = chart.width;
                const height = chart.height;
                const fontSize = height / 8;
                ctx.font = fontSize + 'px "Roboto", sans-serif';
                ctx.fillStyle = '#333'; // Darker color for the center text
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const text = 'Total Orders'; // Text in center
                ctx.fillText(text, width / 2, height / 2);
            }
        }
    }
});

const ordersPerPage = 5; // Define how many records per page
let currentPage = 1;
let ordersData = [];

// Fetch orders data from API (Mock data for now)
async function fetchOrders(page = 1) {
    // Replace this with your API call
    const apiUrl = `https://api.example.com/orders?page=${page}&limit=${ordersPerPage}`;
    // For demo, we will use static mock data
    const mockData = [
        { id: '#1001', customer: 'Ahmed Raza', foodItem: 'Chicken Biryani', quantity: 2, total: 'Rs. 800', status: 'Delivered' },
        { id: '#1002', customer: 'Momin Ansari', foodItem: 'Zinger Burger', quantity: 1, total: 'Rs. 350', status: 'Pending' },
        { id: '#1003', customer: 'Haider Ali', foodItem: 'Pizza Large', quantity: 1, total: 'Rs. 1200', status: 'Cancelled' },
        { id: '#1004', customer: 'Sara Khan', foodItem: 'Pasta', quantity: 3, total: 'Rs. 900', status: 'Delivered' },
        { id: '#1005', customer: 'Ali Tariq', foodItem: 'Burger', quantity: 2, total: 'Rs. 700', status: 'Pending' },
        { id: '#1006', customer: 'Raza Shah', foodItem: 'Fried Rice', quantity: 2, total: 'Rs. 850', status: 'Delivered' },
        { id: '#1007', customer: 'Usman Mirza', foodItem: 'Steak', quantity: 1, total: 'Rs. 1500', status: 'Pending' },
        { id: '#1008', customer: 'Farhan Abbas', foodItem: 'Grilled Chicken', quantity: 1, total: 'Rs. 1200', status: 'Cancelled' },
        { id: '#1009', customer: 'Jamil Hassan', foodItem: 'Momos', quantity: 2, total: 'Rs. 500', status: 'Delivered' },
        { id: '#1010', customer: 'Nashit Bilal', foodItem: 'Spaghetti', quantity: 1, total: 'Rs. 650', status: 'Pending' },
        { id: '#1011', customer: 'Irfan Malik', foodItem: 'Lamb Curry', quantity: 2, total: 'Rs. 950', status: 'Delivered' },
        { id: '#1012', customer: 'Ayesha Noor', foodItem: 'Vegetable Biryani', quantity: 1, total: 'Rs. 700', status: 'Pending' },
        { id: '#1013', customer: 'Sahil Qureshi', foodItem: 'Chicken Shawarma', quantity: 3, total: 'Rs. 1050', status: 'Delivered' },
        { id: '#1014', customer: 'Zeeshan Iqbal', foodItem: 'Cheese Burger', quantity: 2, total: 'Rs. 600', status: 'Cancelled' },
        { id: '#1015', customer: 'Ali Hassan', foodItem: 'Veg Pizza', quantity: 1, total: 'Rs. 800', status: 'Delivered' },
        { id: '#1016', customer: 'Sarah Mirza', foodItem: 'Sushi Rolls', quantity: 2, total: 'Rs. 1200', status: 'Pending' },
        { id: '#1017', customer: 'Nashit Bilal', foodItem: 'Tandoori Chicken', quantity: 3, total: 'Rs. 1350', status: 'Delivered' },
        { id: '#1018', customer: 'Rehan Javed', foodItem: 'Fried Chicken', quantity: 1, total: 'Rs. 500', status: 'Pending' },
        { id: '#1019', customer: 'Sana Tariq', foodItem: 'Biryani', quantity: 2, total: 'Rs. 700', status: 'Cancelled' },
        { id: '#1020', customer: 'Shahid Khokhar', foodItem: 'Grilled Salmon', quantity: 1, total: 'Rs. 2000', status: 'Delivered' },
        { id: '#1021', customer: 'Adeel Zafar', foodItem: 'Chicken Korma', quantity: 2, total: 'Rs. 1100', status: 'Pending' },
        { id: '#1022', customer: 'Shahbaz Qureshi', foodItem: 'Lasagna', quantity: 1, total: 'Rs. 950', status: 'Delivered' },
        { id: '#1023', customer: 'Nida Baig', foodItem: 'Falafel', quantity: 2, total: 'Rs. 550', status: 'Pending' },
        { id: '#1024', customer: 'Hassan Ali', foodItem: 'Butter Chicken', quantity: 1, total: 'Rs. 950', status: 'Cancelled' },
        { id: '#1025', customer: 'Amina Shah', foodItem: 'Moussaka', quantity: 3, total: 'Rs. 1200', status: 'Delivered' },
        { id: '#1026', customer: 'Raza Zaman', foodItem: 'Kebabs', quantity: 2, total: 'Rs. 800', status: 'Pending' },
        { id: '#1027', customer: 'Fatima Khan', foodItem: 'Falafel Wrap', quantity: 1, total: 'Rs. 500', status: 'Delivered' },
        { id: '#1028', customer: 'Tariq Mehmood', foodItem: 'Grilled Steak', quantity: 2, total: 'Rs. 1500', status: 'Pending' },
        { id: '#1029', customer: 'Maya Shaheen', foodItem: 'Pizza Margherita', quantity: 1, total: 'Rs. 700', status: 'Delivered' },
        { id: '#1030', customer: 'Umer Shah', foodItem: 'Fried Fish', quantity: 2, total: 'Rs. 1100', status: 'Cancelled' }
    ];

    // Simulate API response with static data (you can replace this with actual API call)
    ordersData = mockData.slice((page - 1) * ordersPerPage, page * ordersPerPage);

    // Display orders data
    renderOrders(ordersData);

    // Set up pagination controls
    renderPagination(mockData.length, page);
}

// Render orders data into the table
function renderOrders(data) {
    const ordersTable = document.getElementById('ordersTable');
    ordersTable.innerHTML = '';

    data.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td class="px-3 py-2">${order.id}</td>
                <td class="px-3 py-2">${order.customer}</td>
                <td class="px-3 py-2">${order.foodItem}</td>
                <td class="px-3 py-2">${order.quantity}</td>
                <td class="px-3 py-2">${order.total}</td>
                <td class="px-3 py-2 ${getStatusClass(order.status)} font-semibold">${order.status}</td>
            `;
        ordersTable.appendChild(row);
    });
}

// Get CSS class for order status
function getStatusClass(status) {
    if (status === 'Delivered') return 'text-green-600';
    if (status === 'Pending') return 'text-yellow-500';
    return 'text-red-500'; // Cancelled
}

// Render pagination controls
function renderPagination(totalOrders, currentPage) {
    const totalPages = Math.ceil(totalOrders / ordersPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.classList.add(
        'px-4', 'py-2', 'border', 'border-gray-300', 'rounded-full',
        'text-gray-700', 'font-semibold', 'transition', 'duration-200',
        'ease-in-out', 'hover:bg-gray-100', 'disabled:opacity-50', 'disabled:cursor-not-allowed'
    );
    prevButton.innerText = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        currentPage--;
        fetchOrders(currentPage);
    });
    pagination.appendChild(prevButton);

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add(
            'px-4', 'py-2', 'border', 'border-gray-300', 'rounded-full',
            'text-gray-700', 'font-semibold', 'transition', 'duration-200',
            'ease-in-out', 'hover:bg-gray-100', 'focus:outline-none', 'disabled:opacity-50'
        );
        pageButton.innerText = i;
        pageButton.disabled = i === currentPage;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            fetchOrders(currentPage);
        });
        pagination.appendChild(pageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.classList.add(
        'px-4', 'py-2', 'border', 'border-gray-300', 'rounded-full',
        'text-gray-700', 'font-semibold', 'transition', 'duration-200',
        'ease-in-out', 'hover:bg-gray-100', 'disabled:opacity-50', 'disabled:cursor-not-allowed'
    );
    nextButton.innerText = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        currentPage++;
        fetchOrders(currentPage);
    });
    pagination.appendChild(nextButton);
}

// Handle search
document.getElementById('orderSearch').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredOrders = ordersData.filter(order =>
        order.customer.toLowerCase().includes(searchTerm) ||
        order.foodItem.toLowerCase().includes(searchTerm)
    );
    renderOrders(filteredOrders);
});

// Initial call to load data
fetchOrders(currentPage);

// Reservation section
document.addEventListener("DOMContentLoaded", function () {
    const reservations = [
        { name: "John Doe", phone: "123-456-7890", email: "john@example.com", date: "2025-04-01", time: "19:00", guests: 4 },
        { name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", date: "2025-04-02", time: "20:00", guests: 2 },
        { name: "Michael Brown", phone: "555-234-5678", email: "michael@example.com", date: "2025-04-03", time: "18:30", guests: 3 },
        { name: "Emily Davis", phone: "666-789-1234", email: "emily@example.com", date: "2025-04-04", time: "21:00", guests: 5 },
        { name: "Chris Wilson", phone: "777-555-8888", email: "chris@example.com", date: "2025-04-05", time: "19:45", guests: 2 },
        { name: "Sarah Taylor", phone: "888-666-9999", email: "sarah@example.com", date: "2025-04-06", time: "20:15", guests: 6 },
        { name: "David Martinez", phone: "999-444-7777", email: "david@example.com", date: "2025-04-07", time: "18:00", guests: 4 },
        { name: "Laura White", phone: "111-222-3333", email: "laura@example.com", date: "2025-04-08", time: "19:30", guests: 3 },
        { name: "Olivia Green", phone: "222-333-4444", email: "olivia@example.com", date: "2025-04-09", time: "18:15", guests: 2 },
        { name: "Liam Hall", phone: "333-444-5555", email: "liam@example.com", date: "2025-04-10", time: "20:00", guests: 5 },
        { name: "Sophia Young", phone: "444-555-6666", email: "sophia@example.com", date: "2025-04-11", time: "19:00", guests: 4 },
        { name: "Mason King", phone: "555-666-7777", email: "mason@example.com", date: "2025-04-12", time: "19:15", guests: 3 },
        { name: "Isabella Scott", phone: "666-777-8888", email: "isabella@example.com", date: "2025-04-13", time: "20:30", guests: 2 },
        { name: "Ethan Moore", phone: "777-888-9999", email: "ethan@example.com", date: "2025-04-14", time: "18:45", guests: 4 },
        { name: "Ava Adams", phone: "888-999-0000", email: "ava@example.com", date: "2025-04-15", time: "19:30", guests: 6 },
        { name: "Logan Turner", phone: "999-000-1111", email: "logan@example.com", date: "2025-04-16", time: "20:45", guests: 5 },
        { name: "Mia Lewis", phone: "000-111-2222", email: "mia@example.com", date: "2025-04-17", time: "18:00", guests: 3 },
        { name: "Noah Walker", phone: "111-222-4444", email: "noah@example.com", date: "2025-04-18", time: "21:00", guests: 2 },
        { name: "Amelia Harris", phone: "222-444-5555", email: "amelia@example.com", date: "2025-04-19", time: "19:45", guests: 5 },
        { name: "James Nelson", phone: "333-555-6666", email: "james@example.com", date: "2025-04-20", time: "20:30", guests: 4 },
        { name: "Charlotte Clark", phone: "444-666-7777", email: "charlotte@example.com", date: "2025-04-21", time: "18:15", guests: 3 },
        { name: "Benjamin Rodriguez", phone: "555-777-8888", email: "benjamin@example.com", date: "2025-04-22", time: "20:00", guests: 2 },
        { name: "Harper Lewis", phone: "666-888-9999", email: "harper@example.com", date: "2025-04-23", time: "19:00", guests: 6 },
        { name: "Elijah Lee", phone: "777-999-0001", email: "elijah@example.com", date: "2025-04-24", time: "21:15", guests: 4 },
        { name: "Abigail Walker", phone: "888-000-1112", email: "abigail@example.com", date: "2025-04-25", time: "18:30", guests: 5 },
        { name: "Lucas Allen", phone: "999-111-2223", email: "lucas@example.com", date: "2025-04-26", time: "20:15", guests: 3 },
        { name: "Emily Young", phone: "000-222-3334", email: "emilyy@example.com", date: "2025-04-27", time: "19:45", guests: 2 },
        { name: "Henry Hill", phone: "111-333-4445", email: "henry@example.com", date: "2025-04-28", time: "20:45", guests: 4 },
        { name: "Grace Thomas", phone: "222-444-5556", email: "grace@example.com", date: "2025-04-29", time: "18:00", guests: 5 },
        { name: "Alexander Perez", phone: "333-555-6667", email: "alexander@example.com", date: "2025-04-30", time: "20:30", guests: 3 },
        { name: "Ella Roberts", phone: "444-666-7778", email: "ella@example.com", date: "2025-05-01", time: "19:00", guests: 6 },
        { name: "Daniel Edwards", phone: "555-777-8889", email: "daniel@example.com", date: "2025-05-02", time: "21:00", guests: 4 },
        { name: "Chloe Baker", phone: "666-888-9990", email: "chloe@example.com", date: "2025-05-03", time: "19:15", guests: 2 },
        { name: "Matthew Gonzalez", phone: "777-999-0002", email: "matthew@example.com", date: "2025-05-04", time: "20:00", guests: 5 },
        { name: "Scarlett Russell", phone: "888-000-1113", email: "scarlett@example.com", date: "2025-05-05", time: "18:45", guests: 3 },
        { name: "Sebastian Diaz", phone: "999-111-2224", email: "sebastian@example.com", date: "2025-05-06", time: "20:45", guests: 4 },
        { name: "Aria Cooper", phone: "000-222-3335", email: "aria@example.com", date: "2025-05-07", time: "19:30", guests: 2 },
        { name: "Jackson Morgan", phone: "111-333-4446", email: "jackson@example.com", date: "2025-05-08", time: "20:30", guests: 6 }
    ];

    const itemsPerPage = 7; // Number of items to display per page
    let activePage = 1; // Current active page
    let filteredReservations = reservations; // Start with all reservations

    const tableBody = document.getElementById("reservationTableBody");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const customerSearchInput = document.getElementById("customerSearch");

    // Function to render the table rows for the current page
    function updateTableForPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = filteredReservations.slice(startIndex, endIndex);

        // Clear the current table body content
        tableBody.innerHTML = '';

        // Append the table rows for the current page
        pageItems.forEach(reservation => {
            const row = document.createElement("tr");
            row.classList.add("border-b");

            row.innerHTML = `
              <td class="p-2">${reservation.name}</td>
              <td class="p-2">${reservation.phone}</td>
              <td class="p-2">${reservation.email}</td>
              <td class="p-2">${reservation.date}</td>
              <td class="p-2">${reservation.time}</td>
              <td class="p-2">${reservation.guests}</td>
            `;

            tableBody.appendChild(row);
        });

        // Disable/Enable buttons based on current page
        prevButton.disabled = activePage === 1;
        nextButton.disabled = activePage * itemsPerPage >= filteredReservations.length;
    }

    // Handle previous button click
    prevButton.addEventListener("click", function () {
        if (activePage > 1) {
            activePage--;
            updateTableForPage(activePage);
        }
    });

    // Handle next button click
    nextButton.addEventListener("click", function () {
        if (activePage * itemsPerPage < filteredReservations.length) {
            activePage++;
            updateTableForPage(activePage);
        }
    });

    // Search function
    customerSearchInput.addEventListener("input", function () {
        const query = customerSearchInput.value.toLowerCase();
        filteredReservations = reservations.filter(reservation => {
            return reservation.name.toLowerCase().includes(query) || reservation.email.toLowerCase().includes(query);
        });
        activePage = 1; // Reset to the first page when a search is performed
        updateTableForPage(activePage);
    });

    // Initial table render
    updateTableForPage(activePage);
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element
    const ctx = document.getElementById('orderStatusBarChart').getContext('2d');

    // Create the bar chart
    const orderStatusBarChart = new Chart(ctx, {
        type: 'doughnut', // Use 'bar' for a vertical bar chart
        data: {
            labels: ['Pending', 'Delivered', 'Shipped', 'Cancelled', 'Returned'],
            datasets: [{
                label: 'Order Status Count', // Title of the dataset
                data: [15, 30, 25, 5, 10], // Example data for each order status (Pending, Delivered, etc.)
                backgroundColor: [
                    '#FFC107', // Yellow for Pending
                    '#4CAF50', // Green for Delivered
                    '#2196F3', // Blue for Shipped
                    '#F44336', // Red for Cancelled
                    '#9E9E9E'  // Grey for Returned
                ], // Different background colors for each status
                borderColor: '#000000', // Border color for the bars
                borderWidth: 1 // Border width of bars
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            scales: {
                x: {
                    beginAtZero: true, // Start the X-axis from zero
                    ticks: {
                        font: {
                            size: 12 // Font size for X-axis labels
                        }
                    }
                },
                y: {
                    beginAtZero: true, // Start the Y-axis from zero
                    ticks: {
                        font: {
                            size: 12 // Font size for Y-axis labels
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true, // Display the legend
                    position: 'top' // Position of the legend
                }
            }
        }
    });
});


const button = document.getElementById('sortByButton');
const dropdownMenu = button.nextElementSibling;

button.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownList = document.getElementById('dropdownList');
const selectedText = document.getElementById('selectedText');

dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('hidden');
});

function filtersCard(status) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardStatus = card.getAttribute('data-status');

        if (status === "all" || cardStatus === status) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}
function selectItem(value) {
    selectedText.textContent = value;
    selectedText.classList.remove('text-gray-500'); // remove placeholder style
    dropdownList.classList.add('hidden');
}

// Optional: click outside to close dropdown
document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
        dropdownList.classList.add('hidden');
    }
});

// ===============================
// Orders Hover Popup
// ===============================
function openPopup(orderId, items, time, status) {
    // Random sample data
    const names = ["Ali Khan", "Sara Ahmed", "Usman Tariq", "Fatima Riaz", "Adeel Anwar"];
    const emails = ["example1@mail.com", "customer@mail.com", "info@foodie.com", "order@shop.pk", "contact@me.com"];
    const phones = ["0300-1234567", "0321-9876543", "0345-4567890", "0312-6677889", "0333-2255999"];
    const prices = [480, 620, 750, 550, 830];

    // Select random values
    const name = names[Math.floor(Math.random() * names.length)];
    const email = emails[Math.floor(Math.random() * emails.length)];
    const phone = phones[Math.floor(Math.random() * phones.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];

    // Fill the popup
    document.getElementById('popupOrderId').innerText = orderId;
    document.getElementById('popupOrderName').innerText = name;
    document.getElementById('popupOrderPhone').innerText = phone;
    document.getElementById('popupOrderEmail').innerText = email;
    document.getElementById('popupOrderItems').innerText = items;
    document.getElementById('popupOrderTime').innerText = time;
    document.getElementById('popupOrderPrice').innerText = `Rs. ${price}/-`;
    document.getElementById('popupOrderStatus').innerText = status;

    // Animate popup
    const popup = document.getElementById('orderPopup');
    const content = document.getElementById('popupContent');
    popup.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-90', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 50);
}

function closePopup() {
    const popup = document.getElementById('orderPopup');
    const content = document.getElementById('popupContent');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-90', 'opacity-0');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 300);
}


// Function to show or hide the popup based on delivery selection
function togglePopup(isDelivery) {
    const popup = document.getElementById('deliveryPopup');
    if (isDelivery) {
        popup.classList.remove('hidden'); // Show popup when 'Delivery' is selected
    } else {
        popup.classList.add('hidden'); // Hide popup when 'Pickup' is selected
    }
}

// Function to show or hide the popup based on delivery selection
function togglePopup(isDelivery) {
    const popup = document.getElementById('deliveryPopup');
    if (isDelivery) {
        popup.classList.remove('hidden'); // Show popup when 'Delivery' is selected
    } else {
        popup.classList.add('hidden'); // Hide popup when 'Pickup' is selected
    }
}

// Function to close the popup
function closePopup() {
    document.getElementById('deliveryPopup').classList.add('hidden');
}

// Function to show or hide the popup based on delivery selection
function togglePopup(isDelivery) {
    const popup = document.getElementById('deliveryPopup');
    if (isDelivery) {
        popup.classList.remove('hidden'); // Show popup when 'Delivery' is selected
    } else {
        popup.classList.add('hidden'); // Hide popup when 'Pickup' is selected
    }
}

// Function to close the popup
function closePopup() {
    document.getElementById('deliveryPopup').classList.add('hidden');
}

