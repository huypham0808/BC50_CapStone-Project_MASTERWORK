var btnSwitchMoon = document.getElementById('btnSwitchMoon').onclick = function () {
    document.getElementById('body').className = "dark__header";

    document.getElementById('btnSwitchSun').style.display = "inline-block";
    document.getElementById('btnSwitchMoon').style.display = "none";

    document.getElementById('header').style.backgroundColor = '#131617';
    navLink[1].style.color = '#eee';
    navLink[1].addEventListener('mouseout', () => {
        navLink[1].style.color = '#eee';
    });

    navLink[2].style.color = '#eee';
    navLink[2].addEventListener('mouseout', () => {
        navLink[2].style.color = '#eee';
    });

    navLink[3].style.color = '#eee';
    navLink[3].addEventListener('mouseout', () => {
        navLink[3].style.color = '#eee';
    });

    navLink[4].style.color = '#eee';
    navLink[4].addEventListener('mouseout', () => {
        navLink[4].style.color = '#eee';
    });
    
    document.getElementsByClassName('fa-caret-down')[0].style.color = '#eee';

    document.getElementsByClassName('dropdown-menu')[0].style.backgroundColor = 'black';
    document.getElementsByClassName('dropdown-menu')[0].style.border = '2px solid #333';

    
    dropdownItem[0].style.backgroundColor = 'black';
    dropdownItem[1].style.backgroundColor = 'black';
    dropdownItem[2].style.backgroundColor = 'black';

    dropdownItem[0].style.color = '#eee';
    dropdownItem[0].addEventListener('mouseout', () => {
        dropdownItem[0].style.color = '#eee';
    });
    dropdownItem[1].style.color = '#eee';
    dropdownItem[1].addEventListener('mouseout', () => {
        dropdownItem[1].style.color = '#eee';
    });
    dropdownItem[2].style.color = '#eee';
    dropdownItem[2].addEventListener('mouseout', () => {
        dropdownItem[2].style.color = '#eee';
    });

    dropdownItem[0].addEventListener('mouseover', () => {
        dropdownItem[0].style.backgroundColor = 'black';
    });
    dropdownItem[1].addEventListener('mouseover', () => {
        dropdownItem[1].style.backgroundColor = 'black';
    });
    dropdownItem[2].addEventListener('mouseover', () => {
        dropdownItem[2].style.backgroundColor = 'black';
    });


    document.getElementsByClassName('content')[0].style.backgroundImage = 'linear-gradient(to right, #131617, rgba(255, 255, 255, 0.92)), url(../images/banner.jpg)';
    carouselh3[0].style.color = '#eee';
    carouselp[0].style.color = '#b7b7b7';
    document.getElementById('tools').style.backgroundColor = '#131617';
    card[0].style.backgroundColor = '#191c1d';
    card[1].style.backgroundColor = '#191c1d';
    card[2].style.backgroundColor = '#191c1d';
    card[0].style.border = '1px solid #191c1d';
    card[1].style.border = '1px solid #191c1d';
    card[2].style.border = '1px solid #191c1d';

card[0].style.backgroundColor = '#191c1d';
    card[0].addEventListener('mouseout', () => {
        card[0].style.backgroundColor = '#191c1d';
    });
    card[1].style.backgroundColor = '#191c1d';
    card[1].addEventListener('mouseout', () => {
        card[1].style.backgroundColor = '#191c1d';
    });
    card[2].style.backgroundColor = '#191c1d';
    card[2].addEventListener('mouseout', () => {
        card[2].style.backgroundColor = '#191c1d';
    });
    card[0].addEventListener('mouseover', () => {
        card[0].style.backgroundColor = '#131617';
    });
    
    card[1].addEventListener('mouseover', () => {
        card[1].style.backgroundColor = '#131617';
    });
    
    card[2].addEventListener('mouseover', () => {
        card[2].style.backgroundColor = '#131617';
    });
    card[0].style.border = '1px solid #191c1d';
    card[0].addEventListener('mouseout', () => {
        card[0].style.border = '1px solid #191c1d';
    });
    card[1].style.border = '1px solid #191c1d';
    card[1].addEventListener('mouseout', () => {
        card[1].style.border = '1px solid #191c1d';
    });
    card[2].style.border = '1px solid #191c1d';
    card[2].addEventListener('mouseout', () => {
        card[2].style.border = '1px solid #191c1d';
    });
    card[0].addEventListener('mouseover', () => {
        card[0].style.border = '1px solid #333';
    });
    
    card[1].addEventListener('mouseover', () => {
        card[1].style.border = '1px solid #333';
    });
    
    card[2].addEventListener('mouseover', () => {
        card[2].style.border = '1px solid #333';
    });
    toolsToph3[0].style.color = '#eee';
    toolsTopp[0].style.color = '#b7b7b7';
    cardbodyh4[0].style.color = '#eee';
    cardbodyh4[1].style.color = '#eee';
    cardbodyh4[2].style.color = '#eee';
    cardbodyp[0].style.color = '#b7b7b7';
    cardbodyp[1].style.color = '#b7b7b7';
    cardbodyp[2].style.color = '#b7b7b7';
    abouth3[0].style.color = '#eee';
    aboutp[0].style.color = '#b7b7b7';

    document.getElementById('aboutOur').style.backgroundColor = '#191c1d';

    ourClientSlider[2].style.backgroundColor = '#131617';
    ourClientSlider[3].style.backgroundColor = '#131617';
    ourClientSlider[4].style.backgroundColor = '#131617';
    ourClientSlider[5].style.backgroundColor = '#131617';
    // document.getElementsByClassName('fa-quote-left')[0].style.color = 'red';

}
var btnSwitchSun = document.getElementById('btnSwitchSun').onclick = function () {
    document.getElementById('body').classList.remove("dark__header");
    document.getElementById('btnSwitchMoon').style.display = "inline-block";
    document.getElementById('btnSwitchSun').style.display = "none";

    document.getElementById('header').style.backgroundColor = 'white';
    navLink[1].style.color = '#2C3038';
    navLink[1].addEventListener('mouseout', () => {
        navLink[1].style.color = '#2C3038';
    });

    navLink[2].style.color = '#2C3038';
    navLink[2].addEventListener('mouseout', () => {
        navLink[2].style.color = '#2C3038';
    });

    navLink[3].style.color = '#2C3038';
    navLink[3].addEventListener('mouseout', () => {
        navLink[3].style.color = '#2C3038';
    });

    navLink[4].style.color = '#2C3038';
    navLink[4].addEventListener('mouseout', () => {
        navLink[4].style.color = '#2C3038';
    });
    document.getElementsByClassName('fa-caret-down')[0].style.color = '#2c3038';
    document.getElementsByClassName('dropdown-menu')[0].style.backgroundColor = '#fff';
    document.getElementsByClassName('dropdown-menu')[0].style.border = '2px solid #eee';

    dropdownItem[0].style.color = '#2C3038';
    dropdownItem[0].addEventListener('mouseout', () => {
        dropdownItem[0].style.color = '#2C3038';
    });
    dropdownItem[1].style.color = '#2C3038';
    dropdownItem[1].addEventListener('mouseout', () => {
        dropdownItem[1].style.color = '#2C3038';
    });
    dropdownItem[2].style.color = '#2C3038';
    dropdownItem[2].addEventListener('mouseout', () => {
        dropdownItem[2].style.color = '#2C3038';
    });

    dropdownItem[0].style.backgroundColor = '#fff';
    dropdownItem[1].style.backgroundColor = '#fff';
    dropdownItem[2].style.backgroundColor = '#fff';
    dropdownItem[0].addEventListener('mouseover', () => {
        dropdownItem[0].style.backgroundColor = '#fff';
    });
    dropdownItem[1].addEventListener('mouseover', () => {
        dropdownItem[1].style.backgroundColor = '#fff';
    });
    dropdownItem[2].addEventListener('mouseover', () => {
        dropdownItem[2].style.backgroundColor = '#fff';
    });
    document.getElementsByClassName('content')[0].style.backgroundImage = 'linear-gradient(to right, #fff, rgba(255, 255, 255, 0.92)), url(../images/banner.jpg)';
    carouselh3[0].style.color = '#2c3038';
    carouselp[0].style.color = '#5a5a5a';
    document.getElementById('tools').style.backgroundColor = 'white';
    card[0].style.backgroundColor = 'white';
    card[1].style.backgroundColor = 'white';
    card[2].style.backgroundColor = 'white';
    card[0].style.border = '1px solid #fafbfc';
    card[1].style.border = '1px solid #fafbfc';
    card[2].style.border = '1px solid #fafbfc';
    card[0].style.backgroundColor = '#f7f9fc';
    card[0].addEventListener('mouseout', () => {
        card[0].style.backgroundColor = '#f7f9fc';
    });
    card[1].style.backgroundColor = '#f7f9fc';
    card[1].addEventListener('mouseout', () => {
        card[1].style.backgroundColor = '#f7f9fc';
    });
    card[2].style.backgroundColor = '#f7f9fc';
    card[2].addEventListener('mouseout', () => {
        card[2].style.backgroundColor = '#f7f9fc';
    });
    card[0].addEventListener('mouseover', () => {
        card[0].style.backgroundColor = '#fafbfc';
    });
    
    card[1].addEventListener('mouseover', () => {
        card[1].style.backgroundColor = '#fafbfc';
    });
    
    card[2].addEventListener('mouseover', () => {
        card[2].style.backgroundColor = '#fafbfc';
    });
    card[0].style.border = '1px solid #f7f9fc';
    card[0].addEventListener('mouseout', () => {
        card[0].style.border = '1px solid #f7f9fc';
    });
    card[1].style.border = '1px solid #f7f9fc';
    card[1].addEventListener('mouseout', () => {
        card[1].style.border = '1px solid #f7f9fc';
    });
    card[2].style.border = '1px solid #f7f9fc';
    card[2].addEventListener('mouseout', () => {
        card[2].style.border = '1px solid #f7f9fc';
    });
    card[0].addEventListener('mouseover', () => {
        card[0].style.border = '1px solid #fafbfc';
    });
    
    card[1].addEventListener('mouseover', () => {
        card[1].style.border = '1px solid #fafbfc';
    });
    
    card[2].addEventListener('mouseover', () => {
        card[2].style.border = '1px solid #fafbfc';
    });
    toolsToph3[0].style.color = '#2C3038';
    toolsTopp[0].style.color = '#5a5a5a';
    cardbodyh4[0].style.color = '#2C3038';
    cardbodyh4[1].style.color = '#2C3038';
    cardbodyh4[2].style.color = '#2C3038';
    cardbodyp[0].style.color = '#5a5a5a';
    cardbodyp[1].style.color = '#5a5a5a';
    cardbodyp[2].style.color = '#5a5a5a';
    abouth3[0].style.color = '#2c3038';
    aboutp[0].style.color = '#5a5a5a';

    document.getElementById('aboutOur').style.backgroundColor = '#F7F9FC';

    ourClientSlider[2].style.backgroundColor = '#fff';
    ourClientSlider[3].style.backgroundColor = '#fff';
    ourClientSlider[4].style.backgroundColor = '#fff';
    ourClientSlider[5].style.backgroundColor = '#fff';
    
}

