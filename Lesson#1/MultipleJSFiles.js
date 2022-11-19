/*
MULTIPLE JS Files
https://stackoverflow.com/questions/8752627/how-can-i-split-a-javascript-application-into-multiple-files
 */

//file main.js
var namespacename = function(){}

namespacename.mainvalue = 5;

namespacename.maintest = function() {
    var cm = new namespacename.game();
    cm.callme();
}

// file game.js
namespacename.gamevalue = 15;

namespacename.game = function(){
    this.callme = function(){
        console.log( "callme" );
    }
}

namespacename.gametest = function() {
    console.log( "gametest:gamevalue:" + this.gamevalue );
    console.log( "gametest:mainvalue:" + this.mainvalue );
}

// file index.html
<html>
<head>
    <title>testbed</title>
</head>

<body onLoad="init();">
</body>

<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="game.js"></script>

<script type="text/javascript">

    init = function ()
    {
        namespacename.maintest();
        namespacename.gametest();

        console.log( "html main:" + namespacename.mainvalue );
        console.log( "html game:" + namespacename.gamevalue );
    }

</script>
</html>