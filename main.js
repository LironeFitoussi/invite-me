console.log("test");

let guestNumber;

// Define the guest object
const imaginaryGuests = [
    { name: "Alice", table: 1, phoneNumber: "123-456-7890" },
    { name: "Bob", table: 2, phoneNumber: "234-567-8901" },
    { name: "Charlie", table: 3, phoneNumber: "345-678-9012" },
    { name: "David", table: 4, phoneNumber: "456-789-0123" },
    { name: "Deborah Fitoussi", table: 5, phoneNumber: "0543099829" },
    { name: "Frank", table: 6, phoneNumber: "678-901-2345" },
    { name: "Grace", table: 7, phoneNumber: "789-012-3456" },
    { name: "Henry", table: 8, phoneNumber: "890-123-4567" },
    { name: "Ivy", table: 9, phoneNumber: "901-234-5678" },
    { name: "Jack", table: 10, phoneNumber: "012-345-6789" },
    { name: "Karen", table: 11, phoneNumber: "987-654-3210" },
    { name: "Liam", table: 12, phoneNumber: "876-543-2109" },
    { name: "Mia", table: 13, phoneNumber: "765-432-1098" },
    { name: "Noah", table: 14, phoneNumber: "654-321-0987" },
    { name: "Olivia", table: 15, phoneNumber: "543-210-9876" },
    { name: "Parker", table: 16, phoneNumber: "432-109-8765" },
    { name: "Quinn", table: 17, phoneNumber: "321-098-7654" },
    { name: "Ryan", table: 18, phoneNumber: "210-987-6543" },
    { name: "Sofia", table: 19, phoneNumber: "109-876-5432" },
    { name: "Thomas", table: 20, phoneNumber: "098-765-4321" },
    { name: "Uma", table: 21, phoneNumber: "987-654-3210" },
    { name: "Victoria", table: 22, phoneNumber: "876-543-2109" },
    { name: "William", table: 23, phoneNumber: "765-432-1098" },
    { name: "Xander", table: 24, phoneNumber: "654-321-0987" },
    { name: "Yara", table: 25, phoneNumber: "543-210-9876" }
];


// Wait for the document to be ready
$(document).ready(function() {
    $("#button-addon2").click(function() {
        const guestPhoneNumber = $("input[type='tel']").val();
        const guest = imaginaryGuests.find(g => g.phoneNumber === guestPhoneNumber);

        if (guest) {
            $("main").html(`
                <div id="guestTableData">
                    <h3>Hello ${guest.name}</h3>
                    <p>You're sitting at table number:</p>
                    <h1>${guest.table}</h1>
                    <!-- You can add more guest information here -->
                </div>
            `);
        } else {
            $("main").html("<p>Guest not found. Please check your phone number.</p>");
        }
    });
});


