var x = document.getElementById("menu-burger-show");
 /*  if(window.innerWidth<=800)
   {
    x.style.display = "none";
   }
   else 
   x.style.display = "flex"; */

    function check() 
    {
        if (x.style.display === "none") 
        {
            x.style.display = "flex";
        }

        else 
        {
            x.style.display = "none";
        }
    }
    window.addEventListener('resize', resize);

    function resize() 
    {
        if(window.innerWidth<=800)
        {
         x.style.display = "none";
        }
        else 
        x.style.display = "flex";
    }

    window.addEventListener('load', resize);

    function resize() 
    {
        if(window.innerWidth<=800)
        {
         x.style.display = "none";
        }
        else 
        x.style.display = "flex";
    }