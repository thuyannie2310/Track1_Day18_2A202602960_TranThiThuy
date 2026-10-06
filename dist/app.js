const meta={a:{kicker:'OPTION A · USER-LED COPILOT',title:'Bạn chọn đúng chỗ cần trợ giúp',badge:'Tự trị thấp'},b:{kicker:'OPTION B · DIAGNOSTIC CO-CREATION',title:'AI hỏi ngắn trước khi chọn phần ôn',badge:'Tự trị trung bình'},c:{kicker:'OPTION C · PROACTIVE AGENT',title:'AI phát hiện và chuẩn bị, bạn quyết định',badge:'Tự trị cao'}};
let active='a';let timer;
const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
function showToast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>t.classList.remove('show'),2600)}
function showState(panel,state){$$('.flow-state',panel).forEach(x=>x.classList.toggle('active',x.dataset.state===state))}
function switchOption(option){active=option;$$('.option-tab').forEach(btn=>{const on=btn.dataset.option===option;btn.classList.toggle('active',on);btn.setAttribute('aria-selected',String(on))});$$('.option-panel').forEach(panel=>{const on=panel.dataset.panel===option;panel.hidden=!on;panel.classList.toggle('active',on)});$('#stageKicker').textContent=meta[option].kicker;$('#stageTitle').textContent=meta[option].title;$('#autonomyBadge').textContent=meta[option].badge}
function resetOption(option=active){const panel=$(`[data-panel="${option}"]`);showState(panel,'start');$$('input[type=radio]',panel).forEach((x,i)=>x.checked=option==='a'&&i===0);if(option==='c')$('#cNote').value='Learning rate quá lớn làm bước cập nhật vượt qua điểm cực tiểu và đổi hướng liên tục.';const w=$('#bWarning');if(w)w.hidden=true;showToast(`Đã đưa Option ${option.toUpperCase()} về trạng thái ban đầu.`)}
$$('.option-tab').forEach(btn=>btn.addEventListener('click',()=>switchOption(btn.dataset.option)));
$$('[data-shared-trigger]').forEach(btn=>btn.addEventListener('click',()=>showToast(`Đây là cùng một điểm kẹt trong cả ba option. Bạn đang thử Option ${active.toUpperCase()}.`)));
document.addEventListener('click',e=>{const action=e.target.closest('[data-action]')?.dataset.action;if(!action)return;const panel=$(`[data-panel="${active}"]`);
  if(action==='a-generate'){showState(panel,'loading');timer=setTimeout(()=>showState(panel,'result'),700)}
  if(action==='a-stop'){clearTimeout(timer);showState(panel,'start');showToast('Đã dừng. Không có nội dung nào bị thay đổi.')}
  if(action==='a-simpler')showToast('Đã chuyển sang ví dụ ngắn: bước quá dài khiến bạn đi qua lại hai phía của đáy.');
  if(action==='a-edit'||action==='b-edit')showState(panel,'start');
  if(action==='dismiss')showToast('Bạn tiếp tục bài mà không dùng AI.');
  if(action==='reset-option')resetOption();
  if(action==='b-diagnose'){const q1=$('input[name="b-q1"]:checked'),q2=$('input[name="b-q2"]:checked');if(!q1||!q2){$('#bWarning').hidden=false;return}$('#bWarning').hidden=true;showState(panel,'result')}
  if(action==='b-skip'){showState(panel,'result');showToast('Đã bỏ qua chẩn đoán; phần ôn mặc định được hiển thị.')}
  if(action==='b-understood')showToast('Đã quay lại bài. Bạn vẫn có thể hoàn tác để xem lại.');
  if(action==='c-review')showState(panel,'result');
  if(action==='c-stop')showToast('AI đã dừng. Bạn vẫn ở nguyên vị trí trong bài học.');
  if(action==='c-why')showToast('Tín hiệu: dừng 18 giây và đọc lại 2 lần. Đây chỉ là suy đoán, không phải kết luận.');
  if(action==='c-source')showToast('Nguồn đang được tô sáng ở cột bài học bên trái.');
  if(action==='c-edit'){$('#cNote').focus();$('#cNote').select();showToast('Bạn đang chỉnh trực tiếp nội dung do AI tạo.');}
  if(action==='c-approve')showToast('Đã duyệt ghi chú và tiếp tục bài. Quyết định cuối cùng thuộc về bạn.');
});
$('#resetAll').addEventListener('click',()=>{['a','b','c'].forEach(resetOption);switchOption('a');showToast('Đã đặt lại cả ba phương án.')});
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const order=['a','b','c'];let i=order.indexOf(active)+(e.key==='ArrowRight'?1:-1);switchOption(order[(i+3)%3]);$(`#tab-${active}`).focus()}});
