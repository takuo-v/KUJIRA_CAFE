<script>
window.onload = function () {
    document.getElementById( "niceButton" ).onclick = function(){
        countUp();
    };
}
var $count = 0;
function countUp() {
    document.getElementById( "niceOutput" ).innerHTML = ++$count;
}
</script>