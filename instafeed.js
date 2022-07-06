<style>
.instafeed {
  height:150px;
  text-align:center;
  overflow:hidden;
}

.instafeed img {
  height:150px; /* height:10em;*/
  width:150px; /* width:10em;*/
  object-fit:cover;
}

@media screen and (max-width: 800px) {
  .instafeed {
    height:250px;
  }
  .instafeed img {
    height:125px;
    width:125px;
  }
}

@media screen and (max-width: 600px) {
  .instafeed {
    height:200px;
  }
  .instafeed img {
    height:100px;
    width:100px;
  }
}
</style>
<div class="ig">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!--https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0/src/instafeed.min.js-->
<script src="https://unpkg.com/instafeed.js@2.0.0/dist/instafeed.js"></script>
<script type="text/javascript">
  $.getJSON("https://ig.instant-tokens.com/users/1d55f8ff-2133-4175-9f7e-4e9b03aa6dea/instagram/17841401991641440/token?userSecret=s8agkf6gpi9wfwbrrejv6", function(json) {
    var reecoil_dot_com = new Instafeed({
      accessToken: json.Token,
      target: 'reecoil_dot_com',
      limit: 15,
      template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /></a>'
    });
    reecoil_dot_com.run();
  });
  $.getJSON("https://ig.instant-tokens.com/users/1d55f8ff-2133-4175-9f7e-4e9b03aa6dea/instagram/17841445803071624/token?userSecret=vjy3rnfg4v81anet0a9lgq", function(json) {
    var reecoil_arb = new Instafeed({
      accessToken: json.Token,
      target: 'reecoil_arb',
      limit: 15,
      template: '<a href="\{\{link\}\}"><div class="instafeed-container" style="display:inline-block;clear:both;"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /></div></a>'
    });
    reecoil_arb.run();
  });
  $.getJSON("https://ig.instant-tokens.com/users/1d55f8ff-2133-4175-9f7e-4e9b03aa6dea/instagram/17841452731774870/token?userSecret=i4374zdo3rn9zx51cmjm", function(json) {
    var reecoil_adventure = new Instafeed({
      accessToken: json.Token,
      target: 'reecoil_adventure',
      limit: 15,
      template: '<a href="\{\{link\}\}"><div class="instafeed-container" style="display:inline-block;clear:both;"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /></div></a>'
    });
    reecoil_adventure.run();
  });
</script>
<div class="instafeed" id="reecoil_dot_com"></div>
<div class="instafeed" id="reecoil_arb"></div>
<div class="instafeed" id="reecoil_adventure"></div>
</div>
