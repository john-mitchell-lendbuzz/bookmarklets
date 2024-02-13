javascript: (() => {

    const ticketId = prompt("Ticket ID:");
    if(!ticketId){
        return;
    }
    if(!ticketId.includes('-')){
        return;
    }

    window.open(`https://lendbuzz.atlassian.net/browse/${ticketId}`);

})();