let wrapper = document.createElement("div");
wrapper.id = "board";
document.body.append(wrapper);
let arr = [192,49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,8,9,113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,20,97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,16,122, 120, 99, 118, 98, 110, 109, 44, 46, 47,16,38,17,91.1,18,32,18,93.1,17,37,40,39];// [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61] [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92][97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13][122, 120, 99, 118, 98, 110, 109, 44, 46, 47]

function init() {
    let res = '';
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if ((index === 14)||( index === 28)||( index === 41)||( index === 54)) {
            res+='<div class="clear" ></div>';
        }
        switch (element) {
            case 192:
                res+='<div class="key" data="' + element +  '">' + '`' + '</div>';
                break;
        case 8:
            res+='<div class="big_key" data="' + element +  '">' + 'Backspace' + '</div>';
            break;
            case 9:
                res+='<div class="big_key" data="' + element +  '">' + 'Tab' + '</div>';
                break;
                case 20:
                res+='<div class="big_key" data="' + element +  '">' + 'CapsLk' + '</div>';
                break;
                case 13:
                res+='<div class="big_key" data="' + element +  '">' + 'Enter' + '</div>';
                break;
                case 16:
                res+='<div class="big_key" data="' + element +  '">' + 'Shift' + '</div>';
                break;
                case 38:
                res+='<div class="key" data="' + element +  '">' + '<img src="" alt="pic1">' + '</div>';
                break;
                case 17:
                res+='<div class="big_key" data="' + element +  '">' + 'Ctrl' + '</div>';
                break;
                case 91.1:
                res+='<div class="key" data="' + element +  '">' + 'win' + '</div>';
                break;
                case 18:
                res+='<div class="key" data="' + element +  '">' + 'Alt' + '</div>';
                break;
                case 93.1:
                res+='<div class="key" data="' + element +  '">' + 'notice' + '</div>';
                break;
                case 37:
                res+='<div class="key" data="' + element +  '">' + '<' + '</div>';
                break;
                case 39:
                res+='<div class="key" data="' + element +  '">' + '>' + '</div>';
                break;
                case 40:
                res+='<div class="key" data="' + element +  '">' + '<img src="" alt="pic2">' + '</div>';
                break;
                case 32:
                    res+='<div class="special_key" data="' + element +  '">' + '' + '</div>';
                    break;
            default:
                res+='<div class="key" data="' + element +  '">' + String.fromCharCode(element) + '</div>';
                break;
        };
    

    };
    document.querySelector('#board').innerHTML = res;
}
init();
document.onkeypress = function (event){
    document.querySelectorAll('#board .key').forEach(element => {
        element.classList.remove('active');
    });
    document.querySelectorAll('#board .big_key').forEach(element => {
        element.classList.remove('active');
    });
    document.querySelectorAll('#board .special_key').forEach(element => {
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
    