const alertList =document.querySelector('#alert-List');
const setUIAlerts = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        const li=`
         <li>
            <h3>${alert.alertName}</h3>
            <p>${alert.alertDiscription}</p>
            <span>${alert.geolocation}</span>
         </li>
        `;
        html +=li;
    });
    alertList.innerHTML=html;
};
