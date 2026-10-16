const fs=require('fs'),vm=require('vm'),assert=require('assert');
const local=fs.readFileSync(__dirname+'/catalog.json','utf8');
const js=fs.readFileSync(__dirname+'/game.js','utf8');
const elements=new Map();const noop=()=>{};
function fakeElement(sel='div'){
  const node={style:{},innerHTML:'',textContent:'',className:'',dataset:{},hidden:false,children:[],scrollTop:0,click:noop,
    addEventListener:noop,setPointerCapture:noop,setAttribute:noop,querySelectorAll(){return []},querySelector(){return fakeElement('inner')},
    appendChild(child){this.children.push(child);return child},getBoundingClientRect(){return {width:960,height:640,left:0,top:0}},
    getContext(){return new Proxy({}, {get:(_,k)=>k==='createRadialGradient'?()=>({addColorStop:noop}):noop,set:()=>true})},
  };return node;
}
const doc={querySelector(selector){if(!elements.has(selector))elements.set(selector,fakeElement(selector));return elements.get(selector)},createElement(tag){return fakeElement(tag)},addEventListener:noop};
const ctx={console,document:doc,Image:class{constructor(){this.complete=false;this.naturalWidth=0}set src(x){this._src=x}},
  localStorage:{getItem:()=>null,setItem:noop},matchMedia:()=>({matches:true}),devicePixelRatio:1,
  Math,JSON,Date,Set,Map,Promise,performance:{now:()=>0},requestAnimationFrame:noop,addEventListener:noop,fetch:async path=>({ok:true,json:async()=>JSON.parse(local)}),
  navigator:{clipboard:{writeText:async()=>{}}},prompt:()=>null};ctx.window=ctx;
vm.createContext(ctx);vm.runInContext(js,ctx);
setTimeout(()=>{
 try{
  const t=ctx.__relicfallTest;assert(t,'runtime failed to initialize');
  assert.equal(t.catalog.bosses.length,9);assert.equal(t.catalog.enemies.length,27);assert.equal(t.catalog.weapons.length,30);
  assert.equal(t.catalog.items.length,200);assert.equal(t.catalog.achievements.length,30);
  assert.equal(t.getState().settings.autoFire,true);
  t.start();assert.equal(t.getState().state,'play');assert(t.getState().enemyCount>0);
  t.dodge();assert(t.getState().player.dodgeCD>0);
  t.pickup('item-001');assert.equal(t.getState().itemsCollected,1);assert(t.getState().player.mods.power>1);
  t.equip('weapon-2-1');assert.equal(t.getState().weapon,'Lantern Rod');
  for(let n=0;n<8;n++)t.advance();assert.equal(t.getState().depth,3);
  t.secret();assert.equal(t.getState().secretRoomActive,true);t.killRoom();t.advance();assert.equal(t.getState().secretRoomActive,false);
  console.log('PASS: 9 bosses, 27 enemies, 30 weapons, 200 items, 30 achievements, start, mobile auto-fire, dodge, relic effect, equip, depth, enter/exit secret room.');
 }catch(e){console.error('TEST FAIL:',e.stack);process.exitCode=1}
},100);
