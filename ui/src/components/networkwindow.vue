<template>
<div>
<div id="myElement">
  <div class="row m-4">
  <div class="col-lg-3"></div> 
  <div v-on:click="clickLeft" id="leftArrow" class="col-lg-2 m-2"><span class="glyphicon glyphicon-chevron-left">{{networks[0]}}</span></div>
<div id="swipeText" class="col-lg-2"><h1>{{ networks[1] }}</h1></div>
  <div v-on:click="clickRight" id="rightArrow"class="col-lg-2 m-2"><span class="glyphicon glyphicon-chevron-right">{{networks[2]}}</span></div>
  <div class="col-lg-3"></div> 
  </div>
</div>
</div>
</template>

<script>



export default {

  data() {
    return {
      networks:['cnn','msnbc','fox'],
      network:'cnn'
    }
  },
  
  computed:{
    msg(){
      return this.$store.state[this.network]
    }
  },
  methods:{

    clickLeft(){
        let x = this.networks.shift();
        this.networks.push(x);
    },
    clickRight(){
        let x = this.networks.pop();
        this.networks.unshift(x);
    },
    enableSwipe(){
      document.getElementById('myWindow').addEventListener('touchstart', handleTouchStart);        
      document.getElementById('myWindow').addEventListener('touchmove', handleTouchMove);
      var xDown = null;                                                        
      var yDown = null;

    },
    getTouches(evt){
        return evt.touches ||             // browser API
        evt.originalEvent.touches;
    },
    handleTouchStart(evt){
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
        document.getElementById('myWindow').addEventListener('touchstart', handleTouchStart); 
    },
    handleTouchMove(evt){
        if ( ! xDown || ! yDown ) {
          return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */ 
                document.getElementById("swipeText").innerHTML = "<p>I find your styling unattractive</p>";
            } else {
                /* right swipe */
                document.getElementById("swipeText").innerHTML = "<p>you have real style</p>";
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
        document.getElementById('myWindow').addEventListener('touchmove', handleTouchMove);
    
    },
    homeReady(){
      var w = window.innerWidth; 
      if (w < 1000){
        // hide clickables
        document.getElementById("leftArrow").style.visibility = "hidden";
        document.getElementById("rightArrow").style.visibility = "hidden";
        this.enableSwipe();
      } else {
        // add event listener for clickables
        document.getElementById("leftArrow").addEventListener("click",this.clickLeft);
        document.getElementById("rightArrow").addEventListener("click",this.clickRight);
      }

    },
  },
  created(){
    this.homeReady();
  }

}

</script>

