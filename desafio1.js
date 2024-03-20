const calcular = (function calcular(){
    function potencia(){
        let n1 = 3;
        let expoente = 2;
        console.log(n1 ** expoente);
    }
    function areaQuadrado(){
        let lado = 10;
        console.log(lado * lado);
    }
    function trianguloRet(){
        let base = 4;
        let altura = 2;
        console.log((base * altura)/2) 
    }
    return {
        potencia() {
            potencia();
        }, 
        areaQuadrado() {
            areaQuadrado();
        },
        trianguloRet() {
            trianguloRet();
        }
    }
})();

calcular.potencia();
calcular.areaQuadrado();
calcular.trianguloRet();
//feito