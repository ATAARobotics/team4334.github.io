<script>
function checkServerStatus() {
    var img = document.body.appendChild(document.createElement("img"));
    img.onload = function() {
        window.location.replace('https://192.168.100.66:4334');
    };
    img.src = "http://192.168.100.66:5015/favicon.png";
    setTimeout(function(){ window.location.replace('https://ataabuildspace.serveo.net'); }, 3000);
}
checkServerStatus();
</script>