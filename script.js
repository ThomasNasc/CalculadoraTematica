function insert(num) {

    let numero = document.calc.resultado.value
    let limite = 20

    if (numero.length < limite) {
        document.calc.resultado.value = numero + num

    } else {
        alert("Número máximo de caracteres atingido")
    }
    let ultimo = numero.substr(-1);
    operadores = ["+", "*", "/"]
    for (let i = 0; i < 3; i++) {
        // console.log(operadores[i])
        if (ultimo == operadores[i] && num == operadores[i]) {
            var resultado = document.calc.resultado.value;
            document.calc.resultado.value = resultado.substring(0, resultado.length - 1)
            resultado = numero + num
        }
    }
}

function clean() {
    document.calc.resultado.value = ""

}

function back() {
    var resultado = document.calc.resultado.value;
    document.calc.resultado.value = resultado.substring(0, resultado.length - 1)

}


function result() {

    var resultado = document.calc.resultado.value

    document.calc.resultado.value = eval(resultado)
    console.log = eval(resultado)

}



function test(n) {
    let n1 = n

    if (n1 == 1) {
        document.querySelector('#botao0').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao1').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao2').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao3').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao4').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao5').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao6').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao7').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao8').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botao9').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botaosom').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botaomen').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botaodiv').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botaomult').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.querySelector('#botaodot').style.cssText =
            'background-color:#E5E4E0;color: #383730; box-shadow: 0px 3px #B0A79A'
        document.getElementById('section1').style.cssText =
            'background-color: #D3CDCD;'
        document.getElementById('reset').style.cssText =
            " color: white;   background-color: #388187;          box-shadow: 0px 3px #1C5F67;"
        document.getElementById("del").style.cssText =
            "background-color: #388285; color: white; box-shadow: 0px 3px #1C5F67;;"
        document.getElementById("result").style.cssText =
            "background-color: #C85401; box-shadow: 0px 3px #863A05;"
        document.getElementById("resultado").style.cssText =
            "background-color: #D1CDCE; color: #38382D;"
        document.getElementById("header").style.cssText =
            "background-color: #E6E6E6;"
        document.getElementById("body").style.cssText =
            "background-color: #E6E6E6;"
        document.getElementById("test").style.cssText =
            "all: unset; -webkit-appearance: none;background-color: #D2CDCD;width: 50px;border-radius: 50px;height: 15px;padding: 3px;position: fixed;top: 30px;right: 0px;"
        document.getElementById("calc").style.cssText =
            "color: #38382C;"
        document.getElementById("NUMEROS").style.cssText =
            "color: #38382C;"
        document.getElementById("theme").style.cssText =
            "color:#38382C;"

    } else if (n1 == 2) {
        document.querySelector('#botao0').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao1').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao2').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao3').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao4').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao5').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao6').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao7').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao8').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botao9').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botaosom').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botaomen').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botaodiv').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botaomult').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.querySelector('#botaodot').style.cssText =
            'background-color:#331B4D;color: #FFFF00; box-shadow: 0px 3px #861C9D'
        document.getElementById('section1').style.cssText =
            'background-color: #1E0836;'
        document.getElementById('reset').style.cssText =
            " color: white;   background-color: #56077C;          box-shadow: 0px 3px # 861 C9D;"
        document.getElementById("del").style.cssText =
            "background - color: #56077C; color: white;"
        document.getElementById("result").style.cssText =
            "background-color: #00DECF; box-shadow: 0px 3px #3E6D83;"
        document.getElementById("resultado").style.cssText =
            "background-color: #1E0836; color: yellow;"
        document.getElementById("header").style.cssText =
            "background-color: #170629;"
        document.getElementById("body").style.cssText =
            "background-color: #170629;"
        document.getElementById("test").style.cssText =
            "all: unset; -webkit-appearance: none;background-color: #2a1244;width: 50px;border-radius: 50px;height: 15px;padding: 3px;position: fixed;top: 30px;right: 0px;"
        document.getElementById("calc").style.cssText =
            "color: yellow;"
        document.getElementById("NUMEROS").style.cssText =
            "color: yellow;"
        document.getElementById("theme").style.cssText =
            "color: yellow;"



    } else if (n1 == 3) {


        document.querySelector('#botao0').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao1').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao2').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao3').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao4').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao5').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao6').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao7').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao8').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botao9').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botaomen').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botaosom').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botaodiv').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botaomult').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.querySelector('#botaodot').style.cssText =
            'background-color:#EAE3DB;color: #252D44; box-shadow: 0px 3px #B3A49D'
        document.getElementById('section1').style.cssText =
            'background-color: #252D44;'

        document.getElementById('reset').style.cssText =
            " color: white;   background-color: #647299;          box-shadow: 0px 3px #2F3B58;"
        document.getElementById("del").style.cssText =
            "background-color: #647298; color: #F1F3F6;box-shadow: 0px 3px #465279"
        document.getElementById("result").style.cssText =
            "background-color: #D13F30; box-shadow: 0px 3px #8E261B; color: #F1F3F6"
        document.getElementById("resultado").style.cssText =
            "background-color: #252C47; color: #FBFAFB;"
        document.getElementById("header").style.cssText =
            "background-color: #3B4664;"
        document.getElementById("body").style.cssText =
            "background-color: #3B4664;"
        document.getElementById("test").style.cssText =
            "all: unset; -webkit-appearance: none;background-color: #252C46;width: 50px;border-radius: 50px;height: 15px;padding: 3px;position: fixed;top: 30px;right: 0px;"
        document.getElementById("calc").style.cssText =
            "color: #FCFDFE;"
        document.getElementById("NUMEROS").style.cssText =
            "color: #FCFDFE;"
        document.getElementById("theme").style.cssText =
            "color:#FCFDFE;"


    }
}