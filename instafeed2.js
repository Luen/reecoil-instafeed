<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
#instafeed0, #instafeed1, #instafeed2 {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

#instafeed0 img, #instafeed1 img, #instafeed2 img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  #instafeed0, #instafeed1, #instafeed2 {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  #instafeed0, #instafeed1, #instafeed2 {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
<div class="row">
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
      //template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" style="height:150px;width:150px;object-fit:cover;" /><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /></a>'
      template: '<img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" />'
    });
    reecoil.run();
  });
  $.getJSON("https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841445803071624/token?userSecret=cnc2pqelmbv9e4tjla0kwt", function(json) {
    var reecoilArb = new Instafeed({
      accessToken: json.Token,
      target: 'instafeed2',
      limit: 15,
      template: '<img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" />'
      //template: '<a href="\{\{link\}\}"><div class="instafeed-container" style="display:inline-block;clear:both;"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" style="height:10em;width:10em;object-fit:cover;" /></div></a>'
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
/*
  $.getJSON("https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841445803071624/token?userSecret=cnc2pqelmbv9e4tjla0kwt", function(json) {
    var reecoilArb = new Instafeed({
      accessToken: json.Token,
      target: 'instafeed0',
      limit: 15,
      template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /></a>'
      //template: '<a href="\{\{link\}\}" target="_blank" rel="noopener"><div class="instafeed-container" style="width:16.666667%;padding-top:16.666667%;"><img class="js-lazy-image js-lazy-image--handled" style="width:100%;height:100%;" src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" /><div style="width:100%;height:100%;" class="instafeed-overlay "></div></div></a>'
      //template: '<a href="\{\{link\}\}"><img src="\{\{image\}\}" alt="\{\{location\}\}" loading="lazy" style="height:150px;width:150px;object-fit:cover;" /></a>'
    });
    reecoilArb.run();
  });
  */

</script>
<div id="instafeed0" style=""></div>
<div id="instafeed1" style=""></div>
<div id="instafeed2" style=""></div>
</div>
