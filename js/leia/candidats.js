function lodiv(element){
  if($("#lotext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#lotext").load("programmes/lo.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#lotext").empty();
    $(element).text('Dérouler')
  }
};

function pcfdiv(element){
  if($("#pcftext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#pcftext").load("programmes/pcf.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#pcftext").empty();
    $(element).text('Dérouler')
  }
};

function lfidiv(element){
  if($("#lfitext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#lfitext").load("programmes/lfi.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#lfitext").empty();
    $(element).text('Dérouler')
  }
};

function eelvdiv(element){
  if($("#eelvtext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#eelvtext").load("programmes/eelv.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#eelvtext").empty();
    $(element).text('Dérouler')
  }
};

function generationsdiv(element){
  if($("#generationstext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#generationstext").load("programmes/generations.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#generationstext").empty();
    $(element).text('Dérouler')
  }
};

function psdiv(element){
  if($("#pstext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#pstext").load("programmes/ps.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#pstext").empty();
    $(element).text('Dérouler')
  }
};

function enfantsdiv(element){
  if($("#enfantstext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#enfantstext").load("programmes/enfants.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#enfantstext").empty();
    $(element).text('Dérouler')
  }
};

function edediv(element){
  if($("#edetext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#edetext").load("programmes/ede.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#edetext").empty();
    $(element).text('Dérouler')
  }
};

function ricdiv(element){
  if($("#rictext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#rictext").load("programmes/ric.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#rictext").empty();
    $(element).text('Dérouler')
  }
};

function animalistediv(element){
  if($("#animalistetext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#animalistetext").load("programmes/anim.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#animalistetext").empty();
    $(element).text('Dérouler')
  }
};

function lremdiv(element){
  if($("#lremtext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#lremtext").load("programmes/lrem.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#lremtext").empty();
    $(element).text('Dérouler')
  }
};

function udidiv(element){
  if($("#uditext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#uditext").load("programmes/udi.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#uditext").empty();
    $(element).text('Dérouler')
  }
};

function lrdiv(element){
  if($("#lrtext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#lrtext").load("programmes/lr.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#lrtext").empty();
    $(element).text('Dérouler')
  }
};

function dlfdiv(element){
  if($("#dlftext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#dlftext").load("programmes/dlf.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#dlftext").empty();
    $(element).text('Dérouler')
  }
};

function uprdiv(element){
  if($("#uprtext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#uprtext").load("programmes/upr.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#uprtext").empty();
    $(element).text('Dérouler')
  }
};

function patriotesdiv(element){
  if($("#patriotestext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#patriotestext").load("programmes/patriotes.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#patriotestext").empty();
    $(element).text('Dérouler')
  }
};

function rndiv(element){
  if($("#rntext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#rntext").load("programmes/rn.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#rntext").empty();
    $(element).text('Dérouler')
  }
};

$("#howtovote").load("programmes/commentvoter.html");

function genericclose(id) {
    // on trouve le premier bouton, dans le titre de la liste
    // et alors on change son texte de "Fermer" vers "Dérouler"
    var first_button = $(id).parent().children(".alignitformeplease").children();
    first_button.text('Dérouler');
    $(id).empty();
};

function loclose(){
  genericclose("#lotext");
};

function pcfclose(){
  genericclose("#pcftext");
};

function lficlose(){
  genericclose("#lfitext");
}

function eelvclose(){
    genericclose("#eelvtext");
};

function generationsclose(){
  genericclose("#generationstext");
};

function psclose(){
  genericclose("#pstext");
};

function enfantsclose(){
  genericclose("#enfantstext");
};

function edeclose(){
  genericclose("#edetext");
};

function lremclose(){
  genericclose("#lremtext");
};

function udiclose(){
  genericclose("#uditext");
};

function ricclose(){
  genericclose("#rictext");
};

function animalisteclose(){
  genericclose("#animalistetext");
};

function lrclose(){
  genericclose("#lrtext");
};

function dlfclose(){
  genericclose("#dlftext");
};

function uprclose(){
  genericclose("#uprtext");
};

function patriotesclose(){
  genericclose("#patriotestext");
};

function rnclose(){
  genericclose("#rntext");
};
