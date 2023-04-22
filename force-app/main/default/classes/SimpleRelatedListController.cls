public with sharing class SimpleRelatedListController {
    @AuraEnabled(cacheable=true)
    public static List<Contact>  getContacts(Id accountId){
        List<Contact> contacts = [
            SELECT Id, Name,Phone,Email
            FROM Contact
            WHERE AccountId = :accountId
        ];
        
        return contacts;
    }
}