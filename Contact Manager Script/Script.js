
let contactList = [{name: "David", phone: "123-456-7890", email: "david@example.com"}, {name: "John", phone: "987-654-3210", email: "john@example.com"}, {name: "Jane", phone: "555-555-5555", email: "jane@example.com"}, {name: 'Jane', phone: '555-555-5557', email: 'jane@example.com'}];
let startPrompt = prompt("Do you want to Search for, Add, Display, or Delete a contact?");
let Name;   
let phone;
let email;

function manageContacts(action) {
    if (action === "Add"){
    Name = prompt("What is the contact's name?");
    phone = prompt("What is the contact's phone number?");
    email = prompt("What is the contact's email?");
    contactList.push({name: Name, phone: phone, email: email});
    console.log(contactList);
}

 else if (action === "Delete"){
    Name = prompt("What is the contact's name?");
    phone = prompt("What is the contact's phone number?");
    email = prompt("What is the contact's email?");
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].name === Name && contactList[i].phone === phone && contactList[i].email === email) {
            contactList.splice(i, 1);
            console.log(contactList);
            return;
        }
    }
    console.log("Contact not found.");
}



  else if (action === "Display") {
      console.log("Contact List:");
    for (let i = 0; i < contactList.length; i++) {
        console.log(`Name: ${contactList[i].name}, Phone: ${contactList[i].phone}, Email: ${contactList[i].email}`);
    }
    }
 else if (action === "Search"){
    Name = prompt("What is the contact's name?");
    phone = prompt("What is the contact's phone number?");
    email = prompt("What is the contact's email?");
    contactList.find(contact => contact.name === Name);
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].name === Name) {
            console.log(`Name: ${contactList[i].name}, Phone: ${contactList[i].phone}, Email: ${contactList[i].email}`);
            return;
        }
        else {    
    console.log("Contact not found.");
    }
    }
}

}

manageContacts(startPrompt);

