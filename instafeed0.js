<div class="placeholder-noblocks">
<!--<script src="https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js"></script>-->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!--<script src="https://cdn.jsdelivr.net/npm/instafeed@1.4.0/dist/InstagramFeed.min.js"></script>-->
<script src="https://wanderstories.space/assets/js/instafeed.min.js"></script>
<script type="text/javascript">
  $.getJSON("https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841401991641440/token?userSecret=m3u05incvmgkbibioctnds", function(json) {
    var reecoil = new Instafeed({
      accessToken: json.Token,
      target: 'instafeed1',
      limit: 15,
      template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" style="height:150px;width:150px;object-fit:cover;" /></a>'
    });
    reecoil.run();
  });
  $.getJSON("https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841445803071624/token?userSecret=cnc2pqelmbv9e4tjla0kwt", function(json) {
    var reecoilArb = new Instafeed({
      accessToken: json.Token,
      target: 'instafeed2',
      limit: 15,
      template: '<a href="\{\{link\}\}"><div class="instafeed-container" style="display:inline-block;clear:both;"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" style="height:10em;width:10em;object-fit:cover;" /></div></a>'
      //template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" style="height:150px;width:150px;object-fit:cover;" /></a>'
    });
    reecoilArb.run();
  });
/*
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: 'https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841445803071624/token?userSecret=cnc2pqelmbv9e4tjla0kwt',
      success: function (response) {
          var feed = new Instafeed({
              target: 'instafeed1',
              accessToken: response.Token,
              limit: 15,
              template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" style="height:150px;width:150px;object-fit:cover;" /></a>'
          });
          feed.run();
      }
    });
*/

  $.getJSON("https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841445803071624/token?userSecret=cnc2pqelmbv9e4tjla0kwt", function(json) {
    var reecoilArb = new Instafeed({
      accessToken: json.Token,
      target: 'instafeed0',
      limit: 15,
      template: '<a href="\{\{link\}\}" target="_blank" rel="noopener"><div class="instafeed-container" style="width:16.666667%;padding-top:16.666667%;"><img class="js-lazy-image js-lazy-image--handled" style="width:100%;height:100%;" src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /><div style="width:100%;height:100%;" class="instafeed-overlay "></div></div></a>'
      //template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" style="height:150px;width:150px;object-fit:cover;" /></a>'
    });
    reecoilArb.run();
  });
</script>
<div id="instafeed0" style="height:150px;text-align:center;overflow:hidden;"></div>
<!--<div id="instafeed1" style="height:150px;text-align:center;overflow:hidden;"></div>
<div id="instafeed2" style="height:10em;text-align:center;overflow:hidden;"></div>-->
</div>
