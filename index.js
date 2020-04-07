let arr = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,122, 120, 99, 118, 98, 110, 109, 44, 46, 47];// [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61] [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92][97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13][122, 120, 99, 118, 98, 110, 109, 44, 46, 47]
//document.onkeypress = function (event) {
//    console.log(event);
//arr.push(event.charCode);
//console.log(arr);
//}
function init() {
    let res = '';
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if ((index === 12)||( index === 25)||( index === 37)) {
            res+='<div class="clear" ></div>';
        }
        res+='<div class="key" data="' + element +  '">' + String.fromCharCode(element) + '</div>';

    };
    document.querySelector('#board').innerHTML = res;
}
init();
document.onkeypress = function (event){
    document.querySelectorAll('#board .key').forEach(element => {
        element.classList.remove('active');
    });
    document.querySelector('#board .key[data="' + event.keyCode + '"]').classList.add('active');

};
document.querySelectorAll('#board .key').forEach(element => {
    element.onclick = function(event){
        document.querySelectorAll('#board .key').forEach(element => {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
    };
    });
    