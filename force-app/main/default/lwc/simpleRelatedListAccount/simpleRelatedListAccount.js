import { LightningElement, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class SimpleRelatedListAccount extends LightningElement {

    /* Create LWC component, to show related Contacts on Account page
Leverage lightning/uiRelatedListApi wire adapters to get needed data.
Use datatable to show contacts
Keep the styling close to standard related list, but only with refresh button */
    error;
    records;
    @wire(getRelatedListRecords, {
        parentRecordId: '0010900001sEMAcAAO',
        relatedListId: 'Contacts',
        fields: ['Contact.Id','Contact.Name', 'Contact.Phone', 'Contact.Email']
       
    })listInfo({ error, data }) {
        if (data) {
            this.records = data.records;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.records = undefined;
        }
    }
}