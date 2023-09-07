exports.turncate =turncate ;

function turncate(str){
        if (str.length > 10) {
            return (str.substring(0, 10) + "...");
        }
        else {
        return str;
    }
}