import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

import { api, LightningElement, track, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';

import Name from '@salesforce/schema/Account.Name';
import Phone from '@salesforce/schema/Account.Phone';
import Costs__c from '@salesforce/schema/Account.Costs__c';

export default class Task2 extends LightningElement {
    @api recordId;
    
    // accountName;
    // accountPhone;
    // accountCosts;

    
   @wire(getRecord, { recordId: '$recordId', fields: [Name, Phone, Costs__c] }) account;

//   connectedCallback(){
//     this.accountName = this.getFieldValue(this.account.data,  Name);
//     this.accountPhone = this.getFieldValue(this.account.data , Phone);
//     this.accountCosts = this.getFieldValue(this.account.data , Costs__c);
//   }

//   getFieldValue(record, field) {
//     return record ? record.fields[field.fieldApiName].value : '';
// }

    get accountName (){
        return getFieldValue(this.account.data,  Name);
    }

    get accountPhone (){
        return getFieldValue(this.account.data , Phone);
    }

    get accountCosts (){
        return getFieldValue(this.account.data , Costs__c);
    }

    handleAccountNameChange(event){
         // Update the account name variable with the new value
        this.accountName = event.target.value;
    }

    handleAccountPhoneChange(event){
         // Update the account phone variable with the new value
    this.accountPhone = event.target.value;
    }

    handleAccountCostChange(event){
         // Update the account cost variable with the new value
        this.accountCosts = event.target.value;
    }

    updateAccount(){
       
        const fields = {};
        fields[Name.fieldApiName] = this.accountName;
        fields[Phone.fieldApiName] = this.accountPhone;
        fields[Costs__c.fieldApiName] = this.accountCosts;

        const recordInput = { 
            fields, 
            id: this.recordId };

            updateRecord(recordInput)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account updated successfully.',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                console.error('Error updating account', error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });

    }
  
    
  
}