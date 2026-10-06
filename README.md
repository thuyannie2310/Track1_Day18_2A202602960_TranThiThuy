# Track 1 — Day 18+19: Design the Experiment

> Trạng thái: Prototype A/B/C đã sẵn sàng kiểm thử. Các trường phản hồi người dùng và đóng góp cá nhân chưa được điền thay, vì lab yêu cầu dữ liệu thật và reflection do chính học viên xác nhận.

## 1. Thông tin cá nhân & đội ngũ

- **Họ tên:** Trần Thị Thuý
- **Mã học viên:** 2A202602960
- **Tên nhóm:** Track 1
- **Thành viên:** Trần Thị Thuý (2A202602960), Lê Thị Duyên (2A202602411), Nguyễn Thùy Linh (2A202602497)
- **Case:** Case A — AI Tutor: Diagnostic Refresher

## 2. Hypothesis Problem

> Khi tự học một bài trực tuyến vào thời điểm không có giảng viên hoặc trợ giảng hỗ trợ ngay, học viên gặp trở ngại trong việc làm rõ một khái niệm/logic chưa hiểu để tiếp tục bài học, bởi nguồn tìm kiếm bên ngoài thường rộng và thiếu ngữ cảnh, dẫn đến mất khoảng 5–10 phút mỗi lần và bị gián đoạn mạch học.

**Evidence kế thừa từ Day 17:** P01 gặp tình huống tương tự ba lần trong thời gian gần đây, mỗi lần tìm kiếm bên ngoài mất 5–10 phút. P01 không bỏ dở nhưng bị gián đoạn; thao tác giải thích trực tiếp tại nội dung đã giúp xử lý nhanh hơn ở một số lần.

**Still unproven:** Dữ liệu Day 17 hiện có chỉ ghi nhận một người tham gia. Chưa biết pattern có lặp ở nhiều học viên hay không, và chưa biết cơ chế trợ giúp nào tạo cân bằng tốt nhất giữa tốc độ, độ tin cậy và quyền kiểm soát.

## 3. Three Solution Options

| Option | Cơ chế | Quyền quyết định cuối | Prototype |
|---|---|---|---|
| A — User-led Copilot | Người học chọn đúng phần đang vướng rồi chủ động gọi AI giải thích tại chỗ | Người học chọn câu hỏi, có thể bỏ qua, đổi câu hỏi hoặc hoàn tác | Xem `prototype-link.md` |
| B — Diagnostic Co-creation | AI hỏi hai câu chẩn đoán ngắn rồi tạo phần ôn theo câu trả lời | Người học có thể bỏ qua chẩn đoán, sửa câu trả lời và quyết định quay lại bài | Xem `prototype-link.md` |
| C — Proactive Agent | AI phát hiện tín hiệu dừng/đọc lại, tự chuẩn bị thẻ ôn nhưng không áp dụng trước khi được duyệt | Người học dừng, xem lý do, sửa thẻ, duyệt hoặc hoàn tác | Xem `prototype-link.md` |

Chi tiết Comparison Contract, Distance Check và Human–AI Decision Table nằm trong `three-option-design-sheet.md`.

## 4. Đóng góp cụ thể của tôi trong sản phẩm nhóm

> **Học viên tự điền trước khi nộp. AI không viết thay nội dung đóng góp cá nhân.**

- Option tôi chịu trách nhiệm chính: **[A / B / C — xác nhận]**
- Phần bối cảnh chung tôi trực tiếp đóng góp: **[điền]**
- Quyết định Human–AI Design tôi đã đề xuất hoặc phản biện: **[điền]**
- Cách tôi hỗ trợ kiểm tra chéo Option của đồng đội: **[điền]**
- Phần tôi đã tự sửa/bác bỏ từ bản AI hỗ trợ: **[điền]**

## 5. Dữ liệu kiểm thử & bài học

- **Phiên do Trần Thị Thuý điều phối:** Chưa thực hiện; dùng `prototype-feedback-note.md` để ghi fact-first ngay sau phiên test.
- **Tổng hợp ba phiên:** Chưa có dữ liệu thật; xem bảng trống trong `group-feedback-synthesis.md`.
- **Next Change:** Chỉ chốt sau khi đối chiếu đủ ba Feedback Notes; hiện chưa được phép kết luận.
- **Still Unproven hiện tại:** mức độ lặp lại của pain; khả năng hiểu đúng của người học; lựa chọn A/B/C; việc người học có đọc căn cứ/độ bất định; hiệu quả duy trì mạch học ngoài một phiên ngắn.

## 6. AI Support Log

AI được dùng để đọc yêu cầu lab, kế thừa dữ liệu đã xác nhận ở Day 17, gợi ý ba cơ chế, viết canned output, hỗ trợ mã HTML/CSS/JS và tạo bộ khung tài liệu. AI **không** được dùng để tạo quote, hành vi hay phản hồi tester. Xem khai báo đầy đủ trong `ai-support-log.md`.

## Chạy prototype cục bộ

Mở `dist/index.html` trực tiếp trong trình duyệt hoặc chạy một static server bất kỳ từ thư mục `dist/`. Prototype không gọi API và không thu thập dữ liệu.
