/***************************************
    Project: Best Web Design 2024
    * Team: Wingman
    * Members:
        1. 23IT199 - Tran Hoang Nhat
        2. 23IT189 - Nguyen Huu Nhan
        3. 23IT124 - Huynh Quoc Khanh
        4. 23IT080 - Trinh Duy Hieu
    * Website:
        <website>
            <Brand>GGWear</Brand>
            <Type>Fashion</Type> 
        </website>
***************************************/

(function() {
    document.addEventListener('DOMContentLoaded', (e) => {
        navbarEl = document.querySelector('.navbar');
        const position = navbarEl.clientTop + navbarEl.clientHeight + 350;
  
        window.addEventListener('scroll', function () {
            if (window.scrollY > position) {
                navbarEl.classList.add('fixed');
            } else if (window.scrollY < position) {
                navbarEl.classList.remove('fixed');
            }
        })
    });
})();
