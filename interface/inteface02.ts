/**
 * Created by Ad8888 on 2016/12/21.
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}
var mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    var result = source.search(subString)
    if (result != -1) {
        return true
    } else {
        return false
    }
}