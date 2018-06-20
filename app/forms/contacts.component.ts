import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
    selector: 'st-contacts',
    templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
    contacts : Contact[]
    contact : Contact;

    constructor() { }

    ngOnInit(): void { 
        this.contacts = [] 
        this.contact = new Contact() 
    }

    addContact() {
        console.log(this.contact)
        this.contacts.push(this.contact)
        this.contact = new Contact() 
    }

    deleteContacts() {
        var i = 0;
        while(i < this.contacts.length)
        {
            console.log( this.contacts[i])
            if (this.contacts[i].delete)
                     this.contacts.splice(i,1)
            else
               i++;
        }
    }

    saveContacts() {
        console.log(this.contacts)
    }
}
