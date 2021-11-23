<template>
    <link href='https://fonts.googleapis.com/css?family=Athiti' rel='stylesheet'>

  <router-view></router-view>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>


<style>
:root {
  --blue: #808AFF;
  --white: #ffffff;
  --lightblue: #626CDB;
  --hoverblue: #626CDB;
  --greytext: #444444;
  --lightyellow: #feffb8;
  --verylightyellow: #ffffe2;
  --lightgrey: #d9dde0;
  --mediumgrey: #c4c5c5;
  --green: #2eb800;
  --red: #bd1c00;
}

* {
  margin: 0;
  padding: 0;
  font-family: Athiti, sans-serif;
  font-size: 18px;
}

body {
  background: white
}

.page-container {
  display: block;
  width: 70%;
  max-width: 1920px;
  margin: 30px;

  margin-left: auto;
  margin-right: auto;
}

.outer-wrapper {
  background: rgba(255, 255, 255, 1);
  padding: 12px 12px 12px 12px;
  border-radius: 4px;
  min-height: 300px;
}

ion-icon {
  margin-right: 6px;
  margin-left: 6px;
}

button,
input,
select {
  margin: 2px 2px 2px 2px;
}

div {
  margin: 6px 6px 6px 6px;
}

/* Button styling */

.btn {
  height: 2.8em;
  display: inline-flex;
  align-items: center; /*Vertical align*/
  justify-content: center; /*horizontal align*/
  vertical-align: middle;
  border-radius: 4px;
  padding: 2px 10px 2px 10px;
  min-width: 150px;
}
.primary {
  color: var(--white);
  border: 1px solid var(--blue);
  background: var(--blue);
}

.primary:hover {
  background: var(--lightblue);
}

.primary ion-icon {
  color: var(--white);
}

.secondary {
  color: var(--blue);
  border: 1px solid var(--blue);
  background: var(--white);
}

.secondary ion-icon {
  color: var(--blue);
}

.tertiary {
  color: var(--greytext);
  border: 1px solid var(--lightgrey);
  background: var(--white);
}

.tertiary ion-icon {
  color: var(--blue);
}

.icon-only{
 border: none;
 color: var(--blue);
 background: var(--white);
 min-width: 0px;
 padding: 0px 0px 0px 0px;
 height:1.0em;
}

.filter-selected{
 border: 1px solid var(--blue);
 color: var(--blue);
 background: var(--white);
 min-width: 80px;
   padding: 2px 5px 2px 0px;
   height: 2.3em;
   font-size: 14px;
}

.filter-unselected{
 border: 1px solid var(--greytext);
  color: var(--greytext);
  background: var(--white);
  min-width: 80px;
  padding: 2px 5px 2px 0px;
  height: 2.3em;
  font-size: 14px;

}


/* container styling */

.container {
  border: 1px solid var(--lightgrey);
  border-radius: 4px;
  width: 100%;
}

.expandable-container {
  border: 1px solid var(--lightgrey);
  border-radius: 4px;
}

/* Text styling */

h1{
 font-family: 'Athiti';
 font-size: 44px;
 font-weight: 900
}

h2 {
  font-size: 30px;
  font-weight: normal
}

h3{
  font-size: 18px;
  font-weight: normal
}

</style>
