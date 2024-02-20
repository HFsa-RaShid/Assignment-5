function scrollToTicketSection(){
    document.getElementById('scrollToTicketSection').scrollIntoView({behavior: 'smooth'});
}
let count=0;
let availavleSeats=40;

function changeSeatBackground(element){
    
    if(count<4){
        element.style.backgroundColor= '#1DD100';
        count++;
        availavleSeats--;
        document.getElementById('availavleSeat').innerText=availavleSeats;

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