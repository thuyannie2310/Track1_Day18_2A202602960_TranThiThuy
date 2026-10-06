# Three Option Design Sheet

## 1. Evidence Snapshot

| Practice Note | Raw Fact | Interpretation |
|---|---|---|
| P01 — dữ liệu Day 17 của Trần Thị Thuý | P01 gặp tình huống 3 lần gần đây; tìm ngoài 5–10 phút/lần; không bỏ dở nhưng bị gián đoạn. Exact quote đã được xác nhận: “Việc đi tra Google thường trả về kết quả quá mông lung, không đúng với ngữ cảnh của bài học.” | Hỗ trợ ngay tại nội dung có thể giảm chi phí chuyển ngữ cảnh; đây vẫn là suy đoán cần test. |
| Practice Note của Lê Thị Duyên | **Chưa được cung cấp trong dữ liệu hiện có. Không được AI bịa.** | Chờ nhóm bổ sung trước khi kết luận pattern. |
| Practice Note của Nguyễn Thùy Linh | **Chưa được cung cấp trong dữ liệu hiện có. Không được AI bịa.** | Chờ nhóm bổ sung trước khi kết luận pattern. |

### Hypothesis Problem — 5 thành tố

> **Situation:** Khi tự học trực tuyến ngoài thời gian có người hỗ trợ; **User:** học viên; **Job:** làm rõ một khái niệm/logic chưa hiểu để tiếp tục bài; **Barrier:** nguồn ngoài rộng, thiếu ngữ cảnh và phải mô tả lại vấn đề; **Consequence:** mất 5–10 phút/lần và gián đoạn mạch học.

- **Evidence hỗ trợ trực tiếp:** dữ liệu P01 nêu trên.
- **Rủi ro/ẩn số:** mới có một người; chưa biết trợ giúp chủ động có hữu ích hay gây phiền; chưa biết người học có kiểm tra căn cứ hay không.

## 2. Comparison Contract

### 70% invariants

| Thành phần giữ nguyên | Quyết định chung A/B/C |
|---|---|
| Target User | Học viên từng gặp một phần chưa hiểu khi học trực tuyến. |
| Situation | Đang học bài Gradient Descent một mình, dừng ở câu giải thích vì sao learning rate lớn làm loss dao động. |
| Task | Dùng từng option để hiểu cơ chế dao động và chọn lời giải thích đủ rõ để tiếp tục học. |
| Desired Outcome | Người học tự giải thích được: bước cập nhật quá lớn có thể vượt qua cực tiểu, gradient đổi dấu và loss dao động. |
| Content/Data Fixture | Cùng đoạn bài, công thức `w_new = w_old − η∇L(w)`, cùng câu đang vướng và cùng canned output. |
| UI System | Cùng layout hai cột, typography, màu, trạng thái kết quả, nguồn và nút reset. |

### 30% variables

| Tiêu chí | Option A — User-led Copilot | Option B — Diagnostic Co-creation | Option C — Proactive Agent |
|---|---|---|---|
| Solution Mechanism | Giải thích theo đúng điểm người học chủ động chọn | Hỏi hai câu để suy ra lỗ hổng rồi tạo phần ôn | Phát hiện tín hiệu dừng/đọc lại và tự chuẩn bị thẻ ôn |
| User Action | Chọn phần vướng và gọi AI | Trả lời/bỏ qua chẩn đoán, xem phần ôn | Xem lý do gợi ý, rà soát/sửa/duyệt thẻ |
| AI Action | Chỉ tạo giải thích theo yêu cầu | Phác thảo chẩn đoán và phần ôn thích ứng | Chủ động phát hiện, chuẩn bị thẻ nhưng không tự áp dụng |
| Trigger | Người dùng bấm gọi | Người dùng mở chẩn đoán | AI đưa gợi ý khi thấy tín hiệu; người dùng phải duyệt |
| Trade-off | Kiểm soát cao, nhưng người dùng phải biết mình cần hỏi gì | Cá nhân hoá hơn, nhưng thêm bước và có thể chẩn đoán sai | Nhanh/chủ động, nhưng dễ gây phiền hoặc suy diễn quá mức |

### Distance Check

