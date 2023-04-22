import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import getContacts from '@salesforce/apex/SimpleRelatedListController.getContacts'

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class AccountContacts extends LightningElement {
    @api recordId;
    contacts;
    columns = COLUMNS;

    @wire(getContacts, {accountId: '$recordId'})
    wiredGetContacts({ error, data }) {
        console.log('aa');
        if (data){
            this.contacts = data;
        } else if (error){
            
            console.log(JSON.stringify(error))
        }
    }

    
}
