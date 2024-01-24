/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookGooglePeople = {
    label: 'Catch HTTP Google People events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/googlepeople',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Google People webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('googlepeople:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
