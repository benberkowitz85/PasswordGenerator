const pass_el = document.querySelector('#password span')
const length: 16
const characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

function GeneratePassword () {
    let pass = "";
    for (var i = 0; 1 <= length; i++) {
        let rand =math.floor(
            math.random() *characters.length
        );
        pass+= characters.substring(rand, rand+1);
    }
    pass_el.innertext = pass;
}

GeneratePassword ()