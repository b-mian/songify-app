(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(t,e,c){"use strict";c.r(e);var s=c(0),n=c.n(s),a=c(38),i=c.n(a),r=(c(44),c(45),c(1)),l=function(){return Object(r.jsx)("div",{className:"login-btn-container",children:Object(r.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=4362dfe6f5c244dbbc69cff0883518c4&response_type=code&redirect_uri=https://songify-music.herokuapp.com/&scope=streaming%20user-read-email%20playlist-modify-public%20playlist-modify-private%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-top-read%20user-modify-playback-state%20playlist-read-private",children:Object(r.jsx)("button",{className:"btn btn-success btn-lg",children:"Login with Spotify"})})})},o=c.p+"static/media/headphone.06c1bee8.png",u=function(t){t.code;return Object(r.jsxs)("div",{className:"landing-container",children:[Object(r.jsxs)("div",{className:"title-pic",children:[Object(r.jsx)("h1",{className:"landing-title",children:"Songify"}),Object(r.jsx)("h3",{className:"landing-subheading",children:"Custom playlists based on two songs of your choice"}),Object(r.jsx)("img",{className:"headphone",style:{height:"360px",width:"360px"},src:o,alt:"headphone"})]}),Object(r.jsx)("div",{className:"mt-4 login-component",children:Object(r.jsx)(l,{})})]})},d=c(2),b=c(23),j=c.n(b);var h=c(9),m=c(21),f=c.n(m),O=c(24),p=new f.a({clientId:"4362dfe6f5c244dbbc69cff0883518c4"}),x=function(t){var e=function(t){var e=Object(s.useState)(),c=Object(d.a)(e,2),n=c[0],a=c[1],i=Object(s.useState)(),r=Object(d.a)(i,2),l=r[0],o=r[1],u=Object(s.useState)(),b=Object(d.a)(u,2),h=b[0],m=b[1];return Object(s.useEffect)((function(){j.a.post("/login",{code:t}).then((function(t){console.log(t.data),a(t.data.accessToken),o(t.data.refreshToken),m(t.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){console.log("Error")}))}),[t]),Object(s.useEffect)((function(){l&&h&&j.a.post("/refresh",{refreshToken:l}).then((function(t){a(t.data.accessToken),m(t.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){}))}),[l,h]),n}(t.code),c=Object(s.useState)(""),n=Object(d.a)(c,2),a=n[0],i=n[1],l=Object(s.useState)(""),o=Object(d.a)(l,2),u=o[0],b=o[1],m=Object(s.useState)([]),f=Object(d.a)(m,2),x=f[0],y=f[1],g=Object(s.useState)(null),k=Object(d.a)(g,2),N=k[0],v=k[1],S=Object(s.useState)(null),w=Object(d.a)(S,2),C=w[0],I=w[1],T=Object(s.useState)(!1),E=Object(d.a)(T,2),_=E[0],U=E[1],D=Object(s.useState)([]),P=Object(d.a)(D,2),A=P[0],J=P[1],L=Object(s.useState)([]),M=Object(d.a)(L,2),R=M[0],X=M[1],z=Object(s.useState)(!1),B=Object(d.a)(z,2);B[0],B[1];Object(s.useEffect)((function(){e&&p.setAccessToken(e)}),[e]),Object(s.useEffect)((function(){if(!a)return y([]),U(!1),v(null),I(null),J([]);v(null),console.log(A),p.searchTracks(a).then((function(t){J(t.body.tracks.items.map((function(t){var e=t.album.images.reduce((function(t,e){return e.height<t.height?e:t}),t.album.images[0]);return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,id:t.id,url:t.uri,albumUrl:e.url}})))}))}),[a,e]),Object(s.useEffect)((function(){if(!u)return y([]),U(!1),v(null),I(null),X([]);I(null),p.searchTracks(u).then((function(t){X(t.body.tracks.items.map((function(t){var e=t.album.images.reduce((function(t,e){return e.height<t.height?e:t}),t.album.images[0]);return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,id:t.id,url:t.uri,albumUrl:e.url}})))}))}),[u,e]);return Object(r.jsxs)("div",{className:"forms-container",children:[Object(r.jsx)("h1",{className:"landing-title",children:"Songify"}),Object(r.jsx)("h3",{className:"landing-subheading",children:"Custom playlists based on two songs of your choice"}),Object(r.jsxs)("form",{className:"search-form",children:[Object(r.jsxs)("div",{className:"form-group mt-4",children:[Object(r.jsx)("label",{for:"track1",children:"Choose Track 1"}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",onChange:function(t){return i(t.target.value)},id:"track1",placeholder:"Search Spotify"})]}),null===N?Object(r.jsx)("div",{className:"tracks-container",style:{display:""===a?"none":"block"},children:A.map((function(t){return Object(r.jsxs)(O.a.Item,{href:"#",onClick:function(){return v(t)},children:[Object(r.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]})}))}):Object(r.jsxs)("div",{className:"chosen-song",style:{display:null!==N?"block":"none"},children:[Object(r.jsx)("img",{src:N.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsxs)("h5",{className:"track-title",children:[N.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:N.artist}),Object(r.jsx)("button",{className:"btn cancel-song",onClick:function(){return v(null)},children:"X"})]}),Object(r.jsxs)("div",{className:"form-group mt-4",children:[Object(r.jsx)("label",{for:"track2",children:"Choose Track 2"}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",id:"track2",onChange:function(t){return b(t.target.value)},placeholder:"Search Spotify"})]}),null===C?Object(r.jsx)("div",{className:"tracks-container",style:{display:""===u?"none":"block"},children:R.map((function(t){return Object(r.jsxs)(O.a.Item,{href:"#",onClick:function(){return I(t)},children:[Object(r.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]})}))}):Object(r.jsxs)("div",{className:"chosen-song",style:{display:null!==C?"block":"none"},children:[Object(r.jsx)("img",{src:C.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsxs)("h5",{className:"track-title",children:[C.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:C.artist}),Object(r.jsx)("button",{className:"btn cancel-song",onClick:function(){return I(null)},children:"X"})]}),Object(r.jsx)(h.b,{to:"/",children:Object(r.jsx)("button",{type:"submit",onClick:function(){N&&C?(U(!0),p.getRecommendations({min_energy:.4,seed_artists:[N.artistID,C.artistID],seed_genres:[],seed_tracks:[N.id,C.id],min_popularity:50}).then((function(t){var e=t.body.tracks;y(e.map((function(t){return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,uri:t.uri,id:t.id}})))})).catch((function(t){console.log("Something went wrong!",t)}))):U(!1)},className:"btn btn-success mt-3",children:"Create Playlist"})}),null!==N&&null!==C&&x!==[]?Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"playlist-container",children:x.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]},t.id)}))})}):Object(r.jsx)("div",{}),!0===_&&null!==N&&null!==C?Object(r.jsx)(h.b,{to:"/",children:Object(r.jsx)("button",{className:"btn btn-success",onClick:function(){return function(){if(!N||!C)return U(!1),void y([]);var t=prompt("Give your playlist a name...");p.createPlaylist(t,{description:"My custom playlist from that cool Songify app",public:!1}).then((function(t){var e=t.body.id;p.addTracksToPlaylist(e,x.map((function(t){return t.uri}))).then((function(t){console.log("Added tracks to playlist!")})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))}()},children:"Export to Spotify"})}):Object(r.jsx)("div",{})]})]})},y=c(3),g=new URLSearchParams(window.location.search).get("code");var k=function(){return Object(r.jsx)(h.a,{children:Object(r.jsx)(y.c,{children:Object(r.jsx)(y.a,{path:"/",element:g?Object(r.jsx)(x,{code:g}):Object(r.jsx)(u,{})})})})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root"))},45:function(t,e,c){},82:function(t,e){}},[[100,1,2]]]);
//# sourceMappingURL=main.60e8f142.chunk.js.map