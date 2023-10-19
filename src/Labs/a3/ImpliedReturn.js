function ImpliedReturn () {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <>
            <h3>ImpliedReturn</h3>
            fourTimesFive = {fourTimesFive} <br/>
            multiply(4, 5) = {fourTimesFive}
        </>
    )
} export default ImpliedReturn