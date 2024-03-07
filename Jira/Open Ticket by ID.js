javascript: (() => {

    const ticketId = prompt("Ticket ID:");
    if(!ticketId){
        return;
    }

    /**
     * Ticket IDs are in the format {alphabet}{alphabet}-{number}*
     */
    const ticketIdRegex = new RegExp("[a-zA-Z][a-zA-Z]-\\d+");
    if(!ticketIdRegex.test(ticketId)){
        return;
    }

    window.open(`https://lendbuzz.atlassian.net/browse/${ticketId}`);

})();