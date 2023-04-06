console.log("Task 3 wordt goed ingeladen");

const myName = { 
    name: 'Riza Incedal',
    class: 'T1N',
    favfood: 'Hamburger',
    showName : function () { alert(this.name); },
    showClass : function() { alert(this.class); },
    showFavfood : function() { alert(this.favfood); },
    
 
};

function intro () {
    alert('Mijn naam is' myName.showName() 'en ik zit in' myName.showClass() 'Mijn gerecht is' myName.showFavfood() );
}

const Btn = document.querySelector('.id');
Btn.addEventListener('click', intro);
