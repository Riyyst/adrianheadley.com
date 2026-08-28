(function(){
  function initViewer(viewer){
    const card=viewer.querySelector('.digital-card-3d');
    const stage=viewer.querySelector('.digital-card-stage');
    const frontBtn=viewer.querySelector('[data-card-side="front"]');
    const backBtn=viewer.querySelector('[data-card-side="back"]');
    if(!card||!stage)return;

    let rotX=0;
    let rotY=0;
    let targetX=rotX;
    let targetY=rotY;
    let dragging=false;
    let lastX=0;
    let lastY=0;
    let raf=0;

    const reduceMotion=()=>document.body.classList.contains('reduce-motion') || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function normaliseY(value){
      let v=value%360;
      if(v<0)v+=360;
      return v;
    }

    function updateButtons(){
      const y=normaliseY(targetY);
      const back=y>90&&y<270;
      if(frontBtn){frontBtn.classList.toggle('is-active',!back);frontBtn.setAttribute('aria-pressed',String(!back));}
      if(backBtn){backBtn.classList.toggle('is-active',back);backBtn.setAttribute('aria-pressed',String(back));}
    }

    function draw(){
      if(reduceMotion()){
        rotX=targetX;rotY=targetY;
      }else{
        rotX+=(targetX-rotX)*0.18;
        rotY+=(targetY-rotY)*0.18;
      }
      card.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      updateButtons();
      if(Math.abs(targetX-rotX)>.05||Math.abs(targetY-rotY)>.05){
        raf=requestAnimationFrame(draw);
      }else{
        raf=0;
      }
    }

    function requestDraw(){if(!raf)raf=requestAnimationFrame(draw);}
    function goToSide(side){
      targetX=0;
      const turns=Math.round(targetY/360)*360;
      targetY=turns+(side==='back'?180:0);
      requestDraw();
    }

    frontBtn&&frontBtn.addEventListener('click',()=>goToSide('front'));
    backBtn&&backBtn.addEventListener('click',()=>goToSide('back'));

    stage.addEventListener('pointerdown',event=>{
      if(event.button!==undefined&&event.button!==0)return;
      dragging=true;lastX=event.clientX;lastY=event.clientY;
      stage.setPointerCapture&&stage.setPointerCapture(event.pointerId);
      stage.classList.add('is-dragging');
    });
    stage.addEventListener('pointermove',event=>{
      if(!dragging)return;
      const dx=event.clientX-lastX;
      const dy=event.clientY-lastY;
      lastX=event.clientX;lastY=event.clientY;
      targetY+=dx*.55;
      targetX=Math.max(-55,Math.min(55,targetX-dy*.38));
      requestDraw();
    });
    const endDrag=()=>{dragging=false;stage.classList.remove('is-dragging');};
    stage.addEventListener('pointerup',endDrag);
    stage.addEventListener('pointercancel',endDrag);

    stage.addEventListener('keydown',event=>{
      if(event.key==='ArrowLeft'){event.preventDefault();targetY-=15;requestDraw();}
      if(event.key==='ArrowRight'){event.preventDefault();targetY+=15;requestDraw();}
      if(event.key==='ArrowUp'){event.preventDefault();targetX=Math.max(-55,targetX-8);requestDraw();}
      if(event.key==='ArrowDown'){event.preventDefault();targetX=Math.min(55,targetX+8);requestDraw();}
      if(event.key==='Home'){event.preventDefault();goToSide('front');}
      if(event.key==='End'){event.preventDefault();goToSide('back');}
    });

    requestDraw();
  }

  document.querySelectorAll('[data-digital-card-viewer]').forEach(initViewer);
})();
