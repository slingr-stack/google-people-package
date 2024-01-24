/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookGoogleContacts = {
    label: 'Catch HTTP Google Contacts events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/googlecontacts',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Google Contacts webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('googlecontacts:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
