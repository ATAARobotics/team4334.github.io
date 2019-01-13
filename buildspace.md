<script>
function checkServerStatus() {
    var img = document.body.appendChild(document.createElement("img"));
    img.onload = function() {
        window.location.replace('https://172.16.1.211:4334');
    };
    img.src = "https://172.16.1.211:4334/favicon.png";
    setTimeout(function(){ window.location.replace('https://ataabuildspace.localtunnel.me'); }, 3000);
}
checkServerStatus();
</script>