
function addContact(name, phone, email) {
    const contact = {
        name: name,
        phone: phone,
        email: email
    };
    phoneBooks.push(contact);
}
function displayContact() {
    if (phoneBooks.length === 0) {
        console.log("Danh bạ hiện tại trống.");
        return;
    }
    console.log("Danh bạ điện thoại:");
    phoneBooks.forEach((contact, index) => {
        console.log(`${index + 1}. Tên: ${contact.name}, Số Điện Thoại: ${contact.phone}, Email: ${contact.email}`);
    });
}
addContact("Nguyễn Văn A", "0123456789", " 122@gmail.com");
displayContact();