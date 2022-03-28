(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(t,e,c){"use strict";c.r(e);var s=c(0),a=c.n(s),n=c(37),i=c.n(n),r=(c(44),c(45),c(1)),l=function(){return Object(r.jsx)("div",{className:"login-btn-container",children:Object(r.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=4362dfe6f5c244dbbc69cff0883518c4&response_type=code&redirect_uri=https://www.playfulmusic-app.com/&scope=streaming%20user-read-email%20playlist-modify-public%20playlist-modify-private%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-top-read%20user-modify-playback-state%20playlist-read-private",children:Object(r.jsx)("button",{className:"btn btn-success btn-lg",children:"Login with Spotify"})})})},o=c.p+"static/media/headphone.fab80bce.png",d=function(){return Object(r.jsxs)("div",{className:"landing-container",children:[Object(r.jsxs)("div",{className:"title-pic",children:[Object(r.jsx)("h1",{className:"landing-title",children:"Playful"}),Object(r.jsx)("h3",{className:"landing-subheading",children:"Custom playlists based on two songs of your choice"}),Object(r.jsx)("h4",{className:"landing-subheading",children:"View track metadata of your new playlist"}),Object(r.jsx)("img",{className:"headphone",style:{height:"360px",width:"460px"},src:o,alt:"headphone"})]}),Object(r.jsx)("div",{className:"mt-4 login-component",children:Object(r.jsx)(l,{})})]})},u=c(2),h=c(22),j=c.n(h);var b=c(12),m=c(38),p=c.n(m),f=c(23),O=c.p+"static/media/logo.77b9fd8b.png",x=new p.a({clientId:"4362dfe6f5c244dbbc69cff0883518c4"}),y=function(t){var e=function(t){var e=Object(s.useState)(),c=Object(u.a)(e,2),a=c[0],n=c[1],i=Object(s.useState)(),r=Object(u.a)(i,2),l=r[0],o=r[1],d=Object(s.useState)(),h=Object(u.a)(d,2),b=h[0],m=h[1];return Object(s.useEffect)((function(){j.a.post("https://www.playfulmusic-app.com/login",{code:t}).then((function(t){console.log(t.data),n(t.data.accessToken),o(t.data.refreshToken),m(t.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(t){console.log(t)}))}),[t]),Object(s.useEffect)((function(){l&&b&&j.a.post("https://www.playfulmusic-app.com/refresh",{refreshToken:l}).then((function(t){n(t.data.accessToken),m(t.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){}))}),[l,b]),a}(t.code),c=Object(s.useState)(""),a=Object(u.a)(c,2),n=a[0],i=a[1],l=Object(s.useState)(""),o=Object(u.a)(l,2),d=o[0],h=o[1],m=Object(s.useState)([]),p=Object(u.a)(m,2),y=p[0],g=p[1],k=Object(s.useState)(null),w=Object(u.a)(k,2),N=w[0],v=w[1],S=Object(s.useState)(null),C=Object(u.a)(S,2),I=C[0],T=C[1],_=Object(s.useState)(!1),E=Object(u.a)(_,2),U=E[0],P=E[1],D=Object(s.useState)([]),A=Object(u.a)(D,2),J=A[0],L=A[1],M=Object(s.useState)([]),R=Object(u.a)(M,2),V=R[0],X=R[1];Object(s.useEffect)((function(){e&&x.setAccessToken(e)}),[e]),Object(s.useEffect)((function(){n||(g([]),P(!1),v(null)),console.log(J),x.searchTracks(n).then((function(t){L(t.body.tracks.items.map((function(t){var e=t.album.images.reduce((function(t,e){return e.height<t.height?e:t}),t.album.images[0]);return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,id:t.id,url:t.uri,albumUrl:e.url}})))}))}),[n,e]),Object(s.useEffect)((function(){d||(g([]),P(!1),T(null)),x.searchTracks(d).then((function(t){X(t.body.tracks.items.map((function(t){var e=t.album.images.reduce((function(t,e){return e.height<t.height?e:t}),t.album.images[0]);return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,id:t.id,url:t.uri,albumUrl:e.url}})))}))}),[d,e]);return Object(r.jsxs)("div",{className:"forms-container",children:[Object(r.jsx)("h1",{className:"landing-title",children:"Playful"}),Object(r.jsx)("h3",{className:"landing-subheading",children:"Custom playlists based on two songs of your choice"}),Object(r.jsx)("h4",{className:"landing-subheading",children:"View track metadata of your new playlist"}),Object(r.jsxs)("form",{className:"search-form",children:[Object(r.jsxs)("div",{className:"form-group mt-4",children:[Object(r.jsx)("label",{for:"track1",children:"Choose Track 1"}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",onChange:function(t){return i(t.target.value)},id:"track1",placeholder:"Search Spotify"})]}),null===N?Object(r.jsx)("div",{className:"tracks-container",style:{display:""===n?"none":"block"},children:J.map((function(t){return Object(r.jsxs)(f.a.Item,{href:"#",onClick:function(){return v(t)},children:[Object(r.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsx)("a",{href:"https://open.spotify.com/track/".concat(t.id),children:Object(r.jsx)("img",{src:O,style:{height:"30px",width:"30px"},alt:""})}),Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]})}))}):Object(r.jsxs)("div",{className:"chosen-song",style:{display:null!==N?"block":"none"},children:[Object(r.jsx)("img",{src:N.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsx)("a",{href:"https://open.spotify.com/track/".concat(N.id),children:Object(r.jsx)("img",{src:O,style:{height:"30px",width:"30px"},alt:""})}),Object(r.jsxs)("h5",{className:"track-title",children:[N.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:N.artist}),Object(r.jsx)("button",{className:"btn cancel-song",onClick:function(){return v(null)},children:"X"})]}),Object(r.jsxs)("div",{className:"form-group mt-4",children:[Object(r.jsx)("label",{for:"track2",children:"Choose Track 2"}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",id:"track2",onChange:function(t){return h(t.target.value)},placeholder:"Search Spotify"})]}),null===I?Object(r.jsx)("div",{className:"tracks-container",style:{display:""===d?"none":"block"},children:V.map((function(t){return Object(r.jsxs)(f.a.Item,{href:"#",onClick:function(){return T(t)},children:[Object(r.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsx)("a",{href:"https://open.spotify.com/track/".concat(t.id),children:Object(r.jsx)("img",{src:O,style:{height:"30px",width:"30px"},alt:""})}),Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]})}))}):Object(r.jsxs)("div",{className:"chosen-song",style:{display:null!==I?"block":"none"},children:[Object(r.jsx)("img",{src:I.albumUrl,href:"https://open.spotify.com/track/".concat(I.id),style:{height:"64px",width:"64px"},alt:""}),Object(r.jsx)("a",{href:"https://open.spotify.com/track/".concat(I.id),children:Object(r.jsx)("img",{src:O,style:{height:"30px",width:"30px"},alt:""})}),Object(r.jsxs)("h5",{className:"track-title",children:[I.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:I.artist}),Object(r.jsx)("button",{className:"btn cancel-song",onClick:function(){return T(null)},children:"X"})]}),Object(r.jsx)(b.b,{to:"/",children:Object(r.jsx)("button",{type:"submit",onClick:function(){return function(){if(!N||!I)return P(!1),void g([]);P(!0),x.getRecommendations({min_energy:.5,seed_artists:[N.artistID,I.artistID],seed_genres:[],seed_tracks:[N.id,I.id],min_popularity:60}).then((function(t){var e=t.body.tracks;g(e.map((function(t){return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,uri:t.uri,id:t.id}})))})).catch((function(t){console.log("Something went wrong!",t)}))}()},className:"btn btn-success mt-3",children:"Create Playlist"})}),null!==N&&null!==I&&y!==[]?Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"playlist-container",children:y.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]},t.id)}))})}):Object(r.jsx)("div",{}),!0===U&&null!==N&&null!==I?Object(r.jsx)(b.b,{to:"/",children:Object(r.jsx)("button",{className:"export-btn btn btn-success",onClick:function(){return function(){if(!N||!I)return P(!1),void g([]);var t=prompt("Give your playlist a name...");x.createPlaylist(t,{description:"My custom playlist from that cool Songify app",public:!1}).then((function(t){var e=t.body.id;x.addTracksToPlaylist(e,y.map((function(t){return t.uri}))).then((function(t){console.log("Added tracks to playlist!")})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))}()},children:"Export to Spotify"})}):Object(r.jsx)("div",{})]})]})},g=c(3),k=new URLSearchParams(window.location.search).get("code");var w=function(){return Object(r.jsx)(b.a,{children:Object(r.jsx)(g.c,{children:Object(r.jsx)(g.a,{path:"/",element:k?Object(r.jsx)(y,{code:k}):Object(r.jsx)(d,{})})})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))},45:function(t,e,c){},82:function(t,e){}},[[100,1,2]]]);
//# sourceMappingURL=main.b0a2360d.chunk.js.map