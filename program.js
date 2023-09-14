function insert(num){
    document.form.ht.value = document.form.ht.value + num;
}function back(){
    var hasil= document.form.ht.value;
     document.form.ht.value = hasil.substring(0,hasil.length-1);

}function clear1(){
     document.form.ht.value = "";

}function samd(){
    var hasil=document.form.ht.value;
    document.form.ht.value = eval(hasil);
}