- A khác B: A nhận câu hỏi do người học tự xác định; B dùng câu hỏi chẩn đoán để AI chọn phần ôn.
- B khác C: B chỉ bắt đầu sau khi người học tham gia chẩn đoán; C tự phát hiện và chuẩn bị nội dung trước.
- A khác C: A không suy luận hành vi và chỉ phản hồi theo lệnh; C suy luận tín hiệu hành vi nhưng bắt buộc người học rà soát/duyệt.

## 3. Human–AI Decision Table

| Trụ cột | Option A | Option B | Option C |
|---|---|---|---|
| Expectation | Nói rõ “AI chưa đọc hay phân tích cho tới khi bạn yêu cầu”; AI chỉ giải thích phần đã chọn. | Nói rõ hai câu chỉ tạo “chẩn đoán tạm thời”, không đánh giá năng lực. | Nói rõ nguồn tín hiệu (dừng 18 giây, đọc lại 2 lần), thẻ mới là bản nháp và có thể suy đoán sai. |
| Role & Agency | **Ask:** AI tạo lời giải sau khi người học bấm. Không tự thay nội dung bài. | **Ask:** AI chờ đủ câu trả lời hoặc cho phép bỏ qua; người học quyết định dùng phần ôn. | **Act** với bước rủi ro thấp (chuẩn bị nháp); **Ask** trước khi lưu/đánh dấu đã hiểu; **Don't Act** với đánh giá năng lực. |
| Evidence & Uncertainty | Dẫn đoạn bài và công thức; badge độ tin cậy trung bình; nêu chưa biết kiến thức nền. | Hiển thị câu trả lời nào tạo chẩn đoán; nêu dữ liệu chỉ gồm hai lựa chọn. | Hiển thị tín hiệu kích hoạt, nguồn 1/1, độ tin cậy 72%, cảnh báo dừng lâu có thể do mất tập trung. |
| Control & Recovery | Bỏ qua, dừng sinh, đổi câu hỏi, giải thích đơn giản hơn, hoàn tác. | Bỏ qua chẩn đoán, sửa câu trả lời, quay lại bài, hoàn tác. | Dừng, xem lý do, mở nguồn, sửa thẻ tại chỗ, duyệt, hoàn tác về trước phân tích. |

## 4. Prototype Annotation

### Option A
- **We expect:** tester tự chọn một điểm vướng và gọi AI.
- **Watch for:** tester có đọc giới hạn/căn cứ, có nhận ra quyền dừng/đổi câu hỏi không.
- **Do not explain:** nút “Giải thích phần tôi chọn”, chi tiết căn cứ, nút hoàn tác.

### Option B
- **We expect:** tester trả lời đủ hai câu hoặc chủ động bỏ qua; sau đó xem chẩn đoán là tạm thời.
- **Watch for:** chọn đáp án theo suy nghĩ thật hay đoán để “được đúng”; có sửa câu trả lời không.
- **Do not explain:** chip lựa chọn, “Bỏ qua chẩn đoán”, “Sửa câu trả lời”.

### Option C
- **We expect:** tester kiểm tra vì sao AI gợi ý, mở thẻ, sửa hoặc duyệt.
- **Watch for:** có tin vào 72% mà bỏ qua nguồn; có khó chịu vì bị theo dõi; có tìm thấy nút dừng/hoàn tác.
- **Do not explain:** tín hiệu phát hiện, badge 72%, nút sửa/duyệt/hoàn tác.

## 5. Test Script

**Relevant Context Question:** “Gần đây bạn có từng gặp một phần chưa hiểu khi đang học trực tuyến và phải rời bài để tìm lời giải thích ở nơi khác không?”

**Outcome Task:** “Trong tình huống này, bạn hãy dùng từng phương án A, B và C để hiểu vì sao learning rate quá lớn khiến loss dao động, rồi cho biết lời giải thích nào đủ rõ để bạn tiếp tục bài học.”

**Thứ tự luân phiên đề xuất:** Tester 1: A–B–C; Tester 2: B–C–A; Tester 3: C–A–B.

**Observation Focus:** first action; hesitation >3 giây; evidence read/ignored; misunderstanding; help needed; correction/recovery; selected option & trade-off.
