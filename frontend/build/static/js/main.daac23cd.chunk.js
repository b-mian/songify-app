(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(t,e,c){"use strict";c.r(e);var s=c(0),n=c.n(s),a=c(37),i=c.n(a),r=(c(44),c(45),c(1)),l=function(){return Object(r.jsx)("div",{className:"login-btn-container",children:Object(r.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=4362dfe6f5c244dbbc69cff0883518c4&response_type=code&redirect_uri=https://songify-music.herokuapp.com/&scope=streaming%20user-read-email%20playlist-modify-public%20playlist-modify-private%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-top-read%20user-modify-playback-state%20playlist-read-private",children:Object(r.jsx)("button",{className:"btn btn-success btn-lg",children:"Login with Spotify"})})})},o=c.p+"static/media/headphone.06c1bee8.png",u=function(t){t.code;return Object(r.jsxs)("div",{className:"landing-container",children:[Object(r.jsxs)("div",{className:"title-pic",children:[Object(r.jsx)("h1",{className:"landing-title",children:"Songify"}),Object(r.jsx)("h3",{className:"landing-subheading",children:"Custom playlists based on two songs of your choice"}),Object(r.jsx)("img",{className:"headphone",style:{height:"360px",width:"360px"},src:o,alt:"headphone"})]}),Object(r.jsx)("div",{className:"mt-4 login-component",children:Object(r.jsx)(l,{})})]})},d=c(2),b=c(22),j=c.n(b);var h=c(12),m=c(38),O=c.n(m),f=c(23),p=new O.a({clientId:"4362dfe6f5c244dbbc69cff0883518c4"}),x=function(){var t=function(){var t=Object(s.useState)(),e=Object(d.a)(t,2),c=e[0],n=e[1],a=Object(s.useState)(),i=Object(d.a)(a,2),r=i[0],l=i[1],o=Object(s.useState)(),u=Object(d.a)(o,2),b=u[0],h=u[1],m=new URLSearchParams(window.location.search).get("code");return Object(s.useEffect)((function(){console.log(m),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT),j.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT,"/login"),{code:m}).then((function(t){console.log(t.data),n(t.data.accessToken),l(t.data.refreshToken),h(t.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){console.log("Error")}))}),[m]),Object(s.useEffect)((function(){r&&b&&j.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT,"/refresh"),{refreshToken:r}).then((function(t){n(t.data.accessToken),h(t.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){}))}),[r,b]),c}(),e=Object(s.useState)(""),c=Object(d.a)(e,2),n=c[0],a=c[1],i=Object(s.useState)(""),l=Object(d.a)(i,2),o=l[0],u=l[1],b=Object(s.useState)([]),m=Object(d.a)(b,2),O=m[0],x=m[1],g=Object(s.useState)(null),y=Object(d.a)(g,2),S=y[0],k=y[1],v=Object(s.useState)(null),N=Object(d.a)(v,2),T=N[0],_=N[1],E=Object(s.useState)(!1),C=Object(d.a)(E,2),w=C[0],R=C[1],D=Object(s.useState)([]),P=Object(d.a)(D,2),I=P[0],U=P[1],H=Object(s.useState)([]),K=Object(d.a)(H,2),L=K[0],W=K[1],A=Object(s.useState)(!1),F=Object(d.a)(A,2);F[0],F[1];Object(s.useEffect)((function(){t&&p.setAccessToken(t)}),[t]),Object(s.useEffect)((function(){n||(x([]),R(!1),k(null),_(null)),console.log(I),p.searchTracks(n).then((function(t){U(t.body.tracks.items.map((function(t){var e=t.album.images.reduce((function(t,e){return e.height<t.height?e:t}),t.album.images[0]);return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,id:t.id,url:t.uri,albumUrl:e.url}})))}))}),[n,t]),Object(s.useEffect)((function(){o||(x([]),R(!1),k(null),_(null)),p.searchTracks(o).then((function(t){W(t.body.tracks.items.map((function(t){var e=t.album.images.reduce((function(t,e){return e.height<t.height?e:t}),t.album.images[0]);return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,id:t.id,url:t.uri,albumUrl:e.url}})))}))}),[o,t]);return Object(r.jsxs)("div",{className:"forms-container",children:[Object(r.jsx)("h1",{className:"landing-title",children:"Songify"}),Object(r.jsx)("h3",{className:"landing-subheading",children:"Custom playlists based on two songs of your choice"}),Object(r.jsxs)("form",{className:"search-form",children:[Object(r.jsxs)("div",{className:"form-group mt-4",children:[Object(r.jsx)("label",{for:"track1",children:"Choose Track 1"}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",onChange:function(t){return a(t.target.value)},id:"track1",placeholder:"Search Spotify"})]}),null===S?Object(r.jsx)("div",{className:"tracks-container",style:{display:""===n?"none":"block"},children:I.map((function(t){return Object(r.jsxs)(f.a.Item,{href:"#",onClick:function(){return k(t)},children:[Object(r.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]})}))}):Object(r.jsxs)("div",{className:"chosen-song",style:{display:null!==S?"block":"none"},children:[Object(r.jsx)("img",{src:S.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsxs)("h5",{className:"track-title",children:[S.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:S.artist}),Object(r.jsx)("button",{className:"btn cancel-song",onClick:function(){return k(null)},children:"X"})]}),Object(r.jsxs)("div",{className:"form-group mt-4",children:[Object(r.jsx)("label",{for:"track2",children:"Choose Track 2"}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",id:"track2",onChange:function(t){return u(t.target.value)},placeholder:"Search Spotify"})]}),null===T?Object(r.jsx)("div",{className:"tracks-container",style:{display:""===o?"none":"block"},children:L.map((function(t){return Object(r.jsxs)(f.a.Item,{href:"#",onClick:function(){return _(t)},children:[Object(r.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]})}))}):Object(r.jsxs)("div",{className:"chosen-song",style:{display:null!==T?"block":"none"},children:[Object(r.jsx)("img",{src:T.albumUrl,style:{height:"64px",width:"64px"},alt:""}),Object(r.jsxs)("h5",{className:"track-title",children:[T.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:T.artist}),Object(r.jsx)("button",{className:"btn cancel-song",onClick:function(){return _(null)},children:"X"})]}),Object(r.jsx)(h.b,{to:"/",children:Object(r.jsx)("button",{type:"submit",onClick:function(){return function(){if(!S||!T)return R(!1),void x([]);R(!0),p.getRecommendations({min_energy:.4,seed_artists:[S.artistID,T.artistID],seed_genres:[],seed_tracks:[S.id,T.id],min_popularity:50}).then((function(t){var e=t.body.tracks;x(e.map((function(t){return{artist:t.artists[0].name,artistID:t.artists[0].id,title:t.name,uri:t.uri,id:t.id}})))})).catch((function(t){console.log("Something went wrong!",t)}))}()},className:"btn btn-success mt-3",children:"Create Playlist"})}),null!==S&&null!==T&&O!==[]?Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"playlist-container",children:O.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h5",{className:"track-title",children:[t.title," by "]}),Object(r.jsx)("h5",{className:"track-artist",children:t.artist})]},t.id)}))})}):Object(r.jsx)("div",{}),!0===w&&null!==S&&null!==T?Object(r.jsx)(h.b,{to:"/",children:Object(r.jsx)("button",{className:"btn btn-success",onClick:function(){return function(){if(!S||!T)return R(!1),void x([]);var t=prompt("Give your playlist a name...");p.createPlaylist(t,{description:"My custom playlist from that cool Songify app",public:!1}).then((function(t){var e=t.body.id;p.addTracksToPlaylist(e,O.map((function(t){return t.uri}))).then((function(t){console.log("Added tracks to playlist!")})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))}()},children:"Export to Spotify"})}):Object(r.jsx)("div",{})]})]})},g=c(3),y=new URLSearchParams(window.location.search).get("code");var S=function(){return Object(r.jsx)(h.a,{children:Object(r.jsx)(g.c,{children:Object(r.jsx)(g.a,{path:"/",element:y?Object(r.jsx)(x,{code:y}):Object(r.jsx)(u,{})})})})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))},45:function(t,e,c){},82:function(t,e){}},[[100,1,2]]]);
//# sourceMappingURL=main.daac23cd.chunk.js.map