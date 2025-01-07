let button = document.querySelector('button');
let text = document.querySelector('input');
let app = document.querySelector('ul');
let remove = function(){

}
let newli = function() {
    
    if(text.value === ''){
        alert("please add task first");
    }
    else{
        let g = document.createElement('li');
        let del = document.createElement('button');
        del.innerText = 'Delete Task';
        g.innerText = text.value;
        // g.style.display = 'inline-block';
        // del.style.margin ='50px'
        g.style.color = 'white';
        g.style.textDecoration = 'bold'
        g.style.margin = '4px'
        g.style.fontSize = '25px'
        g.appendChild(del);
        app.append(g);
        del.style.position = 'absolute';
        del.style.right = '400px'
        del.style.border = 'none'
        del.style.borderRadius = '5%'
        del.style.backgroundColor = '#da627d';
        del.style.margin = '10px'
        
        del.addEventListener('click', remove);
        // app.appendChild(del);
        text.value = '';
        del.addEventListener('click', () => {
            g.remove();
            del.remove();
        })
        del.addEventListener('mouseover', function() {
            this.style.border = '2px solid black';
        });
        del.addEventListener('mouseout', function() {
            this.style.border = 'none';
        });
        
    }
}

button.addEventListener('click', newli);