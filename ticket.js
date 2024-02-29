function scrollToTicketSection(){
    document.getElementById('scrollToTicketSection').scrollIntoView({behavior: 'smooth'});
}


let count=0;
let availableSeats=16;
let countBookedSeats = 0;
let totalAmount=0;
let discountAmount=0;
let grandAmount=0;
let num=0;

function changeSeatBackground(element){
    let seat=document.getElementById(element);
    let tableInformation= document.getElementById('tableBody');
    let newRow= tableInformation.getElementsByTagName('tr');
    
    if(count<4 && !seat.classList.contains('selected')){
        seat.style.backgroundColor= '#1DD100';
        count++;
        availableSeats--;
        document.getElementById('availableSeat').innerText=availableSeats;
        seat.classList.add('selected');

        // Append td data

        
        let row= document.createElement('tr');

        let seatName= document.createElement('td');
        let seatClass= document.createElement('td');
        let seatPrice= document.createElement('td');

        seatName.textContent = element;
        seatClass.textContent = "Economy";
        seatPrice.textContent = '550';

        row.appendChild(seatName);
        row.appendChild(seatClass);
        row.appendChild(seatPrice);

        tableInformation.appendChild(row);

        // countBookedSeats
        countBookedSeats++;
        document.getElementById('countBookedSeats').innerText= countBookedSeats;

        // Total Amount
        totalAmount += 550;
         document.getElementById('totalAmount').innerText=totalAmount;

         
         grandAmount = totalAmount ;
        document.getElementById('grandAmount').innerText=grandAmount;


        //  button enable

         if(countBookedSeats===4)
         {
            document.getElementById('cuponBtn').removeAttribute('disabled');
         }

    } 
    else if(count<5 && seat.classList.contains('selected'))
    {
        seat.style.backgroundColor= '#F7F8F8';
        count--;
        availableSeats++;
        document.getElementById('availableSeat').innerText=availableSeats;
        seat.classList.remove('selected');

        countBookedSeats--;
        document.getElementById('countBookedSeats').innerText= countBookedSeats;

        // Total Amount
        totalAmount -= 550;
         document.getElementById('totalAmount').innerText=totalAmount;

         grandAmount = totalAmount ;
        document.getElementById('grandAmount').innerText=grandAmount;
        

        for(let i=0;i<newRow.length;i++)
        {
            let cell = newRow[i].getElementsByTagName('td');
            if(cell.length>0 && cell[0].textContent===element)
            {
                tableInformation.removeChild(newRow[i]);
                break;

            }

        }

        

    }
    else
    {
        openModal();
    }

}



function openModal()
{
    document.getElementById('my_modal_5').showModal();

}
function closeModal()
{
    document.getElementById('my_modal_5').close();

}

// for valid coupon
function validCouponModal()
{
    document.getElementById('modal').showModal();

}
function closeModal()
{
    document.getElementById('modal').close();

}



 document.getElementById('cuponCode').addEventListener('keyup',function(event){
    const text = event.target.value;
    if(text==='NEW15')
    {
        num=1;
        discountAmount = totalAmount * 0.15; 
        
    }
    else if(text==='Couple 20'){
        discountAmount = totalAmount * 0.2;
        num=1;    
    }
    
 })
 document.getElementById('cuponBtn').addEventListener('click',function(event){
    if(num===1){
        document.getElementById('cuponDiv').style.display = 'none';
    document.getElementById('discountAmount').innerText=discountAmount;
    grandAmount = totalAmount - discountAmount;
        document.getElementById('grandAmount').innerText=grandAmount;

    }
    else{
        validCouponModal();

    }
    
 })
 
//  refresh all info

function refresh(){
    location.reload();
}






 