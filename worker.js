const RESTAURANT={lat:23.3056875,lon:57.9494375};
const MENU={"0":{"name":"ساندويتش شاورما دجاج","en":"Chicken Shawarma Sandwich","price":0.4},"1":{"name":"ساندويتش شاورما لحم","en":"Meat Shawarma Sandwich","price":0.5},"2":{"name":"ساندويتش شاورما مكس","en":"Mixed Shawarma Sandwich","price":0.4},"3":{"name":"صاروخ شاورما دجاج","en":"Chicken Shawarma Rocket Wrap","price":0.8},"4":{"name":"صاروخ شاورما لحم","en":"Meat Shawarma Rocket Wrap","price":1.2},"5":{"name":"صاروخ شاورما مكس","en":"Mixed Shawarma Rocket Wrap","price":1.2},"6":{"name":"صاروخ خاص دجاج","en":"Special Chicken Rocket Wrap","price":1.0},"7":{"name":"صاروخ خاص لحم","en":"Special Meat Rocket Wrap","price":1.0},"8":{"name":"صاروخ خاص مكس","en":"Special Mixed Rocket Wrap","price":1.4},"9":{"name":"برجر شاورما دجاج","en":"Chicken Shawarma Burger","price":0.7},"10":{"name":"برجر شاورما لحم","en":"Meat Shawarma Burger","price":1.0},"11":{"name":"إسكندر دجاج","en":"Chicken Iskender","price":1.2},"12":{"name":"إسكندر لحم","en":"Meat Iskender","price":1.7},"13":{"name":"إسكندر مكس","en":"Mixed Iskender","price":1.2},"14":{"name":"ساندويتش فلافل","en":"Falafel Sandwich","price":0.3},"15":{"name":"صاروخ فلافل","en":"Falafel Rocket Wrap","price":0.7},"16":{"name":"بوكس شاورما صغير دجاج","en":"Chicken Shawarma Box - Small","price":1.5},"17":{"name":"بوكس شاورما صغير لحم","en":"Meat Shawarma Box - Small","price":2.0},"18":{"name":"بوكس شاورما صغير مكس","en":"Mixed Shawarma Box - Small","price":3.0},"19":{"name":"بوكس شاورما متوسط دجاج","en":"Chicken Shawarma Box - Medium","price":3.0},"20":{"name":"بوكس شاورما متوسط لحم","en":"Meat Shawarma Box - Medium","price":4.0},"21":{"name":"بوكس شاورما متوسط مكس","en":"Mixed Shawarma Box - Medium","price":4.0},"22":{"name":"بوكس شاورما كبير دجاج","en":"Chicken Shawarma Box - Large","price":4.0},"23":{"name":"بوكس شاورما كبير لحم","en":"Meat Shawarma Box - Large","price":5.0},"24":{"name":"بوكس شاورما كبير مكس","en":"Mixed Shawarma Box - Large","price":5.0},"25":{"name":"بوكس شاورما عائلي دجاج","en":"Chicken Shawarma Box - Family","price":5.0},"26":{"name":"بوكس شاورما عائلي لحم","en":"Meat Shawarma Box - Family","price":6.0},"27":{"name":"بوكس شاورما عائلي مكس","en":"Mixed Shawarma Box - Family","price":6.0},"28":{"name":"بوكس شاورما عائلي XL دجاج","en":"Chicken Shawarma Box - Family XL","price":6.0},"29":{"name":"بوكس شاورما عائلي XL لحم","en":"Meat Shawarma Box - Family XL","price":7.2},"30":{"name":"بوكس شاورما عائلي XL مكس","en":"Mixed Shawarma Box - Family XL","price":7.0},"31":{"name":"صحن شاورما صغير دجاج","en":"Chicken Shawarma Plate - Small","price":1.5},"32":{"name":"صحن شاورما صغير لحم","en":"Meat Shawarma Plate - Small","price":2.2},"33":{"name":"صحن شاورما صغير مكس","en":"Mixed Shawarma Plate - Small","price":2.0},"34":{"name":"صحن شاورما متوسط دجاج","en":"Chicken Shawarma Plate - Medium","price":2.0},"35":{"name":"صحن شاورما متوسط لحم","en":"Meat Shawarma Plate - Medium","price":2.7},"36":{"name":"صحن شاورما متوسط مكس","en":"Mixed Shawarma Plate - Medium","price":2.5},"37":{"name":"صحن شاورما كبير دجاج","en":"Chicken Shawarma Plate - Large","price":3.0},"38":{"name":"صحن شاورما كبير لحم","en":"Meat Shawarma Plate - Large","price":3.7},"39":{"name":"صحن شاورما كبير مكس","en":"Mixed Shawarma Plate - Large","price":3.5},"40":{"name":"صحن شاورما عائلي دجاج","en":"Chicken Shawarma Plate - Family","price":4.0},"41":{"name":"صحن شاورما عائلي لحم","en":"Meat Shawarma Plate - Family","price":5.2},"42":{"name":"صحن شاورما عائلي مكس","en":"Mixed Shawarma Plate - Family","price":6.0},"43":{"name":"متبل صغير","en":"Mutabbal - Small","price":0.5},"44":{"name":"متبل كبير","en":"Mutabbal - Large","price":1.0},"45":{"name":"حمص صغير","en":"Hummus - Small","price":0.5},"46":{"name":"حمص كبير","en":"Hummus - Large","price":1.0},"47":{"name":"محمرة كبير","en":"Muhammara - Large","price":1.0},"48":{"name":"صحن تومية صغير","en":"Garlic Sauce Plate - Small","price":0.5},"49":{"name":"صحن تومية كبير","en":"Garlic Sauce Plate - Large","price":1.0},"50":{"name":"صحن فلافل كبير","en":"Falafel Plate - Large","price":1.0},"51":{"name":"صحن فول كبير","en":"Foul Plate - Large","price":1.0},"52":{"name":"مزة فلافل مع حمص كبير","en":"Falafel Mezze with Hummus - Large","price":1.3},"53":{"name":"شيبس مقلي صغير","en":"French Fries - Small","price":0.5},"54":{"name":"شيبس مقلي كبير","en":"French Fries - Large","price":1.0},"55":{"name":"السلطة الخضراء كبير","en":"Green Salad - Large","price":1.0},"56":{"name":"السلطة اليونانية صغير","en":"Greek Salad - Small","price":1.0},"57":{"name":"السلطة اليونانية كبير","en":"Greek Salad - Large","price":2.0},"58":{"name":"سلطة الزيتون كبير","en":"Olive Salad - Large","price":1.0},"59":{"name":"لبنة (زعتر - عسل - زيتون)","en":"Labneh (Za’atar - Honey - Olives)","price":0.9},"60":{"name":"جبن مع بيض","en":"Cheese with Egg","price":0.9},"61":{"name":"جبن كرافت مع عسل","en":"Kraft Cheese with Honey","price":0.9},"62":{"name":"جبن نقانق","en":"Cheese & Sausage","price":0.9},"63":{"name":"جبن لحم","en":"Cheese & Meat","price":1.0},"64":{"name":"جبن دجاج","en":"Cheese & Chicken","price":0.9},"65":{"name":"عزيزة لحم","en":"Aziza - Meat","price":1.0},"66":{"name":"عزيزة دجاج","en":"Aziza - Chicken","price":1.0},"67":{"name":"ريال مدريد","en":"Real Madrid","price":1.2},"68":{"name":"برشلونة","en":"Barcelona","price":1.0},"69":{"name":"وردة","en":"Warda","price":1.0},"70":{"name":"ربيعة","en":"Rabia","price":1.0},"71":{"name":"سبانخ (جبن - دجاج)","en":"Spinach (Cheese - Chicken)","price":1.0},"72":{"name":"برجر لحم طازج","en":"Fresh Beef Burger","price":1.2},"73":{"name":"برجر دجاج طازج","en":"Fresh Chicken Burger","price":1.0},"74":{"name":"برجر الحديقة لحم","en":"Turkish Garden Beef Burger","price":1.2},"75":{"name":"برجر الحديقة دجاج","en":"Turkish Garden Chicken Burger","price":1.2},"76":{"name":"فرايز شاورما دجاج","en":"Chicken Shawarma Loaded Fries","price":1.5},"77":{"name":"فرايز شاورما لحم","en":"Meat Shawarma Loaded Fries","price":1.7},"78":{"name":"فرايز تكة دجاج","en":"Chicken Tikka Loaded Fries","price":1.5},"79":{"name":"فرايز تكة لحم","en":"Meat Tikka Loaded Fries","price":1.7},"80":{"name":"صحن مشاوي","en":"Grill Plate","price":4.0},"81":{"name":"صحن المشاوي المتوسط","en":"Grill Plate - Medium","price":7.0},"82":{"name":"صحن المشاوي العائلي","en":"Family Grill Plate","price":14.0},"83":{"name":"صحن مشكل الحديقة الصغير","en":"Turkish Garden Mixed Plate - Small","price":4.0},"84":{"name":"صحن مشكل الحديقة المتوسط","en":"Turkish Garden Mixed Plate - Medium","price":7.0},"85":{"name":"صحن مشكل الحديقة العائلي","en":"Turkish Garden Mixed Plate - Family","price":14.0},"86":{"name":"صحن تكة لحم","en":"Meat Tikka Plate","price":3.5},"87":{"name":"صحن تكة دجاج","en":"Chicken Tikka Plate","price":3.5},"88":{"name":"صحن تكة كباب (لحم - دجاج)","en":"Tikka & Kebab Plate (Meat - Chicken)","price":3.5},"89":{"name":"ريش - 4 قطع","en":"Lamb Chops - 4 Pieces","price":3.5},"90":{"name":"دجاجة على الفحم","en":"Whole Charcoal-Grilled Chicken","price":3.5},"91":{"name":"نصف دجاج على الفحم","en":"Half Charcoal-Grilled Chicken","price":1.8},"92":{"name":"بيتزا دجاج - صغير","en":"Chicken Pizza - Small","price":1.5},"93":{"name":"بيتزا دجاج - متوسط","en":"Chicken Pizza - Medium","price":3.0},"94":{"name":"بيتزا دجاج - كبير","en":"Chicken Pizza - Large","price":4.0},"95":{"name":"بيتزا لحم - صغير","en":"Meat Pizza - Small","price":1.5},"96":{"name":"بيتزا لحم - متوسط","en":"Meat Pizza - Medium","price":3.0},"97":{"name":"بيتزا لحم - كبير","en":"Meat Pizza - Large","price":4.0},"98":{"name":"بيتزا شاورما - صغير","en":"Shawarma Pizza - Small","price":1.5},"99":{"name":"بيتزا شاورما - متوسط","en":"Shawarma Pizza - Medium","price":3.0},"100":{"name":"بيتزا شاورما - كبير","en":"Shawarma Pizza - Large","price":4.0},"101":{"name":"بيتزا بابروني - صغير","en":"Pepperoni Pizza - Small","price":1.5},"102":{"name":"بيتزا بابروني - متوسط","en":"Pepperoni Pizza - Medium","price":3.0},"103":{"name":"بيتزا بابروني - كبير","en":"Pepperoni Pizza - Large","price":4.0},"104":{"name":"بيتزا مشكل - صغير","en":"Mixed Pizza - Small","price":1.5},"105":{"name":"بيتزا مشكل - متوسط","en":"Mixed Pizza - Medium","price":3.0},"106":{"name":"بيتزا مشكل - كبير","en":"Mixed Pizza - Large","price":4.0},"107":{"name":"بيتزا خضار - صغير","en":"Vegetable Pizza - Small","price":1.5},"108":{"name":"بيتزا خضار - متوسط","en":"Vegetable Pizza - Medium","price":3.0},"109":{"name":"بيتزا خضار - كبير","en":"Vegetable Pizza - Large","price":4.0},"110":{"name":"بيتزا جبن - صغير","en":"Cheese Pizza - Small","price":1.5},"111":{"name":"بيتزا جبن - متوسط","en":"Cheese Pizza - Medium","price":3.0},"112":{"name":"بيتزا جبن - كبير","en":"Cheese Pizza - Large","price":4.0},"113":{"name":"بيتزا مشروم (فطر) - صغير","en":"Mushroom Pizza - Small","price":1.8},"114":{"name":"بيتزا مشروم (فطر) - متوسط","en":"Mushroom Pizza - Medium","price":3.2},"115":{"name":"بيتزا مشروم (فطر) - كبير","en":"Mushroom Pizza - Large","price":4.2},"116":{"name":"بيتزا روبيان - صغير","en":"Shrimp Pizza - Small","price":1.8},"117":{"name":"بيتزا روبيان - متوسط","en":"Shrimp Pizza - Medium","price":3.2},"118":{"name":"بيتزا روبيان - كبير","en":"Shrimp Pizza - Large","price":4.2},"119":{"name":"بيتزا تونة - صغير","en":"Tuna Pizza - Small","price":1.8},"120":{"name":"بيتزا تونة - متوسط","en":"Tuna Pizza - Medium","price":3.2},"121":{"name":"بيتزا تونة - كبير","en":"Tuna Pizza - Large","price":4.2},"122":{"name":"صحن كريسبي (4 قطع مع الشيبس والصوص)","en":"Crispy Chicken Plate (4 pcs with fries & sauce)","price":1.7},"123":{"name":"فرايز كريسبي","en":"Crispy Chicken Loaded Fries","price":1.5},"124":{"name":"صاروخ كريسبي","en":"Crispy Rocket Wrap","price":1.0},"125":{"name":"صاروخ تكة لحم","en":"Meat Tikka Rocket Wrap","price":1.0},"126":{"name":"صاروخ تكة دجاج","en":"Chicken Tikka Rocket Wrap","price":0.8},"127":{"name":"صاروخ كباب لحم","en":"Meat Kebab Rocket Wrap","price":0.8},"128":{"name":"صاروخ كباب دجاج","en":"Chicken Kebab Rocket Wrap","price":0.8},"129":{"name":"صاروخ رويان","en":"Shrimp Rocket Wrap","price":1.3},"130":{"name":"صاروخ مسحب","en":"Boneless Chicken Rocket Wrap","price":1.3},"131":{"name":"كركديه","en":"Hibiscus","price":0.7},"132":{"name":"عصير الحديقة الخاص","en":"Turkish Garden Special Juice","price":1.0},"133":{"name":"مانجو","en":"Mango","price":1.0},"134":{"name":"أفوكادو","en":"Avocado","price":1.0},"135":{"name":"أناناس","en":"Pineapple","price":0.8},"136":{"name":"ليمون نعناع","en":"Lemon Mint","price":0.8},"137":{"name":"بطيخ سلاش","en":"Watermelon Slush","price":0.8},"138":{"name":"كوكتيل","en":"Fruit Cocktail","price":1.0},"139":{"name":"موز","en":"Banana","price":0.8},"140":{"name":"فيمتو","en":"Vimto","price":0.5},"141":{"name":"موهيتو","en":"Mojito","price":0.8},"142":{"name":"عصير التفاح","en":"Apple Juice","price":1.0},"143":{"name":"عصير فراولة","en":"Strawberry Juice","price":1.0},"144":{"name":"روب مانجو","en":"Mango Yogurt","price":1.0},"145":{"name":"روب فراولة","en":"Strawberry Yogurt","price":1.0},"146":{"name":"لبن بالتمر","en":"Laban with Dates","price":0.4},"147":{"name":"ماء 500 مل","en":"Water 500 ml","price":0.1},"148":{"name":"كينزا كولا عادي","en":"Kinza Cola Original","price":0.3},"149":{"name":"كينزا كولا دايت","en":"Kinza Cola Diet","price":0.3},"150":{"name":"كينزا ليمون عادي","en":"Kinza Lemon Original","price":0.3},"151":{"name":"كينزا ليمون دايت","en":"Kinza Lemon Diet","price":0.3},"152":{"name":"كينزا حمضيات","en":"Kinza Citrus","price":0.3},"153":{"name":"كينزا برتقال","en":"Kinza Orange","price":0.3},"154":{"name":"كينزا توت","en":"Kinza Berry","price":0.3},"155":{"name":"سنتوب","en":"Suntop","price":0.2}};

