            
            var form =this.document.getElementById("my-form");
            form.add



            var statuss=this.document.getElementById("status");
            function success(){
                form.reset();
                button.style="display :none";
                statuss.innerHTML="Thanks !";

            }
            function error(){
                statuss.innerHTML="Oops , there was a problem";

            }

        