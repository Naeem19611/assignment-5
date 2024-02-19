// Section Hide and Clicked Event Handle
const ticketButton = document.getElementById("ticket");
const hiddenSection = document.getElementById("hiddenSection");

ticketButton.addEventListener("click", function () {
    if (hiddenSection.style.display === "none") {
        hiddenSection.style.display = "block";
    } else {
        hiddenSection.style.display = "none";
        hiddenSection.style.display = "block";
    }
});

// Add Selection change color reduce the value
const seatGrid = document.getElementById('seatGrid');
const seatsLeft = document.getElementById('seatsLeft');
const selectedSeatsCount = document.getElementById('selectedSeatsCount');
const totalPriceValue = document.getElementById('totalPriceValue');
const grandPriceValue = document.getElementById('grandPriceValue');
const seatDetails = document.getElementById('seatDetails');
const seatClass = document.getElementById('seatClass');
const seatPrice = document.getElementById('seatPrice');
let selectedSeats = 0;
let totalPrice = 0;
let grandPrice = 0;
let totalPrice2 = 550;
let totalPrice3 = 1100;
let grandPrice2 = totalPrice2;
let grandPrice3 = totalPrice3;
let totalPrice4 = 1650;
let totalPrice5 = 2200;
let grandPrice4 = totalPrice4;
let grandPrice5 = totalPrice5;

seatGrid.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('bg-gray-200') && selectedSeats < 8) {
        if (selectedSeats < 4 || target.classList.contains('selected')) {
            target.classList.toggle('bg-gray-200');
            target.classList.toggle('bg-green-500');
            target.classList.toggle('selected');
            if (target.classList.contains('selected')) {
                selectedSeats++;
                totalPrice += 550;
                grandPrice += 550;
            } else {
                selectedSeats--;
                totalPrice -= 550;
                grandPrice -= 550;
            }
            updateSeatsLeft();
            checkSelectedSeats();
            updateSelectedSeatsCount();
            updateTotalPrice();
            // updateGrandPrice();
            updateSeatDetails(target.innerText);
        } else {
            alert('You have already selected at least 4 seats. No more can be selected.');
        }
    }
});

function updateSeatsLeft() {
    const seatsRemaining = 40 - selectedSeats;
    seatsLeft.textContent = seatsRemaining + ' Seats left';
}

function checkSelectedSeats() {
    if (selectedSeats >= 8) {
        alert('You have selected 4 more seats. Thank you!');
        // Block further selection
        const seatButtons = document.querySelectorAll('.bg-gray-200');
        seatButtons.forEach(button => {
            button.removeEventListener('click', selectSeat);
        });
    }
}
function updateSelectedSeatsCount() {
    selectedSeatsCount.textContent = selectedSeats;
}
function updateSeatDetails(seatElement) {
    seatDetails.style.display = '';
    seatClass.textContent = 'Economy';
    seatPrice.textContent = 'Price 550 tk';
    // Update seat name
    seatDetails.querySelector('p').textContent = 'Seat: ' + seatName;
}

function updateTotalPrice() {
    totalPriceValue.textContent = totalPrice;
}
function updateGrandPrice() {
    grandPriceValue.textContent = grandPrice;
}

// Function to apply discount
function applyDiscount(coupon) {
    let discount = 0;
    if (coupon === "NEW15") {
        discount = 0.15;
    } else if (coupon === "Couple20") {
        discount = 0.20;
    } else {
        // Alert for wrong coupon
        alert("Invalid coupon code. Please enter a valid coupon.");
        return;
    }
    
    // For 550tk
    let discountedAmount = totalPrice2 * discount;
    // Update grand total
    grandPrice2 = totalPrice2 - discountedAmount;
    document.getElementById("grandPriceValue").innerText = grandPrice2.toFixed(2);

}

// Function to apply discount
function applyDiscount(coupon) {
    let discount = 0;
    if (coupon === "NEW15") {
        discount = 0.15;
    } else if (coupon === "Couple20") {
        discount = 0.20;
    } else {
        // Alert for wrong coupon
        alert("Invalid coupon code. Please enter a valid coupon.");
        return;
    }

    //  For 1100tk
    let discountedAmount2 = totalPrice3 * discount;
    // Update grand total
    grandPrice3 = totalPrice3 - discountedAmount2;
    document.getElementById("grandPriceValue").innerText = grandPrice3.toFixed(2);

}

// Function to apply discount
function applyDiscount(coupon) {
    let discount = 0;
    if (coupon === "NEW15") {
        discount = 0.15;
    } else if (coupon === "Couple20") {
        discount = 0.20;
    } else {
        // Alert for wrong coupon
        alert("Invalid coupon code. Please enter a valid coupon.");
        return;
    }

    // For 1650tk
    let discountedAmount3 = totalPrice4 * discount;
    // Update grand total
    grandPrice4 = totalPrice4 - discountedAmount3;
    document.getElementById("grandPriceValue").innerText = grandPrice4.toFixed(2);

}

// Function to apply discount
function applyDiscount(coupon) {
    let discount = 0;
    if (coupon === "NEW15") {
        discount = 0.15;
    } else if (coupon === "Couple20") {
        discount = 0.20;
    } else {
        // Alert for wrong coupon
        alert("Invalid coupon code. Please enter a valid coupon.");
        return;
    }

    // For 2200tk
    let discountedAmount4 = totalPrice5 * discount;
    // Update grand total
    grandPrice5 = totalPrice5 - discountedAmount4;
    document.getElementById("grandPriceValue").innerText = grandPrice5.toFixed(2);

}

// Event listener for applying coupon
document.getElementById("applyCoupon").addEventListener("click", function () {
    const couponInput = document.getElementById("couponInput").value;
    applyDiscount(couponInput);
});

// Event listener for applying coupon
document.getElementById("applyCoupon").addEventListener("click", function () {
    const couponInput = document.getElementById("couponInput").value;
    // Call respective function based on the total price
    if (totalPrice2 === 550) {
        applyDiscount1(couponInput);
    } else if (totalPrice3 === 1100) {
        applyDiscount2(couponInput);
    } else if (totalPrice4 === 1650) {
        applyDiscount3(couponInput);
    } else if (totalPrice5 === 2200) {
        applyDiscount4(couponInput);
    }
});


// Modal Handle
const nextButton = document.getElementById('nextButton');
const my_modal_1 = document.getElementById('my_modal_1');

nextButton.addEventListener('click', function() {
  my_modal_1.showModal();
});



