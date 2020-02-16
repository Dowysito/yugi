var main = [];
var extra = [];
var side = [];

function leer() {
    const file = document.getElementById('file').files[0];
    const result = document.getElementById('result');
    const reader = new FileReader;
    var type = "main";
    var texto;
    reader.addEventListener('load', () => {
        main=[];
        extra=[];
        side=[];
        texto=reader.result;
        let lineas = texto.split('\n');
        lineas.forEach(element => {
            if (element.substr(0,1)!=="#"&&element.substr(0,1)!=="!"){
                if (element!==""){
                    if (type==="main"){
                        main.push(element)
                    }
                    else if (type==="extra"){
                        extra.push(element)
                    }
                    else{
                        side.push(element)
                    }
                }
            }
            else{
                if (element.substr(0,2)==="#m"){
                    type="main"
                }
                else if (element.substr(0,2)==="#e"){
                    type="extra"
                }
                else if (element.substr(0,2)==="!s"){
                    type="side"
                }
            }
        });
    });
    reader.readAsText(file, 'UTF-8');

}

function write() {
    console.log(main)
    var blob = new Blob(["This is my first text."], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "testfile1.txt");
}
