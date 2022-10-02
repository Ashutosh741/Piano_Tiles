const div = `<div class="individualBox">
<div class="box1"></div>
<div class="box1"></div>
<div class="box1"></div>
<div class="box1"></div>
</div>`;

document.querySelector(".box").addEventListener("click",()=>
{
    document.createElement(div);
})