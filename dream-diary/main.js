const entries = document.getElementById('entries')

let everyEntry = []

function createEntry(){
    let entry = document.createElement('div');
    let entryDetails = document.createElement('div');
    let entryText = document.createElement('div');
    let selectTime = document.createElement('input');
    let dateOfEntry = document.createElement('p');
    let titleOfEntry = document.createElement('input');
    let dreamEntry = document.createElement('textarea');
    let entryObject = new Object();
    dreamEntry.innerText = "Click para editar el sueño";
    titleOfEntry.setAttribute('type', 'text')
    titleOfEntry.setAttribute('placeholder', 'Añadir Titulo')
    entry.classList.add('entry');
    entryText.classList.add('entryText')
    entryDetails.classList.add('entryDetails');
    selectTime.setAttribute('type', 'text');

    let date = new Date();  
    dateOfEntry.innerHTML = date.toLocaleString('es-AR', {
        day: 'numeric', 
        month: 'numeric',
    })
    entryObject.date = dateOfEntry.innerText
    console.log(dateOfEntry.innerText)

    entryText.appendChild(titleOfEntry);
    entryText.appendChild(dreamEntry);
    entryDetails.appendChild(dateOfEntry);
    entryDetails.appendChild(selectTime);
    entry.appendChild(entryText)
    entry.appendChild(entryDetails)
    entries.appendChild(entry);  
    
    titleOfEntry.addEventListener('change',function(){
        entryObject.title = titleOfEntry.value;
        saveAA()
    })

    dreamEntry.addEventListener('change', function(){
        entryObject.entry = dreamEntry.value;
        saveAA()
        console.log(everyEntry)
    })

    selectTime.addEventListener('change', function(){
        entryObject.time = selectTime.value;
        everyEntry.unshift(entryObject);
        saveAA()
    })
}

function saveAA(){
    localStorage.setItem('dreamArray', JSON.stringify(everyEntry));
    if(localStorage.getItem("dreamArray") != null){
      console.log(`so ${JSON.parse(localStorage.getItem('dreamArray'))}`)
    }
  }

if(localStorage.getItem("dreamArray") != null){
    everyEntry = JSON.parse(localStorage.getItem("dreamArray"));

    everyEntry.forEach(function(item, index) {
        let entry = document.createElement('div');
        let entryDetails = document.createElement('div');
        let entryText = document.createElement('div');
        let selectTime = document.createElement('p');
        let dateOfEntry = document.createElement('p');
        let titleOfEntry = document.createElement('h2');
        let dreamEntry = document.createElement('textarea');
        dreamEntry.innerText = item.entry;
        titleOfEntry.setAttribute('type', 'text')
        titleOfEntry.innerText = item.title
        entry.classList.add('entry');
        entryText.classList.add('entryText')
        entryDetails.classList.add('entryDetails');

        selectTime.innerText = item.time
        dateOfEntry.innerHTML = item.date

        entryText.appendChild(titleOfEntry);
        entryText.appendChild(dreamEntry);
        entryDetails.appendChild(dateOfEntry);
        entryDetails.appendChild(selectTime);
        entry.appendChild(entryText)
        entry.appendChild(entryDetails)
        entries.appendChild(entry);  
    })
    }
