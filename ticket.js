function scrollToTicketSection(){
    document.getElementById('scrollToTicketSection').scrollIntoView({behavior: 'smooth'});
}
let count=0;
let availableSeats=40;

function changeSeatBackground(element){
    let seat=document.getElementById(element);
    
    if(count<4 && !seat.classList.contains('selected')){
        seat.style.backgroundColor= '#1DD100';
        count++;
        availableSeats--;
        document.getElementById('availableSeat').innerText=availableSeats;
        seat.classList.toggle('selected');

    } 
    else if(count<5 && seat.classList.contains('selected'))
    {
        seat.style.backgroundColor= '#F7F8F8';
        count--;
        availableSeats++;
        document.getElementById('availableSeat').innerText=availableSeats;
        seat.classList.remove('selected');

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