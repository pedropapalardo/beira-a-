const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w, h, pts = [];
function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
window.addEventListener('resize', resize); resize();
for(let i=0;i<180;i++){ pts.push({x:Math.random()*w, y:Math.random()*h, r: Math.random()*1.6 + 0.6, vx:(Math.random()-.5)*0.3, vy:(Math.random()-.5)*0.3}); }
function step(){ ctx.clearRect(0,0,w,h); // draw lines
 for(let i=0;i<pts.length;i++){ for(let j=i+1;j<pts.length;j++){ const a=pts[i], b=pts[j]; const dx=a.x-b.x, dy=a.y-b.y; const d = Math.hypot(dx,dy); if(d<120){ ctx.globalAlpha = 0.08*(1 - d/120); ctx.strokeStyle = '#7c3aed'; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); } } }
 // draw points
 for(const p of pts){ p.x += p.vx; p.y += p.vy; if(p.x<0||p.x>w) p.vx *= -1; if(p.y<0||p.y>h) p.vy *= -1; ctx.globalAlpha = 0.9; ctx.fillStyle = '#dbeafe'; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }
 requestAnimationFrame(step);
}
step();
