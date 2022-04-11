<style>
#instafeed0, #instafeed1, #instafeed2 {
  height:150px;
  text-align:center;
  overflow:hidden;
}

#instafeed0 img, #instafeed1 img, #instafeed2 img {
  height:150px; /* height:10em;*/
  width:150px; /* width:10em;*/
  object-fit:cover;
}

@media screen and (max-width: 800px) {
  #instafeed0, #instafeed1, #instafeed2 {
    height:250px;
  }
  #instafeed0 img, #instafeed1 img, #instafeed2 img {
    height:125px;
    width:125px;
  }
}

@media screen and (max-width: 600px) {
  #instafeed0, #instafeed1, #instafeed2 {
    height:200px;
  }
  #instafeed0 img, #instafeed1 img, #instafeed2 img {
    height:100px;
    width:100px;
  }
}
</style>
<div class="instafeed">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!--https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0/src/instafeed.min.js-->
<script src="https://unpkg.com/instafeed.js@2.0.0/dist/instafeed.js"></script>
<script type="text/javascript">
  $.getJSON("https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841401991641440/token?userSecret=kemneddo5l9ndndcwovb7q", function(json) {
    var instafeed1 = new Instafeed({
      accessToken: json.Token,
      target: 'instafeed1',
      limit: 15,
      template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /></a>'
    });
    instafeed1.run();
  });
  $.getJSON("https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841445803071624/token?userSecret=dv3s20k9o3qdb4ibj60l2", function(json) {
    var instafeed2 = new Instafeed({
      accessToken: json.Token,
      target: 'instafeed2',
      limit: 15,
      template: '<a href="\{\{link\}\}"><div class="instafeed-container" style="display:inline-block;clear:both;"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /></div></a>'
    });
    instafeed2.run();
  });
</script>
<div id="instafeed1"></div>
<div id="instafeed2"></div>
</div>
