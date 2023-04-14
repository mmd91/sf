import { getFieldValue, RecordFieldDataType } from 'lightning/uiRecordApi';
import { api, LightningElement } from 'lwc';


import Name from '@salesforce/schema/Contact.Name';


export default class GetAccountOnContact extends LightningElement {}
/* Create a custom component on the Contact record to display some fields with the ability to edit and save them.
Also, add another button to get related Account record by click on this button */ 

@api recordId;

get contactName(){
    return getFieldValue(this.contact.data, Name);
}