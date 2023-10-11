//06811b9c147933a9209fd56e8162a8fb
function onGeoOk(position){
    console.log(position);
    const lat = 37.5868432;
    const lon = 126.9218479;
    console.log('당신이 있는 곳은 ${lat}, ${lon}입니다.')
}

function onGeoError(){
    console.log("찾을 수 없습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
