<template>
  <div class="myheader">
    <a href="/" class="logo">
      <svg id="svg" height="70" width="70">
        <polygon points="10,0 60,0 60,40 50,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style="fill:green;stroke:white;stroke-width:5;"/>
        <polygon points="10,50 60,50 60,40 40,40 40,30 30,30 30,20 20,20 20,10 10,10" style="fill:green;stroke:white;stroke-width:5;">
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="5" dur="0.2s" begin="0.2s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="5" to="0" dur="0.1s" begin="0.5s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="5" dur="0.2s" begin="0.7s" fill="freeze"/>
          <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="5" to="0" dur="0.1s" begin="1s" fill="freeze"/>
        </polygon>
        <circle cx="30" cy="10" r="5" style="fill:white;stroke:black;stroke-width:2;" />
        <circle cx="30" cy="10" r="2" style="fill:black;" />
        <polygon points="45,40 50,30 55,40" style="fill:white;"/>
      </svg>
    </a>
    <div class="myheader-right">
      <router-link to="/about">
      <div>
      <svg id="svg" height="70" width="70">
        <polygon points="25,20 35,20 35,40 25,40" style="fill:white;stroke:black;stroke-width:2;"/>
        <polygon points="30,25 30,35" style="stroke:black;stroke-width:2;"/>
        <circle cx="30" cy="10" r="5" style="fill:white;stroke:black;stroke-width:2;" />
        <circle cx="30" cy="10" r="2" style="fill:black;" />
      </svg>


      </div>
      </router-link>
    </div>
  </div>

</template>


<style>
#svg{
text-align:center;
float:center;
}

.myheader {
  z-index:10;
  width:100%;  
  height:90px;
  position:absolute;
  /*overflow:hidden;*/
  padding: 5px;
  font-family: 'Share Tech', sans-serif;
  top:0;
}

.myheader a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  color: red;
}

.myheader a:visited{
  color:red;
}
/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.myheader a.logo {
}
.myheader a:hover {
  
  color:#e3aaed;
  text-decoration:none;
}
.myheader-right {
  float:right; 
  display:inline;
  color:red;
  font-family: 'Share Tech', sans-serif;
}
.myheader-right > div {
  display:inline-block;
  height:20px;
  width:25%;
  padding:11px;
  margin-bottom:16px;
  position:relative;
  text-align:center;
}
  
.myheader-right > div > button {
  background-color: transparent;
  color:red;
}
.myheader-right > div > button:hover {
  color:gray;
  text-decoration:none;
}
</style>

