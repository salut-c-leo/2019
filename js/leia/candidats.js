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

function npadiv(element){
  if($("#npatext").text().length == 0) {
    /* si le programme n'est pas encore chargé, l'afficher */
    $("#npatext").load("programmes/npa.html");
    $(element).text('Fermer');
  }
  else {
    /* sinon, le masquer */
    $("#npatext").empty();
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


function loclose(){
  $("#lotext").empty();
};

function npaclose(){
  $("#npatext").empty();
};

function pcfclose(){
  $("#pcftext").empty();
};

function lficlose(){
  $("#lfitext").empty();
}

function eelvclose(){
  $("#eelvtext").empty();
};

function generationsclose(){
  $("#generationstext").empty();
};

function psclose(){
  $("#pstext").empty();
};

function edeclose(){
  $("#edetext").empty();
};

function lremclose(){
  $("#lremtext").empty();
};

function ricclose(){
  $("#rictext").empty();
};

function animalisteclose(){
  $("#animalistetext").empty();
};

function lrclose(){
  $("#lrtext").empty();
};

function dlfclose(){
  $("#dlftext").empty();
};

function uprclose(){
  $("#uprtext").empty();
};

function rnclose(){
  $("#rntext").empty();
};