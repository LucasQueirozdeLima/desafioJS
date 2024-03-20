const sumUtils = (function sumUtils() {
    let value = 0;
    function bombaPatch(pontos) {
        return value += pontos;
    }

    return {
        rasteira(){
            return bombaPatch(-1);
        },
        golaco(){
            return bombaPatch(1);
        },
        placar(){
            console.log(value);
        }
    }
})();
sumUtils.placar();

sumUtils.golaco();
sumUtils.golaco();
sumUtils.placar();


sumUtils.rasteira();
sumUtils.placar();