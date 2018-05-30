let urlsToCache=[
  '/',
  'js/main.js',
  'js/dbhelper.js',
  'js/restaurant_info.js',
  'css/styles.css',
  'restaurant.html',
  '/data/restaurants.json'
];
self.addEventListener('install',function (event) {

    event.waitUntil(
        caches.open('cache1').then(function (cache){
            return cache.addAll(urlsToCache);
        })
    );
});
function addToCache (name,request,response) {
  caches.open('cache1').then(cache => cache.put(request,response))
}
self.addEventListener( "fetch" , function (event) {
    //fetch request as specified by event object
    console.log(event.request);
    event.respondWith(
        fetch(event.request).then(function(response) {
                urlsToCache.push(event.request);
                addToCache('cache1',event.request,response.clone());
                return response;
        })
        .catch(function () {

          return caches.match(event.request).then(function(response) {
            return response;
          })
        })
    );
});

    //console.log('hello'); //Note that Request and Response are also objects
