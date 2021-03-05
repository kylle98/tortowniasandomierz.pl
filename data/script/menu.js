    isClose = true;
    function menusetting(action) 
    {
        if ( action == 1 ) 
        {
            for ( let i = 0; i < document.getElementsByClassName("mobile-button").length; i++ ) 
            {
                document.getElementsByClassName("mobile-button")[i].style.display = "none";
            }
            document.getElementsByClassName("mobile-oppacity")[0].style.display = "none";
            document.getElementsByClassName("mobile")[0].style.display = "none";
            isClose = true;
        } 
        else
        {
            if ( isClose )
            {
                for ( let i = 0; i < document.getElementsByClassName("mobile-button").length; i++ ) {
                    document.getElementsByClassName("mobile-button")[i].style.display = "block";
                }
                document.getElementsByClassName("mobile-oppacity")[0].style.display = "block";
                document.getElementsByClassName("mobile")[0].style.display = "block";
                isClose = false;
            }
            else 
            {
                for ( let i = 0; i < document.getElementsByClassName("mobile-button").length; i++ ) 
                {
                    document.getElementsByClassName("mobile-button")[i].style.display = "none";
                }
                document.getElementsByClassName("mobile-oppacity")[0].style.display = "none";
                document.getElementsByClassName("mobile")[0].style.display = "none";
                isClose = true;
            }
        }
    }
