const displayUserInfor = (user) => {
    let { name, age, location, contact, job } = user;
    let { city, country } = location;
    let email = contact?.email || "unknown"
    let phone = contact?.phone || "unknown"
    let title = job?.title || "unknown"
    let company = job?.company || "unknown"
    console.log(`${name} is ${age} year old, lives in ${city},${country}, work as ${title} at ${company}, and can be contacted via ${email} or ${phone}`);
}
displayUserInfor({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" } });
displayUserInfo({ name: "John", age: 25, location: { city: "Hanoi", country: "Vietnam" }, contact: { email: "john@example.com", phone: "0123456789" }, job: { title: "Developer", company: "Tech Corp" } })