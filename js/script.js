const card=document.getElementById('card');
const submit=document.getElementById('submit');
const numsDiv=document.querySelectorAll('#number-container .num');

let chosenNum;

numsDiv.forEach((elem,i)=>{
    
    elem.addEventListener('click',(e)=>{
        
        [].forEach.call(numsDiv,(el)=>{
            el.classList.remove('active-div')
            
        });
       
        e.target.classList.add('active-div');
        chosenNum=e.target.innerHTML;
    })
})


submit.addEventListener('click',()=>{
    card.innerHTML=` <div class="content2">
    <div><img src="./images/illustration-thank-you.svg" alt="" /></div>
    <div><p>You selected ${chosenNum} out of 5</p></div>
    <div>
      <h2>Thank you</h2>
      <div>
        <p>We appreciated you taking the time to give a rating.
        If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  </div>`;

})