function addScript () {
    var body = document.getElementsByTagName("body")[0];

    var scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    body.appendChild(scriptElement);
}