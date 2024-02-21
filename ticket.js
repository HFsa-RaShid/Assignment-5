function scrollToTicketSection(){
    document.getElementById('scrollToTicketSection').scrollIntoView({behavior: 'smooth'});
}
let count=0;
let availableSeats=40;
let countBookedSeats = 0;

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
function info()
{
    
}