// event bubbling onClickChild method calls first , inner to out ( event is bubbling out the DOM tree )
// event trikling down or capturing moves outer to inner 
// useCapture:true is used to enable event capturing, default is event bubble

document.querySelector("#parent")
.addEventListener("click",() => {
    console.log("parentClicked")
},false) 


{
    <div id="grandParent" >
        <div id="Parent" >
            <div id="Children" >

            </div>
        </div>
    </div>
}