const navLink = document.getElementsByClassName('nav-link');
const dropdownItem = document.getElementsByClassName('dropdown-item');
const carouselh3 = document.getElementsByClassName('carouselh3');
const carouselp = document.getElementsByClassName('carouselp');
const card = document.getElementsByClassName('card');
const toolsToph3 = document.getElementsByClassName('toolsToph3');
const toolsTopp = document.getElementsByClassName('toolsTopp');
const cardbodyh4 = document.getElementsByClassName('cardbodyh4');
const cardbodyp = document.getElementsByClassName('cardbodyp');
const abouth3 = document.getElementsByClassName('abouth3');
const aboutp = document.getElementsByClassName('aboutp');
const ourClientSlider = document.getElementsByClassName('ourClientSlider');
const ourClientp = document.getElementsByClassName('ourClientp');
const ourClienth4 = document.getElementsByClassName('ourClienth4');
const ourClientp2 = document.getElementsByClassName('ourClientp2');


navLink[1].style.color = '#2C3038';
    navLink[1].addEventListener('mouseout', () => {
        navLink[1].style.color = '#2C3038';
    });

    navLink[2].style.color = '#2C3038';
    navLink[2].addEventListener('mouseout', () => {
        navLink[2].style.color = '#2C3038';
    });

    navLink[3].style.color = '#2C3038';
    navLink[3].addEventListener('mouseout', () => {
        navLink[3].style.color = '#2C3038';
    });

    navLink[4].style.color = '#2C3038';
    navLink[4].addEventListener('mouseout', () => {
        navLink[4].style.color = '#2C3038';
    });

navLink[1].addEventListener('mouseover', () => {
    navLink[1].style.color = '#DC4F72';
});

navLink[2].addEventListener('mouseover', () => {
    navLink[2].style.color = '#DC4F72';
});

navLink[3].addEventListener('mouseover', () => {
    navLink[3].style.color = '#DC4F72';
});

navLink[4].addEventListener('mouseover', () => {
    navLink[4].style.color = '#DC4F72';
});
dropdownItem[0].addEventListener('mouseover', () => {
    dropdownItem[0].style.color = '#DC4F72';
});
dropdownItem[1].addEventListener('mouseover', () => {
    dropdownItem[1].style.color = '#DC4F72';
});
dropdownItem[2].addEventListener('mouseover', () => {
    dropdownItem[2].style.color = '#DC4F72';
});
dropdownItem[0].addEventListener('mouseout', () => {
    dropdownItem[0].style.color = '#2c3038';
});
dropdownItem[1].addEventListener('mouseout', () => {
    dropdownItem[1].style.color = '#2c3038';
});
dropdownItem[2].addEventListener('mouseout', () => {
    dropdownItem[2].style.color = '#2c3038';
});