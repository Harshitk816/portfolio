	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }


    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('html-bar');
            } else {
                entry.target.classList.remove('html-bar');
            }
        });
    });
    
    document.querySelectorAll('#html').forEach(div => { 
        observer.observe(div);
    });

    let observer1 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('css-bar');
            } else {
                entry.target.classList.remove('css-bar');
            }
        });
    });
    
    
    document.querySelectorAll('#css').forEach(div => { 
        observer1.observe(div);
    });

    let observer2 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('js-bar');
            } else {
                entry.target.classList.remove('js-bar');
            }
        });
    });
    
    document.querySelectorAll('#js').forEach(div => { 
        observer2.observe(div);
    });

    let observer3 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('react-bar');
            } else {
                entry.target.classList.remove('react-bar');
            }
        });
    });
    
    document.querySelectorAll('#react').forEach(div => { 
        observer3.observe(div);
    });

    let observer4 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('mongo-bar');
            } else {
                entry.target.classList.remove('mongo-bar');
            }
        });
    });
    
    document.querySelectorAll('#mongo').forEach(div => { 
        observer4.observe(div);
    });

    let observer5 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('tailwind-bar');
            } else {
                entry.target.classList.remove('tailwind-bar');
            }
        });
    });
    
    document.querySelectorAll('#tailwind').forEach(div => { 
        observer5.observe(div);
    });


    let observer6 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('bootstrap-bar');
            } else {
                entry.target.classList.remove('bootstrap-bar');
            }
        });
    });
    
    document.querySelectorAll('#bootstrap').forEach(div => { 
        observer6.observe(div);
    });

    let observer7 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('oops-bar');
            } else {
                entry.target.classList.remove('oops-bar');
            }
        });
    });
    
    document.querySelectorAll('#oops').forEach(div => { 
        observer7.observe(div);
    });


    let observer8 = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('express-bar');
            } else {
                entry.target.classList.remove('express-bar');
            }
        });
    });
    document.querySelectorAll('#express').forEach(div => { 
        observer8.observe(div);
    });