import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

import { api, LightningElement, wire } from 'lwc';

import Name from '@salesforce/schema/Account.Name';
import Phone from '@salesforce/schema/Account.Phone';
import Costs__c from '@salesforce/schema/Account.Costs__c';

export default class Task2 extends LightningElement {
    @api recordId;
    
    
    @wire(getRecord, { recordId: '$recordId', fields: [Name, Phone, Costs__c] }) account;

    get accountName (){
        return getFieldValue(this.account.data,  );
    }

    get accountPhone (){
        return getFieldValue(this.account.data , Phone);
    }

    get accountCosts (){
        return getFieldValue(this.account.data , Costs__c);
    }

  
}