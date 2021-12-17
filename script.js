//clickイベント
// $('#add').on('click', function(){
$('#add').on('click',()=>{
    // valの記述
    const key = $('#key').val();
    console.log('key', key);

    const value = $("#add").val();
    console.log('value',value);

    localStorage.setItem(key,value);

    //todoリストに追加する記述 
    const html = '<li>' + key + '</li>';
    $("ul").append(html);


    // // doneボタンの記述 
    const doneButton = document.createElement('button');
    doneButton.innerText = 'done';
    $("li").append(doneButton);


    // doneボタンをclisckしたら線がつく
    doneButton.addEventListener('click' , () =>{
        const li =doneButton.closest('li');
        li.classList.add('done');
    }) 

    // カレンダーの記述
    const calendar = document.createElement('calendar');
    doneButton.innerText = 'done';
    $("li").append(calendar);

});
