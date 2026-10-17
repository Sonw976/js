# JS Academy — Chuyên đề 11: Events (bản nâng cấp)

Website học JavaScript thuần sử dụng **HTML + CSS + JavaScript (ES Modules)**. Không cần backend, tài khoản hoặc database server. Mặc định **Light Mode**; có tùy chọn Dark Mode.

## Nội dung

- **12 bài Events**, 7 phần/bài: Đặt vấn đề; Lý thuyết và bản chất; Ví dụ và phân tích; Trực quan hóa; Lỗi thường gặp và Debug; Bài tập thực hành; Tổng kết và kiểm tra.
- **36 bài tập** (3/bài): Có hướng dẫn, Tự giải, Nâng cao. Một số thử thách nâng cao dùng lại bối cảnh bài tự giải để người học thử cách giải khác; đây không phải 36 bài toán độc lập hoàn toàn.
- Ví dụ ngắn chạy trực tiếp trong bài trong iframe sandbox; có thể mở chính đoạn code đó vào Workspace để sửa, không bị chuyển sang một bài tập khác.
- Workspace có Preview, Console, kiểm tra điều kiện, gợi ý, lời giải và tự lưu nháp trong trình duyệt.
- Tài liệu tham khảo kỹ thuật: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events
- Phong cách dẫn dắt: tình huống thực tế → giải thích chính xác → ví dụ → trực quan → debug → thực hành.

## Chạy local

Mở terminal trong thư mục có `index.html` và chạy:

```bash
python3 -m http.server 5500
```

Truy cập http://localhost:5500/ . **Không nên mở trực tiếp qua file://** vì website tải ES Modules.

## CodeMirror 6

Ứng dụng có adapter cho CodeMirror 6, nhưng **gói ZIP chưa chứa `vendor/codemirror/editor.js`** vì môi trường biên soạn không tải được npm dependencies. Cho đến khi build thư viện, ứng dụng tự dùng editor textarea dự phòng (vẫn có thể soạn và chạy code).

Để tạo CodeMirror 6 trên máy có Node.js/npm và kết nối mạng:

```bash
bash tools/build-editor.sh
```

Sau khi tạo `vendor/codemirror/editor.js`, commit file này lên GitHub cùng source. Không cần Node.js khi phục vụ website đã có bundle.

## GitHub Pages

Đưa các file `index.html`, `css/`, `js/`, `vendor/`, `.nojekyll` lên **root** một repository. Trong **Settings → Pages**, chọn **Deploy from a branch**, branch mong muốn và `/ (root)`. Các URL bài học dùng hash (`#/11-2`) nên không phụ thuộc rewrite server.

## Giới hạn và trạng thái kiểm thử

- Đã kiểm tra cú pháp module JavaScript cùng toàn bộ code ví dụ, starter và lời giải bằng Node.js, 12/12 bài và 36/36 bài tập có ID riêng.
- **Chưa xác nhận end-to-end** trên Chromium vì môi trường kiểm thử từ chối truy cập localhost (`ERR_BLOCKED_BY_ADMINISTRATOR`). Cần smoke test Reader, ví dụ inline, Workspace và Tests sau khi giải nén trên máy.
- Bộ kiểm tra chạy client-side trong iframe, thích hợp tự học; **không phải** hệ thống chấm thi chống gian lận. Một số bài kiểm tra chủ yếu dựa trên kết quả và chưa xác minh đầy đủ cách dùng API bắt buộc.
- Không có backend, đồng bộ thiết bị hoặc tài khoản. Tiến độ lưu trong localStorage trên trình duyệt hiện tại.
- Hãy kiểm tra chương trình ví dụ bằng nút **Chạy ví dụ tại đây** trước khi mở Workspace.

## Cấu trúc

- `js/content.js`: 12 bài, 36 bài tập, test và lời giải.
- `js/app.js`: điều hướng, reader, runner, bài tập, lưu tiến độ.
- `css/main.css`: Light/Dark và responsive.
- `tools/build-editor.sh`: build CodeMirror 6 tùy chọn.
- `vendor/codemirror/`: đích chứa bundle của editor.
