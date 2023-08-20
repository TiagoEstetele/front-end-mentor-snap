if(window.innerWidth > 900) {
    desktopHeader();
} else {
    mobileHeader();
}


function desktopHeader() {

    const headerButtons = $$j('.h-header__links > ul > li');

    headerButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const isDropdown = this.querySelector('.h-header__dropdown') !== null;
            const dropdown =  this.querySelector('.h-header__dropdown');
            const svgElement = button.querySelector('a svg');
            

            if(isDropdown) {
            dropdown.toggleAttribute('show');
            svgElement.toggleAttribute('animate');

            }

        })

        button.addEventListener('mouseleave', function() {
            const dropdown =  this.querySelector('.h-header__dropdown');
            const svgElement = button.querySelector('a svg');

            if(dropdown !== null && dropdown.hasAttribute('show')) {
                dropdown.removeAttribute('show');
                svgElement.removeAttribute('animate');
            }
        })
    });


    window.addEventListener('DOMContentLoaded', function() {
        headerButtons.forEach(( button ) => {
            const isDropdown = button.querySelector('.h-header__dropdown') !== null;
            const svgElement = button.querySelector('a svg');

            if (isDropdown) {
                svgElement.toggleAttribute('icon'); 
            }
        })
    });
}

function mobileHeader() {
      
    const headerButtons = $$j('.h-header__links > ul > li');

    headerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isDropdown = this.querySelector('.h-header__dropdown') !== null;
            const dropdown =  this.querySelector('.h-header__dropdown');
            const svgElement = button.querySelector('a svg');
            

            if(isDropdown) {
            dropdown.toggleAttribute('show');
            svgElement.toggleAttribute('animate');

            }

        })
    });

    window.addEventListener('DOMContentLoaded', function() {
        headerButtons.forEach(( button ) => {
            const isDropdown = button.querySelector('.h-header__dropdown') !== null;
            const svgElement = button.querySelector('a svg');

            if (isDropdown) {
                svgElement.toggleAttribute('icon'); 
            }
        })
    });

    const menuHamburguer = $j('.h-header__nav > button');
    const nav = $j('.h-header__links');

    menuHamburguer.addEventListener('click', function() {
        nav.toggleAttribute('active');
        menuHamburguer.toggleAttribute('animate');
    })
}