//  Math.random() lay ngau nhie:
// Math.round() Lam tron ceil len floor xuong


Solanmua=0;

Somuonmua = -1;
const somuaduoc = 93;

// for(;Somuonmua != somuaduoc;){
//     Somuonmua = Math.floor( Math.random()*100);
//     console.log("Lan thu: " + ++Solanmua + "  Mua duoc: " + Somuonmua)
// }

while(Somuonmua != somuaduoc){
    Somuonmua = Math.floor(Math.random()*100);
    console.log(` lan mua  ${++Solanmua}  Mua duoc so  ${Somuonmua}`);
}