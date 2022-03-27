(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(t,e,c){"use strict";c.r(e);var s=c(0),a=c.n(s),n=c(37),i=c.n(n),l=(c(44),c(45),c(1)),r=function(){return Object(l.jsx)("div",{className:"login-btn-container",children:Object(l.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=4362dfe6f5c244dbbc69cff0883518c4&response_type=code&redirect_uri=https://www.playfulmusic-app.com/&scope=streaming%20user-read-email%20playlist-modify-public%20playlist-modify-private%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-top-read%20user-modify-playback-state%20playlist-read-private",children:Object(l.jsx)("button",{className:"btn btn-success btn-lg",children:"Login with Spotify"})})})},o=c.p+"static/media/headphone.fab80bce.png",u=function(){return Object(l.jsxs)("div",{className:"landing-container",children:[Object(l.jsxs)("div",{className:"title-pic",children:[Object(l.jsx)("h1",{className:"landing-title",children:"Playful"}),Object(l.jsx)("h3",{className:"landing-subheading",children:"Custom playlists based on two songs of your choice"}),Object(l.jsx)("h4",{className:"landing-subheading",children:"View track metadata of your new playlist"}),Object(l.jsx)("img",{className:"headphone",style:{height:"360px",width:"460px"},src:o,alt:"headphone"})]}),Object(l.jsx)("div",{className:"mt-4 login-component",children:Object(l.jsx)(r,{})})]})},d=c(2),h=c(22),b=c.n(h);var j=c(12),m=c(38),p=c.n(m),f=c(23),O=c.p+"static/media/logo.f222800d.png",x=new p.a({clientId:"4362dfe6f5c244dbbc69cff0883518c4"}),y=function(t){var e=function(t){var e=Object(s.useState)(),c=Object(d.a)(e,2),a=c[0],n=c[1],i=Object(s.useState)(),l=Object(d.a)(i,2),r=l[0],o=l[1],u=Object(s.useState)(),h=Object(d.a)(u,2),j=h[0],m=h[1];return Object(s.useEffect)((function(){b.a.post("https://www.playfulmusic-app.com/login",{code:t}).then((function(t){console.log(t.data),n(t.data.accessToken),o(t.data.refreshToken),m(t.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(t){console.log(t)}))}),[t]),Object(s.useEffect)((function(){r&&j&&b.a.post("https://www.playfulmusic-app.com/refresh",{refreshToken:r}).then((function(t){n(t.data.accessToken),m(t.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){}))}),[r,j]),a}(t.code),c=Object(s.useState)(""),a=Object(d.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)(""),o=Object(d.a)(r,2),u=o[0],h=o[1],m=Object(s.useState)([]),p=Object(d.a)(m,2),y=p[0],g=p[1],k=Object(s.useState)(null),N=Object(d.a)(k,2),w=N[0],v=N[1],S=Object(s.useState)(null),C=Object(d.a)(S,2),I=C[0],T=C[1],_=Object(s.useState)(!1),E=Object(d.a)(_,2),U=E[0],P=E[1],D=Object(s.useState)([]),A=Object(d.a)(D,2),J=A[0],L=A[1],M=Object(s.useState)([]),R=Object(d.a)(M,2),V=R[0],X=R[1];Object(s.useEffect)((function(){e&&x.setAccessToken(e)}),[e]),Object(s.useEffect)((function(){n||(g([]),P(!1),v(null)),console.log(J),x.searchTracks(n).then((function(t){L(t.body.tracks.items.map((function(t){var e=t.album.images.reduce((function(t,e){return e.height<t.height?e:t}),t.album.images[0]);return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,id:t.id,url:t.uri,albumUrl:e.url}})))}))}),[n,e]),Object(s.useEffect)((function(){u||(g([]),P(!1),T(null)),x.searchTracks(u).then((function(t){X(t.body.tracks.items.map((function(t){var e=t.album.images.reduce((function(t,e){return e.height<t.height?e:t}),t.album.images[0]);return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,id:t.id,url:t.uri,albumUrl:e.url}})))}))}),[u,e]);return Object(l.jsxs)("div",{className:"forms-container",children:[Object(l.jsx)("h1",{className:"landing-title",children:"Playful"}),Object(l.jsx)("h3",{className:"landing-subheading",children:"Custom playlists based on two songs of your choice"}),Object(l.jsx)("h4",{className:"landing-subheading",children:"View track metadata of your new playlist"}),Object(l.jsxs)("form",{className:"search-form",children:[Object(l.jsxs)("div",{className:"form-group mt-4",children:[Object(l.jsx)("label",{for:"track1",children:"Choose Track 1"}),Object(l.jsx)("input",{type:"text",className:"form-control mt-3",onChange:function(t){return i(t.target.value)},id:"track1",placeholder:"Search Spotify"})]}),null===w?Object(l.jsx)("div",{className:"tracks-container",style:{display:""===n?"none":"block"},children:J.map((function(t){return Object(l.jsxs)(f.a.Item,{href:"#",onClick:function(){return v(t)},children:[Object(l.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(l.jsx)("img",{src:O,style:{height:"18px",width:"18px"},alt:""}),Object(l.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(l.jsx)("h5",{className:"track-artist",children:t.artist})]})}))}):Object(l.jsxs)("div",{className:"chosen-song",style:{display:null!==w?"block":"none"},children:[Object(l.jsx)("img",{src:w.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(l.jsxs)("h5",{className:"track-title",children:[w.title," by "]}),Object(l.jsx)("h5",{className:"track-artist",children:w.artist}),Object(l.jsx)("button",{className:"btn cancel-song",onClick:function(){return v(null)},children:"X"})]}),Object(l.jsxs)("div",{className:"form-group mt-4",children:[Object(l.jsx)("label",{for:"track2",children:"Choose Track 2"}),Object(l.jsx)("input",{type:"text",className:"form-control mt-3",id:"track2",onChange:function(t){return h(t.target.value)},placeholder:"Search Spotify"})]}),null===I?Object(l.jsx)("div",{className:"tracks-container",style:{display:""===u?"none":"block"},children:V.map((function(t){return Object(l.jsxs)(f.a.Item,{href:"#",onClick:function(){return T(t)},children:[Object(l.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(l.jsx)("img",{src:O,style:{height:"18px",width:"18px"},alt:""}),Object(l.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(l.jsx)("h5",{className:"track-artist",children:t.artist})]})}))}):Object(l.jsxs)("div",{className:"chosen-song",style:{display:null!==I?"block":"none"},children:[Object(l.jsx)("img",{src:I.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(l.jsx)("img",{src:O,style:{height:"18px",width:"18px"},alt:""}),Object(l.jsxs)("h5",{className:"track-title",children:[I.title," by "]}),Object(l.jsx)("h5",{className:"track-artist",children:I.artist}),Object(l.jsx)("button",{className:"btn cancel-song",onClick:function(){return T(null)},children:"X"})]}),Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("button",{type:"submit",onClick:function(){return function(){if(!w||!I)return P(!1),void g([]);P(!0),x.getRecommendations({min_energy:.5,seed_artists:[w.artistID,I.artistID],seed_genres:[],seed_tracks:[w.id,I.id],min_popularity:60}).then((function(t){var e=t.body.tracks;g(e.map((function(t){return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,uri:t.uri,id:t.id}})))})).catch((function(t){console.log("Something went wrong!",t)}))}()},className:"btn btn-success mt-3",children:"Create Playlist"})}),null!==w&&null!==I&&y!==[]?Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"playlist-container",children:y.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(l.jsx)("h5",{className:"track-artist",children:t.artist})]},t.id)}))})}):Object(l.jsx)("div",{}),!0===U&&null!==w&&null!==I?Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("button",{className:"export-btn btn btn-success",onClick:function(){return function(){if(!w||!I)return P(!1),void g([]);var t=prompt("Give your playlist a name...");x.createPlaylist(t,{description:"My custom playlist from that cool Songify app",public:!1}).then((function(t){var e=t.body.id;x.addTracksToPlaylist(e,y.map((function(t){return t.uri}))).then((function(t){console.log("Added tracks to playlist!")})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))}()},children:"Export to Spotify"})}):Object(l.jsx)("div",{})]})]})},g=c(3),k=new URLSearchParams(window.location.search).get("code");var N=function(){return Object(l.jsx)(j.a,{children:Object(l.jsx)(g.c,{children:Object(l.jsx)(g.a,{path:"/",element:k?Object(l.jsx)(y,{code:k}):Object(l.jsx)(u,{})})})})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))},45:function(t,e,c){},82:function(t,e){}},[[100,1,2]]]);
//# sourceMappingURL=main.9bda91de.chunk.js.map