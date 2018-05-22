let prefix = "";
if (document.URL.toString().indexOf("localhost:8080") > -1)
    prefix = "http://localhost:3000";

export default prefix;