<style>
.image-wrapper {
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  justify-content: space-around;
  margin: 0 auto 30px;
  max-width: 965px;
  min-height: 100px;
  position: relative;
  width: 100%;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(1) {
  animation-delay: 0.1s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(2) {
  animation-delay: 0.2s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(3) {
  animation-delay: 0.3s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(4) {
  animation-delay: 0.4s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(5) {
  animation-delay: 0.5s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(6) {
  animation-delay: 0.6s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(7) {
  animation-delay: 0.7s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(8) {
  animation-delay: 0.8s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(9) {
  animation-delay: 0.9s;
}

.insta-page {
  padding: 10px;
}

.image-item {
  animation: slide-item 0.3s ease forwards;
  box-sizing: border-box;
  flex: 1 0 33%;
  transform: translateY(250px);
  visibility: hidden;
  width: 100%;
}
.image-item:nth-child(10) {
  animation-delay: 1s;
}

.insta-page {
  padding: 10px;
}

.image {
  display: block;
  position: relative;
  transition: all 0.17s cubic-bezier(0.4, 0, 1, 1);
  width: 100%;
}
.image img {
  display: block;
  max-width: 100%;
  object-fit:cover;
}

@keyframes slide-item {
  60% {
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
}
@keyframes fadeIn {
  0% {
    transform: translateX(-150px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://wanderstories.space/assets/js/instafeed.min.js"></script>
<script type="text/javascript">
  $.getJSON("https://ig.instant-tokens.com/users/c9193176-c12e-4304-adfe-41cfcee1e993/instagram/17841445803071624/token?userSecret=cnc2pqelmbv9e4tjla0kwt", function(json) {
    var reecoil = new Instafeed({
      accessToken: json.Token,
      target: 'reecoil',
      limit: 9,
      template: '<div class="image-item insta-page">' +
      '<a class="image insta-image" href="{{image}}">' +
      '<img src="{{image}}" alt="{{user.full_name}}" />' +
      '</a>' +
      '</div>'
    });
    reecoil.run();
  });
</script>
<div id="reecoil" class="image-wrapper"></div>
