function WorkingWithFunctions() {

    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

    return(
        <div>
            <h3>Working With Arrays</h3>
            numberArray1 = 12345 <br/>
            stringArray1 = string1string2 <br/>
            variableArray1 = {variableArray1} <br/>
        </div>
    )
}
export default WorkingWithFunctions;