function json(data,status=200){
  return Response.json(data,{status,headers:{"Cache-Control":"no-store"}});
}
function text(v,max=300){return String(v??"").trim().slice(0,max)}
function esc(v){
  return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
function money(v){return Number(v||0).toFixed(3)}
function hav(a,b){
  const R=6371,r=x=>x*Math.PI/180,dlat=r(b.lat-a.lat),dlon=r(b.lon-a.lon);
  const v=Math.sin(dlat/2)**2+Math.cos(r(a.lat))*Math.cos(r(b.lat))*Math.sin(dlon/2)**2;
  return 2*R*Math.asin(Math.sqrt(v));
}
function deliveryQuote(subtotal,orderType,coords){
  if(orderType!=="delivery")return {fee:0,distanceKm:null,state:"pickup"};
  if(!coords||!Number.isFinite(coords.lat)||!Number.isFinite(coords.lon))return {fee:null,distanceKm:null,state:"missing"};
  const km=hav(RESTAURANT,coords);
  if(km>10)return {fee:null,distanceKm:km,state:"far"};
  if(km<3&&subtotal>3)return {fee:0,distanceKm:km,state:"free-near"};
  if(km<=7)return {fee:subtotal>6?0:0.5,distanceKm:km,state:subtotal>6?"free-order":"paid"};
  const extra=Math.ceil((km-7)-1e-9);
  return {fee:Number((0.5+extra*0.2).toFixed(3)),distanceKm:km,state:"paid-distance"};
}
function paymentLabel(p,lang){
  if(lang==="en")return p==="cash"?"Cash":p==="transfer"?"Transfer":"Visa / Card";
  return p==="cash"?"كاش":p==="transfer"?"تحويل":"فيزا / بطاقة";
}
function token(){
  const a=new Uint8Array(16);crypto.getRandomValues(a);
  return [...a].map(x=>x.toString(16).padStart(2,"0")).join("");
}
function shortId(){
  const d=new Date();
  const yy=String(d.getUTCFullYear()).slice(-2),mm=String(d.getUTCMonth()+1).padStart(2,"0"),dd=String(d.getUTCDate()).padStart(2,"0");
  const a=new Uint8Array(3);crypto.getRandomValues(a);
  return `TG-${yy}${mm}${dd}-${[...a].map(x=>x.toString(16).padStart(2,"0")).join("").toUpperCase()}`;
}

function receiptHtml(o){
  const items=o.items.map((i,n)=>`<div class="item"><div class="num">${n+1}</div><div class="itemText"><b>${esc(i.name)}</b><small>× ${i.qty}${i.note?` • ${esc(i.note)}`:""}</small></div><strong>${money(i.lineTotal)} ر.ع</strong></div>`).join("");
  const fee=o.deliveryFee==null?"يحدد بعد التأكيد":o.deliveryFee===0?"مجاني":`${money(o.deliveryFee)} ر.ع`;
  const phoneDigits=String(o.phone||"").replace(/\D/g,"");
  const phoneHref=phoneDigits?`tel:+968${phoneDigits.replace(/^968/,"")}`:"#";
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(o.shortId)}</title><style>
  :root{--red:#781b17;--gold:#d7a23a;--green:#17734a;--cream:#fff7ed;--line:#eadbc9}
  *{box-sizing:border-box}body{margin:0;background:linear-gradient(145deg,#fff3df,#fffdfa 45%,#f7eee6);color:#211914;font-family:Tahoma,Arial,sans-serif}.w{width:min(660px,94%);margin:22px auto}.card{background:#fff;border:1px solid var(--line);border-radius:26px;overflow:hidden;box-shadow:0 22px 65px rgba(70,30,18,.14)}
  .brand{background:linear-gradient(135deg,#55100e,#8d231d 60%,#a73a27);color:#fff;padding:22px;position:relative}.brand:after{content:"✦";position:absolute;left:18px;top:5px;font-size:82px;color:rgba(255,215,129,.08)}.brand h1{margin:0;color:#ffd781;font-size:32px}.brand p{margin:7px 0 0;color:#f9e3d8}.seal{margin-top:12px;display:inline-block;background:#fff0cf;color:#5c2d00;border:1px solid #edc97c;border-radius:999px;padding:7px 11px;font-weight:900}
  .body{padding:17px}.ok{background:#edf8f1;border:1px solid #b8dec7;color:#24633d;padding:12px;border-radius:14px;margin-bottom:12px;line-height:1.7}
  .item{display:grid;grid-template-columns:32px 1fr auto;gap:9px;align-items:center;padding:11px 0;border-bottom:1px dashed #dfcdb9}.num{width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:#fff0d4;color:#781b17;font-weight:900}.itemText small{display:block;color:#77685f;margin-top:3px}.item strong{color:#781b17}
  .tot{margin-top:13px;background:#fff8ee;border:1px solid #ead8bf;border-radius:15px;padding:12px;line-height:2}.grand{font-size:23px;color:#781b17;font-weight:900}
  .meta{background:#f8f5ff;border:1px solid #ddd2f2;border-radius:15px;padding:12px;margin-top:11px;line-height:1.9}.actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}.btn{display:block;text-align:center;border-radius:12px;padding:12px;font-weight:900}.phone{background:#17734a;color:#fff}.map{background:#781b17;color:#fff}.foot{text-align:center;color:#8b7b70;font-size:12px;margin-top:15px}
  @media(max-width:480px){.actions{grid-template-columns:1fr}.brand h1{font-size:27px}}
  </style></head><body><div class="w"><div class="card">
  <div class="brand"><h1>الحديقة التركية</h1><p>فرع سمائل • الطلب ${esc(o.shortId)}</p><div class="seal">🟥🟨🟩 طلب موثق</div></div>
  <div class="body">
  <div class="ok">🔒 <b>هذا هو الطلب المعتمد في النظام.</b><br>يمكن استخدام رقم العميل وموقعه مباشرة من الأزرار أدناه. أي تعديل في رسالة واتساب لا يغيّر هذه النسخة.</div>
  ${items}
  <div class="tot">قيمة الطلب: ${money(o.subtotal)} ر.ع<br>رسوم التوصيل: ${fee}<br>${o.rewardDiscountRequested?`خصم نقاط مطلوب: ${money(o.rewardDiscountRequested)} ر.ع<br>`:""}<span class="grand">الإجمالي: ${money(o.total)} ر.ع</span></div>
  <div class="meta">الاسم: ${esc(o.name||"-")}<br>الهاتف: ${esc(o.phone||"-")}<br>نوع الطلب: ${o.orderType==="delivery"?"توصيل":"استلام"}<br>الدفع: ${esc(o.paymentLabel)}${o.distanceKm!=null?`<br>المسافة التقريبية: ${o.distanceKm.toFixed(1)} كم`:""}${o.generalNote?`<br>ملاحظة: ${esc(o.generalNote)}`:""}${o.replacement?`<br>البديل: ${esc(o.replacement)}`:""}</div>
  <div class="actions">
    ${phoneDigits?`<a class="btn phone" href="${phoneHref}">📞 اتصال بالعميل</a>`:""}
    ${o.locationUrl?`<a class="btn map" href="${esc(o.locationUrl)}" target="_blank" rel="noopener">📍 فتح موقع العميل</a>`:""}
  </div>
  <div class="foot">تم إنشاء الطلب: ${esc(new Date(o.createdAt).toLocaleString("ar-OM",{timeZone:"Asia/Muscat"}))}</div>
  </div></div></div></body></html>`;
}

export default {
  async fetch(request, env) {
    const url=new URL(request.url);

    // Current offer API
    if(url.pathname==="/api/offer"){
      if(request.method==="GET"){
        let offer=null;
        try{const raw=await env.SITE_DATA.get("current_offer");if(raw)offer=JSON.parse(raw)}catch(e){}
        return json({offer});
      }
      const supplied=request.headers.get("X-Owner-Key")||"";
      if(!env.OWNER_KEY||supplied!==env.OWNER_KEY)return json({error:"غير مصرح"},401);
      if(request.method==="PUT"){
        let body;try{body=await request.json()}catch{return json({error:"بيانات غير صحيحة"},400)}
        const offer={title:text(body.title,100),text:text(body.text,500),price:text(body.price,20),expiry:text(body.expiry,20),active:!!body.active,updatedAt:new Date().toISOString()};
        await env.SITE_DATA.put("current_offer",JSON.stringify(offer));
        return json({ok:true,offer});
      }
      if(request.method==="DELETE"){
        await env.SITE_DATA.delete("current_offer");
        return json({ok:true});
      }
      return new Response("Method Not Allowed",{status:405});
    }

    // Create an immutable canonical order BEFORE opening WhatsApp.
    if(url.pathname==="/api/order"&&request.method==="POST"){
      let b;try{b=await request.json()}catch{return json({error:"بيانات الطلب غير صحيحة"},400)}
      const lang=b.lang==="en"?"en":"ar";
      const rawItems=Array.isArray(b.items)?b.items:[];
      if(!rawItems.length||rawItems.length>80)return json({error:"السلة غير صالحة"},400);

      const items=[];
      let subtotal=0;
      for(const row of rawItems){
        const id=String(Number(row.id));
        const mi=MENU[id];
        const qty=Math.max(1,Math.min(99,Math.floor(Number(row.qty)||0)));
        if(!mi||!qty)return json({error:"يوجد صنف غير صالح"},400);
        const lineTotal=Number((mi.price*qty).toFixed(3));
        subtotal+=lineTotal;
        items.push({id:Number(id),name:mi.name,en:mi.en,price:mi.price,qty,note:text(row.note,180),lineTotal});
      }
      subtotal=Number(subtotal.toFixed(3));

      const orderType=b.orderType==="pickup"?"pickup":"delivery";
      const payment=["cash","transfer","card"].includes(b.payment)?b.payment:"cash";
      const coords=b.coords&&Number.isFinite(Number(b.coords.lat))&&Number.isFinite(Number(b.coords.lon))
        ?{lat:Number(b.coords.lat),lon:Number(b.coords.lon)}:null;
      const dq=deliveryQuote(subtotal,orderType,coords);
      if(orderType==="delivery"&&dq.state==="missing")return json({error:"حدد الموقع أولاً"},400);
      if(dq.state==="far"&&!b.courierConfirmed)return json({error:"يجب تأكيد التوصيل مع أبو سحر أولاً"},400);

      const requestedDiscount=b.rewardDiscountRequested===1?1:0;
      const total=Number(Math.max(0,subtotal+(dq.fee||0)-requestedDiscount).toFixed(3));
      const idToken=token(),sid=shortId(),origin=url.origin;
      const record={
        version:1,token:idToken,shortId:sid,createdAt:new Date().toISOString(),
        lang,items,subtotal,deliveryFee:dq.fee,distanceKm:dq.distanceKm,deliveryState:dq.state,total,
        rewardDiscountRequested:requestedDiscount,
        orderType,payment,paymentLabel:paymentLabel(payment,lang),
        name:text(b.name,80),phone:text(b.phone,30),generalNote:text(b.generalNote,300),
        replacement:text(b.replacement,180),courierConfirmed:!!b.courierConfirmed,
        coords,locationUrl:coords?`https://maps.google.com/?q=${coords.lat},${coords.lon}`:null
      };
      await env.SITE_DATA.put(`order:${idToken}`,JSON.stringify(record),{expirationTtl:60*60*24*30});
      const verifyUrl=`${origin}/order/${idToken}`;
      return json({ok:true,order:{...record,verifyUrl}});
    }

    // Owner-only list of recent canonical orders.
    if(url.pathname==="/api/orders"&&request.method==="GET"){
      const supplied=request.headers.get("X-Owner-Key")||"";
      if(!env.OWNER_KEY||supplied!==env.OWNER_KEY)return json({error:"غير مصرح"},401);
      const list=await env.SITE_DATA.list({prefix:"order:",limit:30});
      const rows=await Promise.all(list.keys.map(k=>env.SITE_DATA.get(k.name)));
      const orders=rows.filter(Boolean).map(x=>JSON.parse(x)).sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt))).slice(0,25)
        .map(o=>({shortId:o.shortId,createdAt:o.createdAt,name:o.name,phone:o.phone,total:o.total,verifyUrl:`${url.origin}/order/${o.token}`}));
      return json({orders});
    }

    // Read-only public receipt with an unguessable token.
    if(url.pathname.startsWith("/order/")&&request.method==="GET"){
      const t=url.pathname.slice("/order/".length);
      if(!/^[a-f0-9]{32}$/.test(t))return new Response("Not found",{status:404});
      const raw=await env.SITE_DATA.get(`order:${t}`);
      if(!raw)return new Response("Order not found",{status:404});
      const o=JSON.parse(raw);
      return new Response(receiptHtml(o),{headers:{"Content-Type":"text/html;charset=UTF-8","Cache-Control":"no-store"}});
    }

    return env.ASSETS.fetch(request);
  }
};
