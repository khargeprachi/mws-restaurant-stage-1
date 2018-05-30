addServiceWorker();
function addServiceWorker() {
  // check if Sevice Worker support exist in browser or not
if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker
                       .register( '/serviceWorker.js' , { scope : ' ' } )
                       .then( function( ) {
                           console.log('Congratulations!!Service Worker is successfully Registered');
                       })
                       .catch( function( err) {
                           console.log(`Service Registration failed :- ${err}`);
                       });
} else {
    //still not supportedc
}
}
