routerAdd("GET", "/api/slide/{action}", (e) => {

    let action = e.request.pathValue("action");

    const message = new SubscriptionMessage({
        name: "slide",
        data: JSON.stringify({
            avancar: (action == 'proximo')
        }),
    });

    // retrieve all clients (clients id indexed map)
    const clients = $app.subscriptionsBroker().clients()

    for (let clientId in clients) {
        if (clients[clientId].hasSubscription("slide")) {
            clients[clientId].send(message)
        }
    }
    


})