(()=>{
  'use strict';
  const byId=id=>document.getElementById(id);
  const journey=byId('journey'),fx=byId('effects'),ctx=fx.getContext('2d',{alpha:true});
  const worlds=[...document.querySelectorAll('.world')],artifacts=[...document.querySelectorAll('.artifact')];
  const narrative=byId('narrative'),eyebrow=byId('eyebrow'),headline=byId('headline'),description=byId('description'),facts=byId('facts');
  const route=byId('route'),nextScene=byId('nextScene'),count=byId('sceneCount'),progressBar=byId('progress'),locationLabel=byId('location');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const scenes=[
    {world:'server',k:'01 / SALVA PROJELERİ',h:'Kodun<br>içine gir.',d:'Fatura girişi, parça deposu, kampanya sorgusu ve SQL raporları. Geliştirdiğim sistemler tekrar eden işleri daha izlenebilir hale getiriyor.',facts:['C# / .NET','OTOMASYON'],loc:'PORTFOLYO / GENEL'},
    {world:'server',k:'02 / VERİ AKIŞI',h:'Veri doğru<br>yere ulaşsın.',d:'Bir dosyadan, barkoddan veya web sayfasından gelen bilgi okunur; doğrulanır ve ilgili uygulamanın kullanacağı biçime dönüştürülür.',facts:['VERİ OKUMA','DOĞRULAMA'],loc:'VERİ / GİRİŞ'},
    {world:'server',k:'03 / İŞLEM ZİNCİRİ',h:'Oku. Eşleştir.<br>Kaydet.',d:'Projelerimin ortak mantığı bu: kaynak veriyi alıp manuel yapılan adımları güvenilir bir iş akışına dönüştürmek.',facts:['ALAN EŞLEME','İŞ AKIŞI'],loc:'VERİ / İŞLEME'},
    {world:'invoice',k:'04 / EFES OTO FATURA',h:'Fatura bilgisi<br>hazır.',d:'E-fatura dosyasındaki üst bilgiler ve parça satırları ayrıştırılır. Giriş yapılacak alanlar uygulama için hazırlanır.',facts:['XML / PDF','C# / .NET'],loc:'EFES / VERİ OKUMA'},
    {world:'invoice',k:'05 / ALAN EŞLEŞTİRME',h:'Bilgi doğru<br>kutucuğa.',d:'Fatura numarası, tarih, cari, parça, miktar ve tutar gibi değerler ilgili EfesPro alanlarıyla eşleştirilir. Ekrandaki değerler örnektir.',facts:['CARİ / SATIRLAR','ALAN KONTROLÜ'],loc:'EFES / EŞLEŞTİRME'},
    {world:'invoice',k:'06 / MASAÜSTÜ OTOMASYONU',h:'Tekrar eden<br>adımlar azalır.',d:'WinForms otomasyonu parça ekleme, iskonto, vade ve kayıt adımlarını arayüz üzerinden yürütür; süreç kontrol edilebilir hale gelir.',facts:['UI AUTOMATION','EFESPRO'],loc:'EFES / KAYIT'},
    {world:'warehouse',k:'07 / AKILLI DEPO',h:'Parça hareketi<br>kayıt altında.',d:'Akıllı Depo, yedek parça giriş ve çıkışlarını, iş emri bilgisini ve raf konumlarını tek bir depo ekranında yönetir.',facts:['WINFORMS','SQLITE'],loc:'TURGUT / DEPO'},
    {world:'warehouse',k:'08 / BARKOD OKUMA',h:'Okutunca<br>kayıt başlar.',d:'Zebra okuyucudan gelen parça numarası kontrol edilir. Geçerli barkod, parça ve iş emri kaydıyla ilişkilendirilir.',facts:['ZEBRA / TCP','PARÇA DOĞRULAMA'],loc:'TURGUT / BARKOD'},
    {world:'warehouse',k:'09 / RAF YÖNETİMİ',h:'Parçanın yeri<br>belli.',d:'Önceden tanınan parçanın rafı otomatik seçilebilir; raf kayıtları ve parça adetleri SQLite üzerinde takip edilir. B-12 örnek konumdur.',facts:['RAF EŞLEŞMESİ','ADET TAKİBİ'],loc:'TURGUT / RAF'},
    {world:'browser',k:'10 / SERVICE BOX EKLENTİSİ',h:'Şasi listesini<br>işle.',d:'Chrome eklentisi Excel dosyasındaki VIN listesini Service Box kampanya sorgusuna bağlar ve tekrar eden aramaları sıraya koyar.',facts:['CHROME EXTENSION','EXCEL'],loc:'SERVICE BOX / GÖREV'},
    {world:'browser',k:'11 / SIRALI VIN SORGUSU',h:'Her şasi<br>sırayla aranır.',d:'Eklenti E sütunundaki VIN değerlerini tek tek sorgular. Sayfa yenilense de hangi kaydın işlendiğini izleyen bir görev akışı kullanır.',facts:['VIN / E SÜTUNU','GÖREV DURUMU'],loc:'SERVICE BOX / VIN'},
    {world:'browser',k:'12 / KAMPANYA SONUCU',h:'Sonuç Excel’e<br>geri yazılır.',d:'Tamamlanmamış kampanyaların kodu ve başlığı toplanır; sonuçlar G ve H sütunlarına aktarılır. Görünen satırlar örnektir.',facts:['KAMPANYA KODU / G','BAŞLIK / H'],loc:'SERVICE BOX / SONUÇ'},
    {world:'reports',k:'13 / SQL RAPORLARI',h:'İş verileri<br>bir arada.',d:'SQL Server üzerindeki iş emri, fatura, stok ve maliyet kayıtları C# rapor ekranlarında birlikte incelenir.',facts:['SQL SERVER','C# WINFORMS'],loc:'RAPOR / KAYNAKLAR'},
    {world:'reports',k:'14 / FİLTRE VE EŞLEŞME',h:'İhtiyacın olan<br>satırı bul.',d:'İş emri satırları cari, araç, personel, marka ve parça bilgileriyle filtrelenir; satış ve maliyet verileri ilişkilendirilir.',facts:['İŞ EMRİ DETAYI','MALİYET / KÂR'],loc:'RAPOR / FİLTRE'},
    {world:'reports',k:'15 / İŞÇİLİK ANALİZİ',h:'Süreyi ve<br>durumu gör.',d:'İşçilik süresi saat:dakika olarak gösterilir; garanti durumu ve net tutar aynı raporda izlenir. Grafikteki sayılar örnektir.',facts:['SÜRE / HH:MM','GARANTİ DURUMU'],loc:'RAPOR / İŞÇİLİK'},
    {world:'final',k:'16 / PROJE YAKLAŞIMI',h:'Farklı işler.<br>Ortak yöntem.',d:'Masaüstü otomasyonu, barkodlu depo, tarayıcı eklentisi ve SQL raporları: her biri gerçek bir iş akışındaki tekrarları azaltmak için geliştirildi.',facts:['MASAÜSTÜ','TARAYICI / VERİ'],loc:'SALVA / PROJELER'},
    {world:'final',k:'17 / SALVA',h:'Tekrarlanan işi<br>koda bırak.',d:'Ben SALVA. C# uygulamaları, tarayıcı eklentileri ve veri odaklı araçlar geliştiriyorum. Diğer çalışmalarımı bağlantılardan inceleyebilirsin.',facts:['SOFTWARE DEVELOPER','C# / OTOMASYON'],loc:'SALVA / İLETİŞİM'}
  ];
  const chapters=[{label:'GİRİŞ',at:0},{label:'FATURA',at:3},{label:'DEPO',at:6},{label:'EKLENTİ',at:9},{label:'RAPOR',at:12},{label:'SALVA',at:15}];
  for(const item of chapters){const b=document.createElement('button');b.type='button';b.textContent=item.label;b.setAttribute('aria-label',item.label+' bölümüne git');b.addEventListener('click',()=>go(item.at));route.append(b)}
  const routeButtons=[...route.children];
  const ranges={server:[-1,3.05],invoice:[2.63,6.08],warehouse:[5.68,9.08],browser:[8.68,12.08],reports:[11.68,15.08],final:[14.68,17.2]};
  const camera={
    server:[{p:0,x:0,y:0,s:1,ry:0,rz:0},{p:1,x:-11,y:-2,s:1.31,ry:-5,rz:0},{p:2,x:-30,y:-10,s:2.12,ry:-14,rz:-2},{p:3,x:-38,y:-12,s:2.55,ry:-19,rz:-3}],
    invoice:[{p:2.65,x:17,y:8,s:1.38,ry:17,rz:2},{p:3.25,x:3,y:0,s:1.12,ry:-4,rz:0},{p:4.1,x:-3,y:-5,s:1.22,ry:3,rz:-1},{p:5.2,x:-12,y:-7,s:1.38,ry:10,rz:1},{p:6.1,x:-27,y:-8,s:1.75,ry:19,rz:3}],
    warehouse:[{p:5.7,x:-19,y:9,s:1.44,ry:-19,rz:-2},{p:6.3,x:-4,y:0,s:1.13,ry:-4,rz:0},{p:7.4,x:9,y:-2,s:1.22,ry:8,rz:0},{p:8.35,x:-10,y:-7,s:1.42,ry:-10,rz:2},{p:9.1,x:-27,y:-10,s:1.82,ry:-20,rz:4}],
    browser:[{p:8.7,x:19,y:7,s:1.42,ry:20,rz:-2},{p:9.35,x:4,y:0,s:1.11,ry:-5,rz:0},{p:10.45,x:-5,y:-3,s:1.25,ry:3,rz:0},{p:11.4,x:-12,y:-8,s:1.44,ry:10,rz:2},{p:12.1,x:-25,y:-10,s:1.82,ry:18,rz:3}],
    reports:[{p:11.7,x:14,y:18,s:1.42,ry:15,rz:2},{p:12.4,x:4,y:5,s:1.13,ry:0,rz:0},{p:13.45,x:-4,y:-3,s:1.23,ry:-6,rz:0},{p:14.35,x:-9,y:-10,s:1.38,ry:5,rz:-2},{p:15.1,x:-19,y:-16,s:1.63,ry:14,rz:-4}],
    final:[{p:14.7,x:15,y:10,s:1.45,ry:-15,rz:-3},{p:15.35,x:1,y:3,s:1.2,ry:-4,rz:0},{p:16.1,x:0,y:0,s:1.08,ry:0,rz:0},{p:16.5,x:0,y:0,s:1.04,ry:0,rz:0}]
  };
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  const mix=(a,b,t)=>a+(b-a)*t;
  const smooth=v=>{v=clamp(v);return v*v*(3-2*v)};
  const fract=v=>v-Math.floor(v);
  const hash=v=>fract(Math.sin(v*127.1+78.23)*43758.5453);
  let W=0,H=0,DPR=1,target=0,current=0,lastTime=0,shown=-1,mouseX=0,mouseY=0;
  function resize(){W=innerWidth;H=innerHeight;DPR=Math.min(devicePixelRatio||1,2);fx.width=Math.round(W*DPR);fx.height=Math.round(H*DPR);fx.style.width=W+'px';fx.style.height=H+'px'}
  function readScroll(){target=clamp((scrollY-journey.offsetTop)/Math.max(1,journey.offsetHeight-innerHeight))}
  function go(shot){scrollTo({top:journey.offsetTop+(journey.offsetHeight-innerHeight)*shot/16.5,behavior:reduce.matches?'instant':'smooth'})}
  addEventListener('resize',()=>{resize();readScroll()});addEventListener('scroll',readScroll,{passive:true});
  addEventListener('pointermove',e=>{mouseX=(e.clientX/W-.5)*2;mouseY=(e.clientY/H-.5)*2},{passive:true});
  addEventListener('keydown',e=>{if(['ArrowRight','PageDown'].includes(e.key)){e.preventDefault();go(Math.min(16,Math.round(target*16.5)+1))}else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(Math.max(0,Math.round(target*16.5)-1))}else if(e.key==='Home'){go(0)}else if(e.key==='End'){go(16)}},{passive:false});
  nextScene.addEventListener('click',()=>go(shown===16?0:Math.min(16,shown+1)));
  resize();readScroll();
  function cameraAt(keys,p){let i=0;while(i<keys.length-2&&p>keys[i+1].p)i++;const a=keys[i],b=keys[i+1],t=smooth((p-a.p)/(b.p-a.p));return {x:mix(a.x,b.x,t),y:mix(a.y,b.y,t),s:mix(a.s,b.s,t),ry:mix(a.ry,b.ry,t),rz:mix(a.rz,b.rz,t)}}
  function weight(p,start,end){const enter=start<0?1:smooth((p-(start-.3))/.6);const leave=end>17?1:1-smooth((p-(end-.3))/.6);return enter*leave}
  function showShot(i){if(i===shown)return;shown=i;narrative.classList.add('is-out');artifacts.forEach(x=>x.classList.remove('active'));
    const apply=()=>{if(shown!==i)return;const s=scenes[i];eyebrow.textContent=s.k;headline.innerHTML=s.h;description.innerHTML=s.d;facts.innerHTML=s.facts.map(v=>'<span>'+v+'</span>').join('');count.textContent=String(i+1).padStart(2,'0');
      routeButtons.forEach((b,j)=>{const active=i>=chapters[j].at&&(j===chapters.length-1||i<chapters[j+1].at);b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});
      nextScene.textContent=i===16?'BAŞA DÖN':i===0?'AKIŞA GİR':'SONRAKİ PLAN';narrative.classList.remove('is-out');
      const panel=artifacts.find(x=>x.dataset.artifact===s.world);if(panel)panel.classList.add('active')};
    if(reduce.matches)apply();else setTimeout(apply,135)
  }
  function glow(x,y,r,alpha,color='92,242,226'){const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,`rgba(${color},${alpha})`);g.addColorStop(1,`rgba(${color},0)`);ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2)}
  function cable(p,t,alpha){if(alpha<.002)return;ctx.save();ctx.globalAlpha=alpha;ctx.fillStyle='#021019';ctx.fillRect(0,0,W,H);const R=Math.max(W,H),bend=smooth((p-2.05)/.7),cx=W*(.6+.19*smooth((p-1.75)/.5)-.29*bend),cy=H*(.5+.055*Math.sin(p*2.7));glow(cx,cy,R*.5,.37);
    for(let j=17;j>=0;j--){const d=fract(j/18+p*.12),f=1-d,r=14+Math.pow(f,1.7)*R*.72,ry=r*(.52+.14*bend);ctx.beginPath();ctx.ellipse(cx,cy,r,ry,bend*.2,0,Math.PI*2);ctx.strokeStyle=`rgba(127,231,222,${.08+f*.45})`;ctx.lineWidth=f>.83?3:1.2;ctx.shadowColor='#60e5dc';ctx.shadowBlur=f*16;ctx.stroke();ctx.shadowBlur=0}
    for(let i=0;i<125;i++){let a=hash(i+31)*Math.PI*2,d=fract(hash(i*3+7)+t*(.00009+hash(i+74)*.00018)+p*.11),r=Math.pow(d,2.2)*R*.7,x=cx+Math.cos(a)*r+bend*d*W*.04,y=cy+Math.sin(a)*r*.6;ctx.beginPath();ctx.arc(x,y,.7+d*3,0,Math.PI*2);ctx.fillStyle=i%8===0?`rgba(250,184,122,${.3+d*.65})`:`rgba(133,245,228,${.13+d*.8})`;ctx.fill()}ctx.restore()}
  function transition(p,t,center,type){const d=Math.abs(p-center);if(d>.62)return;const intensity=(1-smooth(d/.62))*.9;ctx.save();ctx.globalAlpha=intensity;
    if(type==='scan'){const y=H*(.5+(p-center)*1.8);ctx.fillStyle='rgba(7,15,16,.8)';ctx.fillRect(0,0,W,H);const g=ctx.createLinearGradient(0,y-55,0,y+55);g.addColorStop(0,'rgba(255,183,111,0)');g.addColorStop(.5,'rgba(255,183,111,.43)');g.addColorStop(1,'rgba(255,183,111,0)');ctx.fillStyle=g;ctx.fillRect(0,y-55,W,110);ctx.fillStyle='#ffd0a3';ctx.fillRect(0,y,W,2)}
    if(type==='barcode'){ctx.fillStyle='rgba(3,13,19,.84)';ctx.fillRect(0,0,W,H);for(let i=0;i<49;i++){let x=i*W/48+Math.sin(i*3)*5,w=1+hash(i+6)*6;ctx.fillStyle=`rgba(143,243,233,${.22+hash(i+8)*.5})`;ctx.fillRect(x,0,w,H)}let y=H*(.5+(p-center)*.5);glow(W*.54,y,H*.5,.27)}
    if(type==='data'){ctx.fillStyle='rgba(2,13,21,.9)';ctx.fillRect(0,0,W,H);for(let i=0;i<76;i++){let depth=fract(hash(i+78)+t*.00012),x=W*(.53+(hash(i+10)-.5)*depth*1.2),y=H*(.5+(hash(i+132)-.5)*depth*1.4);ctx.fillStyle=`rgba(133,244,224,${.12+depth*.65})`;ctx.fillRect(x,y,3+depth*8,1+depth*3)}glow(W*.52,H*.49,H*.6,.3)}ctx.restore()}
  function particles(p,t){let alpha=smooth((p-3.05)/.5)*(1-smooth((p-14.8)/.6))*.15;if(alpha<=0)return;ctx.save();for(let i=0;i<27;i++){const x=W*(.48+hash(i+29)*.52),y=H*hash(i+55),a=alpha*(.3+Math.sin(t*.002+i)**2);ctx.beginPath();ctx.arc(x,y,.7+hash(i+14)*1.8,0,Math.PI*2);ctx.fillStyle=`rgba(121,247,226,${a})`;ctx.fill()}ctx.restore()}
  function projectProgress(p){const fields=[...document.querySelectorAll('[data-fill]')];fields.forEach((n,i)=>{const val=n.dataset.fill,phase=reduce.matches?1:clamp((p-4.1-i*.13)/.53),len=Math.floor(val.length*phase);n.textContent=val.slice(0,len)+(len<val.length&&p>4?'▍':'')});byId('invoiceSave').classList.toggle('done',p>=5.22);byId('invoiceSave').innerHTML=p>=5.22?'KAYIT OLUŞTURULDU <span>✓</span>':'KAYIT BEKLENİYOR <span>○</span>';
    byId('stockStatus').textContent=p>=7.42?'DOĞRULANDI / KAYDEDİLDİ':'OKUMA BEKLENİYOR';document.querySelector('.warehouse-marker').style.opacity=String(clamp((p-6.65)/.6));
    const result=byId('campaignStatus');result.textContent=p>=11.06?'ÖRNEK SONUÇ YAZILDI':p>=10.35?'SONUÇ İŞLENİYOR':'SIRADA...';result.classList.toggle('found',p>=11.06);byId('campaignNext').textContent=p>=11.24?'SIRADAKİ VIN':'BEKLENİYOR';
    const q=clamp((p-12.75)/1.35);byId('metricOrders').textContent=String(Math.floor(128*q)).padStart(3,'0');byId('metricParts').textContent=String(Math.floor(674*q)).padStart(3,'0');byId('metricHours').textContent=q>.8?'83:20':'00:00';document.querySelectorAll('.chart i').forEach((b,i)=>{b.style.transform=`scaleY(${.13+.87*clamp((p-13.05-i*.09)/.6)})`;b.style.transformOrigin='bottom'})
  }
  function tick(t){const dt=Math.min(48,t-lastTime||16);lastTime=t;current+=(target-current)*(reduce.matches?1:1-Math.pow(.79,dt/16));if(Math.abs(current-target)<.00008)current=target;const p=current*16.5,shot=Math.min(16,Math.floor(p+.38));showShot(shot);
    for(const el of worlds){const id=el.dataset.world,[a,b]=ranges[id],w=weight(p,a,b),c=cameraAt(camera[id],p);el.style.opacity=w.toFixed(3);el.querySelector('.world__image').style.transform=`translate3d(${(c.x+mouseX*2.2*w).toFixed(2)}%,${(c.y+mouseY*1.4*w).toFixed(2)}%,0) scale(${c.s.toFixed(3)}) rotateY(${(c.ry+mouseX*1.7*w).toFixed(2)}deg) rotateZ(${c.rz.toFixed(2)}deg)`}
    ctx.setTransform(DPR,0,0,DPR,0,0);ctx.clearRect(0,0,W,H);cable(p,t,smooth((p-1.57)/.38)*(1-smooth((p-2.7)/.5)));transition(p,t,5.92,'scan');transition(p,t,8.93,'barcode');transition(p,t,11.93,'data');particles(p,t);
    projectProgress(p);locationLabel.innerHTML=`PROJE / ${scenes[shot].loc}<br>ADIM / ${String(shot+1).padStart(2,'0')} — 17`;progressBar.style.width=(current*100).toFixed(2)+'%';requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick);
})();
